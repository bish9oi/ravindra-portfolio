import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, GitFork, Globe, ExternalLink } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  homepage?: string | null;
  fork: boolean;
}

interface PinnedRepo {
  repo: string;
  owner: string;
  link: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  website?: string | null;
}

const GITHUB_USERNAME = 'bish9oi';

export const Projects = () => {
  const { data, isLoading, error } = useQuery<GitHubRepo[]>({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
      });
      if (!res.ok) throw new Error('Failed to load repositories');
      return res.json();
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const { data: pinnedData } = useQuery<PinnedRepo[]>({
    queryKey: ['pinned-repos', GITHUB_USERNAME],
    queryFn: async () => {
      const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${GITHUB_USERNAME}`);
      if (!res.ok) return [] as PinnedRepo[];
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const repos = (data || []).filter((r) => !r.fork);

  return (
    <section className="py-20 px-4 relative overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-6 text-neon">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Pinned highlights and a complete list of my repositories.
          </p>
        </motion.div>

        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="card-glow p-6 h-48 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-muted-foreground">
            Unable to load projects right now. Please try again later.
          </div>
        )}

        {!isLoading && !error && (
          <div className="space-y-14">
            {/* Pinned Repositories */}
            {pinnedData && pinnedData.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-neon-secondary">Pinned Repositories</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pinnedData.map((repo) => (
                    <motion.div
                      key={repo.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="card-glow p-6 h-full flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="text-xl font-bold text-foreground">
                            {repo.repo}
                          </h3>
                          <div className="flex items-center gap-3 text-muted-foreground text-sm">
                            <span className="inline-flex items-center gap-1"><Star className="w-4 h-4" />{repo.stars}</span>
                            <span className="inline-flex items-center gap-1"><GitFork className="w-4 h-4" />{repo.forks}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {repo.description || 'No description provided.'}
                        </p>

                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-sm text-neon-secondary">{repo.language || '—'}</span>
                          <div className="flex gap-2">
                            <Button className="btn-cyber-secondary" asChild>
                              <a href={repo.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                                GitHub
                              </a>
                            </Button>
                            {(repo.website) && (
                              <Button className="btn-cyber" asChild>
                                <a href={repo.website} target="_blank" rel="noopener noreferrer">
                                  <Globe className="w-4 h-4" />
                                  Live
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* All Repositories */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-secondary">All Repositories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="card-glow p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {repo.name}
                        </h3>
                        <div className="flex items-center gap-3 text-muted-foreground text-sm">
                          <span className="inline-flex items-center gap-1"><Star className="w-4 h-4" />{repo.stargazers_count}</span>
                          <span className="inline-flex items-center gap-1"><GitFork className="w-4 h-4" />{repo.forks_count}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {repo.description || 'No description provided.'}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-sm text-neon-secondary">{repo.language || '—'}</span>
                        <div className="flex gap-2">
                          <Button className="btn-cyber-secondary" asChild>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                              GitHub
                            </a>
                          </Button>
                          {repo.homepage && (
                            <Button className="btn-cyber" asChild>
                              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
