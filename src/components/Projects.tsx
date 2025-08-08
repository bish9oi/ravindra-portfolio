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

  const topRepos = (data || [])
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neon">
            Best GitHub Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Curated from my public repositories. Sorted by stars for quick highlights.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRepos.map((repo) => (
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
        )}
      </div>
    </section>
  );
};
