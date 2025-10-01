export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  languages_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  archived: boolean;
  disabled: boolean;
}

export interface GitHubLanguages {
  [key: string]: number;
}

const GITHUB_API_BASE = 'https://api.github.com';
const ORG_NAME = 'StMarys-IEEE';

export class GitHubApiService {
  private static async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'IEEE-StMarys-Website'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('GitHub API fetch error:', error);
      throw error;
    }
  }

  static async getOrganizationRepositories(): Promise<GitHubRepository[]> {
    const url = `${GITHUB_API_BASE}/orgs/${ORG_NAME}/repos?sort=updated&per_page=100`;
    return this.fetchWithErrorHandling<GitHubRepository[]>(url);
  }

  static async getRepositoryLanguages(repoName: string): Promise<GitHubLanguages> {
    const url = `${GITHUB_API_BASE}/repos/${ORG_NAME}/${repoName}/languages`;
    return this.fetchWithErrorHandling<GitHubLanguages>(url);
  }

  static async getRepository(repoName: string): Promise<GitHubRepository> {
    const url = `${GITHUB_API_BASE}/repos/${ORG_NAME}/${repoName}`;
    return this.fetchWithErrorHandling<GitHubRepository>(url);
  }
}

// Helper function to get top languages from languages object
export function getTopLanguages(languages: GitHubLanguages, limit: number = 5): string[] {
  return Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([language]) => language);
}

// Helper function to determine project status based on activity
export function getProjectStatus(repo: GitHubRepository): 'active' | 'completed' | 'archived' {
  if (repo.archived) return 'archived';
  if (repo.disabled) return 'archived';
  
  const lastPushed = new Date(repo.pushed_at);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  if (lastPushed < sixMonthsAgo) return 'completed';
  return 'active';
}

// Helper function to format repository data for our Project interface
export function formatRepositoryAsProject(repo: GitHubRepository, languages: string[] = []): any {
  return {
    id: repo.id.toString(),
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || 'No description available',
    technologies: languages,
    githubUrl: repo.html_url,
    liveUrl: repo.homepage,
    contributors: [], // We'll need to fetch this separately if needed
    status: getProjectStatus(repo),
    featured: repo.stargazers_count > 0 || repo.forks_count > 0,
    image: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&sig=${repo.id}`, // Placeholder with unique ID
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    lastUpdated: repo.pushed_at
  };
}
