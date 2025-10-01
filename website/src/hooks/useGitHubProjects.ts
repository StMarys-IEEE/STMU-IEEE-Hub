import { useState, useEffect } from 'react';
import { Project } from '../types';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  archived: boolean;
  disabled: boolean;
}

export function useGitHubProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // First, try to fetch from GitHub API
        const response = await fetch('https://api.github.com/orgs/StMarys-IEEE/repos?sort=updated&per_page=20', {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'IEEE-StMarys-Website'
          }
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();

        // Transform GitHub repos to our Project format
        const transformedProjects: Project[] = repos
          .filter(repo => !repo.archived && !repo.disabled) // Only active repos
          .map(repo => ({
            id: repo.id.toString(),
            title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: repo.description || 'No description available',
            technologies: [
              ...(repo.language ? [repo.language] : []),
              ...repo.topics.slice(0, 4) // Limit topics
            ],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage,
            contributors: [], // We'll keep this empty for now
            status: 'active' as const,
            featured: repo.stargazers_count > 0 || repo.forks_count > 0,
            image: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&sig=${repo.id}`,
            // Additional GitHub-specific data
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lastUpdated: repo.pushed_at
          }));

        setProjects(transformedProjects);
      } catch (err) {
        console.error('Failed to fetch GitHub projects:', err);
        
        // Fallback to static data if GitHub API fails
        try {
          const staticData = await import('../data/projects.json');
          setProjects(staticData.default);
          setError('Using cached data - GitHub API unavailable');
        } catch (staticErr) {
          setError('Unable to load projects data');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
