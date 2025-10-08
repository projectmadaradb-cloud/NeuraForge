'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface Job {
  id: string;
  topic: string;
  status: 'queued' | 'running' | 'done' | 'error';
  progress: number;
  createdAt: string;
  completedAt?: string;
}

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'done': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'error': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'running': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
      {status === 'running' && (
        <div className="animate-spin rounded-full h-2 w-2 border-b-2 border-current mr-1"></div>
      )}
      {status}
    </span>
  );
};

export default function JobsHistoryPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.jobs || []);
      } catch (err) {
        setError('Failed to load research history');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading research history...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-2">
              Research History
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your research jobs and access past reports
            </p>
          </div>
          <Link href="/research">
            <Button variant="luxury">Start New Research</Button>
          </Link>
        </div>

        {error && (
          <Card className="p-6 mb-8">
            <div className="text-center">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          </Card>
        )}

        {jobs.length === 0 ? (
          <Card className="p-12 text-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              No Research Jobs Yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start your first research to see it appear here
            </p>
            <Link href="/research">
              <Button variant="luxury">Start Research</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {job.topic}
                      </h3>
                      <StatusBadge status={job.status} />
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                      <span>
                        Created: {new Date(job.createdAt).toLocaleDateString()}
                      </span>
                      {job.completedAt && (
                        <span>
                          Completed: {new Date(job.completedAt).toLocaleDateString()}
                        </span>
                      )}
                      <span>Progress: {job.progress}%</span>
                    </div>

                    {job.status === 'running' && (
                      <div className="mt-3">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${job.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 ml-6">
                    <Link href={`/research/${job.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    
                    {job.status === 'done' && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={async () => {
                          try {
                            const response = await fetch(`/api/jobs/${job.id}/report?download=true`, {
                              method: 'POST',
                            });
                            
                            if (response.ok) {
                              const blob = await response.blob();
                              const url = URL.createObjectURL(blob);
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = `research-report-${job.id}.pdf`;
                              document.body.appendChild(a);
                              a.click();
                              document.body.removeChild(a);
                              URL.revokeObjectURL(url);
                            }
                          } catch (error) {
                            console.error('Failed to download PDF:', error);
                          }
                        }}
                      >
                        Download PDF
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need help with your research or custom automation?
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}