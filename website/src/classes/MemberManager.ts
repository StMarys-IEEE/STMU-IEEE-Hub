import { Person } from './Person';

export class MemberManager {
  private currentMembers: Person[] = [];
  private alumniMembers: Person[] = [];

  constructor() {
    this.loadMembers();
  }

  // Load members from JSON data
  private async loadMembers() {
    try {
      // Load current members
      const currentMembersData = await import('../data/members.json');
      this.currentMembers = currentMembersData.default.map((member: any) => Person.fromJSON(member));
      
      // No alumni members currently - will be populated automatically when graduation dates pass
      this.alumniMembers = [];
    } catch (error) {
      console.error('Error loading members:', error);
    }
  }

  // Get all current members (automatically filters out alumni based on graduation date)
  getCurrentMembers(): Person[] {
    const allMembers = [...this.currentMembers, ...this.alumniMembers];
    return allMembers.filter(member => !member.isAlumni());
  }

  // Get all alumni members (automatically includes those who have graduated)
  getAlumniMembers(): Person[] {
    const allMembers = [...this.currentMembers, ...this.alumniMembers];
    return allMembers.filter(member => member.isAlumni());
  }

  // Get all members
  getAllMembers(): Person[] {
    return [...this.currentMembers, ...this.alumniMembers];
  }

  // Get members by type
  getMembersByType(type: 'current' | 'alumni' | 'all'): Person[] {
    switch (type) {
      case 'current':
        return this.currentMembers;
      case 'alumni':
        return this.alumniMembers;
      case 'all':
        return this.getAllMembers();
      default:
        return this.currentMembers;
    }
  }

  // Get member by ID
  getMemberById(id: string): Person | undefined {
    return this.getAllMembers().find(member => member.getId() === id);
  }

  // Add a new member
  addMember(member: Person): void {
    if (member.getType() === 'alumni') {
      this.alumniMembers.push(member);
    } else {
      this.currentMembers.push(member);
    }
  }

  // Remove a member
  removeMember(id: string): boolean {
    const currentIndex = this.currentMembers.findIndex(member => member.getId() === id);
    if (currentIndex !== -1) {
      this.currentMembers.splice(currentIndex, 1);
      return true;
    }

    const alumniIndex = this.alumniMembers.findIndex(member => member.getId() === id);
    if (alumniIndex !== -1) {
      this.alumniMembers.splice(alumniIndex, 1);
      return true;
    }

    return false;
  }

  // Get member statistics
  getStats() {
    return {
      current: this.currentMembers.length,
      alumni: this.alumniMembers.length,
      total: this.currentMembers.length + this.alumniMembers.length,
      hasAlumni: this.alumniMembers.length > 0
    };
  }

  // Get members with contact info
  getMembersWithContactInfo(): Person[] {
    return this.getAllMembers().filter(member => member.hasContactInfo());
  }

  // Get members by role
  getMembersByRole(role: string): Person[] {
    return this.getAllMembers().filter(member => 
      member.getRole().toLowerCase().includes(role.toLowerCase())
    );
  }

  // Search members
  searchMembers(query: string): Person[] {
    const lowercaseQuery = query.toLowerCase();
    return this.getAllMembers().filter(member => 
      member.getName().toLowerCase().includes(lowercaseQuery) ||
      member.getRole().toLowerCase().includes(lowercaseQuery) ||
      member.getBio()?.toLowerCase().includes(lowercaseQuery) ||
      member.getContributions().some(contrib => contrib.toLowerCase().includes(lowercaseQuery))
    );
  }
}
