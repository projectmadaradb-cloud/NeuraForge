export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    title: 'Privacy Policy | NeuraForge',
    description: 'Learn how NeuraForge protects your privacy and handles your data with transparency and security.',
    openGraph: {
      title: 'Privacy Policy | NeuraForge',
      description: 'Learn how NeuraForge protects your privacy and handles your data with transparency and security.',
    }
  };
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen transform scale-[0.98] origin-top transition-transform duration-300 hover:scale-100">
      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-50/90 via-white to-blue-50/70 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40">
        <div className="absolute inset-0 grid-pattern opacity-25"></div>
        <div className="absolute top-1/5 left-1/5 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/5 right-1/5 w-[28rem] h-[28rem] bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-display text-gray-900 dark:text-white leading-[0.9] tracking-tight">
              Privacy <span className="hero-title-gradient">Policy</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/90 max-w-4xl mx-auto font-light leading-[1.3] tracking-wide">
              Your privacy matters. Here's how we protect and respect your data.
            </p>
            <div className="text-lg md:text-xl text-gray-600 dark:text-white/70 font-medium">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <div className="space-y-16">
              
              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Information We Collect</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                  <p className="text-gray-800 dark:text-white/90">
                    We collect information you provide directly to us, such as when you contact us through our website, 
                    request a consultation, or engage our services.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information:</h3>
                    <ul className="space-y-2 text-gray-800 dark:text-white/90 ml-6">
                      <li>• Name and email address</li>
                      <li>• Company name and job title</li>
                      <li>• Phone number (if provided)</li>
                      <li>• Project requirements and specifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">How We Use Your Information</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-3 ml-6">
                    <li>• Respond to your inquiries and provide requested services</li>
                    <li>• Communicate with you about your projects</li>
                    <li>• Send you updates about our services (only with your consent)</li>
                    <li>• Improve our website and services</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Information Sharing</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties. 
                    We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal requirements</li>
                    <li>• To protect our rights and safety</li>
                    <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Data Security</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Security Measures Include:</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure servers and databases</li>
                      <li>• Regular security assessments</li>
                      <li>• Limited access to personal information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Your Rights</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>You have the right to:</p>
                  <ul className="space-y-3 ml-6">
                    <li>• Access your personal information we hold</li>
                    <li>• Request correction of inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Data portability (receive your data in a structured format)</li>
                  </ul>
                  <p className="font-semibold">
                    To exercise these rights, contact us at privacy@neuraforge.tech
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Cookies and Tracking</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    Our website uses minimal tracking. We use essential cookies for website functionality 
                    and may use analytics to understand how our site is used (only with aggregated, 
                    non-personal data).
                  </p>
                  <p>
                    We do not use advertising cookies or sell your data to advertisers.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Changes to This Policy</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16 bg-gradient-to-br from-purple-50/80 to-blue-50/60 dark:from-purple-950/30 dark:to-blue-950/20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Contact Us</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, 
                    please contact us:
                  </p>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> privacy@neuraforge.tech</p>
                    <p><strong>Website:</strong> <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact Form</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}