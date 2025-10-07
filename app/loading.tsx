export default function Loading() {
  return (
    <div className="min-h-screen bg-nf-bg flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-nf-primary/30 border-t-nf-primary rounded-full animate-spin"></div>
        <p className="text-gray-600 dark:text-white/70 font-medium">Loading...</p>
      </div>
    </div>
  );
}