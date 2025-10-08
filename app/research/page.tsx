'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface JobStatus {
  id: string;
  status: 'queued' | 'running' | 'done' | 'error';
  progress: number;
  topic: string;
  errorMsg?: string;
  sources?: Array<{ url: string; title: string }>;
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

export default function ResearchPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    topic: '',
    audience: 'general',
    format: 'report',
    tone: 'professional',
    length: 'medium',
    email: '',
  });
  
  const [currentJob, setCurrentJob] = useState<JobStatus | null>(null);
  const [report, setReport] = useState<ReportData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Poll job status - store job ID separately to prevent useEffect restarts
  const [jobId, setJobId] = useState<string | null>(null);
  
  useEffect(() => {
    if (!jobId || currentJob?.status === 'done' || currentJob?.status === 'error') {
      return;
    }

    console.log('Starting polling for job:', jobId);

    const interval = setInterval(async () => {
      try {
        console.log('Polling job:', jobId);
        const response = await fetch(`/api/jobs/${jobId}`);
        if (!response.ok) {
          console.error('Job status fetch failed:', response.status);
          return;
        }
        
        const jobData = await response.json();
        console.log('Job status update:', jobData);
        
        setCurrentJob(jobData);
        
        if (jobData.status === 'done') {
          console.log('Job completed, fetching report for:', jobId);
          // Fetch the report using the stable job ID
          const reportResponse = await fetch(`/api/jobs/${jobId}/report`);
          if (reportResponse.ok) {
            const reportData = await reportResponse.json();
            console.log('Report fetched successfully');
            setReport(reportData);
          }
        }
      } catch (error) {
        console.error('Failed to poll job status:', error);
      }
    }, 2000);

    return () => {
      console.log('Clearing polling interval for job:', jobId);
      clearInterval(interval);
    };
  }, [jobId, currentJob?.status]); // Use stable jobId instead of currentJob.id

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setCurrentJob(null);
    setJobId(null); // Reset job ID
    setReport(null);

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create research job');
      }

      // Redirect to progress page immediately
      router.push(`/research/${data.jobId}`);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to start research');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 dark:text-white">
              Autonomous Research Assistant
            </h1>
            <Link 
              href="/research/history" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline ml-4"
            >
              View History
            </Link>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enter a topic and get a comprehensive research report with sources, 
            analysis, and insights in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Research Parameters
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Research Topic *
                </label>
                <Input
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  placeholder="e.g., AI agents for e-commerce automation"
                  required
                  minLength={10}
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Audience
                  </label>
                  <select
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="general">General</option>
                    <option value="technical">Technical</option>
                    <option value="executive">Executive</option>
                    <option value="academic">Academic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="summary">Summary</option>
                    <option value="report">Full Report</option>
                    <option value="thread">Thread Style</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tone
                  </label>
                  <select
                    value={formData.tone}
                    onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="academic">Academic</option>
                    <option value="conversational">Conversational</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Length
                  </label>
                  <select
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="short">Short (~1 page)</option>
                    <option value="medium">Medium (~2-3 pages)</option>
                    <option value="long">Long (~4-5 pages)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  📧 Email Notifications
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Get a premium email notification with direct links to your report when research completes
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.topic.trim()}
                className="w-full py-4 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:transform-none disabled:shadow-md"
                size="lg"
              >
                {isSubmitting ? 'Starting Research...' : 'Start Research'}
              </Button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
              </div>
            )}
          </Card>

          {/* Right Panel - Progress & Results */}
          <div className="space-y-6">
            {/* Progress Panel */}
            {currentJob && (
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Research Progress
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Topic: {currentJob.topic}</span>
                      <span>{currentJob.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${currentJob.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      currentJob.status === 'done' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                      currentJob.status === 'error' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' :
                      currentJob.status === 'running' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {currentJob.status === 'queued' && 'Queued'}
                      {currentJob.status === 'running' && 'Researching...'}
                      {currentJob.status === 'done' && 'Complete'}
                      {currentJob.status === 'error' && 'Error'}
                    </div>
                  </div>

                  {currentJob.errorMsg && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg">
                      <p className="text-red-700 dark:text-red-300 text-sm">{currentJob.errorMsg}</p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Results Panel */}
            {report && (
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Research Complete
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                      <strong>Summary:</strong>
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      {report.summary}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                      Download PDF
                    </Button>
                    <Button onClick={copyMarkdown} variant="outline" size="sm">
                      Copy Markdown
                    </Button>
                  </div>

                  {report.sources.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Sources ({report.sources.length})
                      </h4>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
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

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                      Need a custom automation?{' '}
                      <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Start a Project
                      </Link>
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}