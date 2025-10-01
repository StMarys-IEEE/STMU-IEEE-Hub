import { useState, useEffect } from 'react';
import { MemberManager } from '../classes/MemberManager';
import { Person } from '../classes/Person';

export const useMembers = () => {
  const [memberManager] = useState(() => new MemberManager());
  const [currentMembers, setCurrentMembers] = useState<Person[]>([]);
  const [alumniMembers, setAlumniMembers] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Wait a bit for the MemberManager to load data
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setCurrentMembers(memberManager.getCurrentMembers());
        setAlumniMembers(memberManager.getAlumniMembers());
      } catch (err) {
        console.error('Error loading members:', err);
        setError('Failed to load members');
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, [memberManager]);

  const getFilteredMembers = (filter: 'current' | 'alumni' | 'all'): Person[] => {
    return memberManager.getMembersByType(filter);
  };

  const getMemberStats = () => {
    return memberManager.getStats();
  };

  const searchMembers = (query: string): Person[] => {
    return memberManager.searchMembers(query);
  };

  const getMembersWithContactInfo = (): Person[] => {
    return memberManager.getMembersWithContactInfo();
  };

  return {
    currentMembers,
    alumniMembers,
    loading,
    error,
    getFilteredMembers,
    getMemberStats,
    searchMembers,
    getMembersWithContactInfo,
    memberManager
  };
};
