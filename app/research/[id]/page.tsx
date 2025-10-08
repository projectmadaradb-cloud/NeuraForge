'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface JobStatus {
  id: string;
  status: 'queued' | 'running' | 'done' | 'error';
  progress: number;
  topic: string;
  errorMsg?: string;
  sources?: Array<{ url: string; title: string }>;
  createdAt: string;
}

interface ReportData {
  mdx: string;
  pdfUrl?: string;
  summary: string;
  sources: Array<{ n: number; url: string; title: string }>;
  insights: {
    keyFindings: string[];
    recommendations: string[];
    confidence: number;
    sourceCount: number;
  };
}

const StatusChip = ({ status, progress }: { status: string; progress: number }) => {
  const getStatusInfo = () => {
    if (progress < 20) return { label: 'Searching', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' };
    if (progress < 50) return { label: 'Extracting', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' };
    if (progress < 80) return { label: 'Drafting', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' };
    if (progress < 100) return { label: 'Exporting', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' };
    if (status === 'done') return { label: 'Done', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' };
    if (status === 'error') return { label: 'Error', color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' };
    return { label: 'Queued', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' };
  };

  const { label, color } = getStatusInfo();

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${color}`}>
      {status === 'running' && (
        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current mr-2"></div>
      )}
      {label}
    </div>
  );
};

export default function ResearchProgressPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.id as string;
  
  const [job, setJob] = useState<JobStatus | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!jobId) {
      setError('Invalid job ID');
      setLoading(false);
      return;
    }

    const fetchJobStatus = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Research job not found');
          } else {
            setError('Failed to fetch job status');
          }
          return;
        }
        
        const jobData = await response.json();
        setJob(jobData);
        
        if (jobData.status === 'done') {
          // Fetch the report
          const reportResponse = await fetch(`/api/jobs/${jobId}/report`);
          if (reportResponse.ok) {
            const reportData = await reportResponse.json();
            setReport(reportData);
          }
        }
      } catch (err) {
        setError('Failed to load research job');
      } finally {
        setLoading(false);
      }
    };

    fetchJobStatus();

    // Poll for updates if job is not complete
    const interval = setInterval(() => {
      if (job?.status === 'done' || job?.status === 'error') {
        clearInterval(interval);
        return;
      }
      fetchJobStatus();
    }, 2000);

    return () => clearInterval(interval);
  }, [jobId, job?.status]);

  const handleDownloadPDF = async () => {
    if (!jobId) return;
    
    try {
      const response = await fetch(`/api/jobs/${jobId}/report?download=true`, {
        method: 'POST',
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `research-report-${jobId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Failed to download PDF:', error);
    }
  };

  const copyMarkdown = () => {
    if (report?.mdx) {
      navigator.clipboard.writeText(report.mdx);
    }
  };

  const downloadMarkdown = () => {
    if (report?.mdx) {
      const blob = new Blob([report.mdx], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `research-report-${jobId}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const copyPlainText = () => {
    if (report?.mdx) {
      // Simple markdown to plain text conversion
      const plainText = report.mdx
        .replace(/#{1,6}\s+/g, '') // Remove headers
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
        .replace(/\*([^*]+)\*/g, '$1') // Remove italic
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/`([^`]+)`/g, '$1') // Remove inline code
        .replace(/^\s*[-*+]\s+/gm, '• ') // Convert bullets
        .replace(/\n{3,}/g, '\n\n'); // Normalize line breaks
      
      navigator.clipboard.writeText(plainText);
    }
  };

  const copyShareLink = () => {
    const shareUrl = `${window.location.origin}/research/${jobId}`;
    navigator.clipboard.writeText(shareUrl);
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading research job...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Research Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
            <Link href="/research">
              <Button>Start New Research</Button>
            </Link>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link href="/research" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
            ← Back to Research
          </Link>
          <h1 className="text-3xl font-bold font-display text-gray-900 dark:text-white mb-2">
            Research Progress
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Topic: {job?.topic}
          </p>
        </div>

        {/* Progress Card */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Status
            </h2>
            <StatusChip status={job?.status || 'queued'} progress={job?.progress || 0} />
          </div>
          
          <div className="space-y-4">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span>{job?.progress || 0}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${job?.progress || 0}%` }}
                />
              </div>
            </div>

            {/* Error Message */}
            {job?.errorMsg && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-sm">{job.errorMsg}</p>
              </div>
            )}

            {/* Timestamp */}
            {job?.createdAt && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Started: {new Date(job.createdAt).toLocaleString()}
              </p>
            )}
          </div>
        </Card>

        {/* Results Card */}
        {report && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Research Complete
            </h2>
            
            <div className="space-y-6">
              {/* Summary */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                <h3 className="font-medium text-green-900 dark:text-green-300 mb-2">
                  Executive Summary
                </h3>
                <p className="text-green-800 dark:text-green-300 text-sm">
                  {report.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleDownloadPDF} variant="luxury">
                  Download PDF
                </Button>
                <Button onClick={downloadMarkdown} variant="outline">
                  Download Markdown
                </Button>
                <Button onClick={copyMarkdown} variant="outline">
                  Copy Markdown
                </Button>
                <Button onClick={copyPlainText} variant="ghost">
                  Copy Text
                </Button>
                <Button onClick={copyShareLink} variant="ghost">
                  Share Link
                </Button>
              </div>

              {/* Key Insights */}
              {report.insights && (
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Key Insights & Action Items
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Key Findings
                      </h4>
                      <ul className="space-y-1">
                        {report.insights.keyFindings.map((finding, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                            • {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Recommendations
                      </h4>
                      <ul className="space-y-1">
                        {report.insights.recommendations.map((rec, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                            • {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Sources */}
              {report.sources.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Sources ({report.sources.length})
                  </h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {report.sources.map((source) => (
                      <div key={source.n} className="text-sm">
                        <span className="font-medium text-gray-600 dark:text-gray-400">
                          [{source.n}]
                        </span>{' '}
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {source.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer CTA */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Need custom automation or AI solutions?
                </p>
                <Link href="/contact">
                  <Button variant="outline">Start a Project</Button>
                </Link>
              </div>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}