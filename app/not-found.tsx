import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nf-bg flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-8">🔍</div>
        <h1 className="text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-white/70 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}