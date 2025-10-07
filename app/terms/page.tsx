export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    title: 'Terms of Service | NeuraForge',
    description: 'Review NeuraForge terms of service, including project agreements, intellectual property, and service conditions.',
    openGraph: {
      title: 'Terms of Service | NeuraForge',
      description: 'Review NeuraForge terms of service, including project agreements, intellectual property, and service conditions.',
    }
  };
}

export default function TermsPage() {
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
              Terms of <span className="hero-title-gradient">Service</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white/90 max-w-4xl mx-auto font-light leading-[1.3] tracking-wide">
              Clear terms for working together on your AI and development projects.
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
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Agreement to Terms</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    By accessing and using NeuraForge services, you accept and agree to be bound by the terms 
                    and provision of this agreement. These terms govern your relationship with NeuraForge 
                    regarding the use of our development and AI services.
                  </p>
                  <p>
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Services Description</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>NeuraForge provides:</p>
                  <ul className="space-y-3 ml-6">
                    <li>• Custom AI solutions and automation</li>
                    <li>• Web and mobile application development</li>
                    <li>• Data scraping and processing services</li>
                    <li>• Trading bot development</li>
                    <li>• AI agent creation and deployment</li>
                    <li>• Consulting and technical advisory services</li>
                  </ul>
                  <p>
                    All services are provided on a project basis with clear deliverables, timelines, and pricing 
                    outlined in individual project agreements.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Project Agreements</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Project Scope</h3>
                    <p>
                      Each project begins with a detailed scope document outlining deliverables, timelines, 
                      and technical requirements. Changes to scope require written agreement and may affect 
                      pricing and timelines.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Terms</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• Fixed-fee packages as outlined in our pricing</li>
                      <li>• 50% deposit required to begin work</li>
                      <li>• Remaining balance due upon project completion</li>
                      <li>• Additional work beyond scope billed separately</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Intellectual Property</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Client Ownership</h3>
                    <p>
                      Upon full payment, clients receive full ownership of custom code, designs, and deliverables 
                      created specifically for their project.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">NeuraForge Retained Rights</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• General methodologies and approaches</li>
                      <li>• Pre-existing tools and frameworks</li>
                      <li>• Knowledge and experience gained</li>
                      <li>• Right to showcase work in portfolio (unless otherwise agreed)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Components</h3>
                    <p>
                      Projects may include third-party libraries, APIs, and services subject to their own licenses. 
                      We ensure all components are properly licensed for commercial use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Confidentiality</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    We understand the sensitive nature of business information and maintain strict confidentiality:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li>• All project information is kept confidential</li>
                    <li>• Non-disclosure agreements available upon request</li>
                    <li>• Secure development and communication practices</li>
                    <li>• Limited access to project information within our team</li>
                  </ul>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Warranties and Disclaimers</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service Warranty</h3>
                    <p>
                      We warrant that our services will be performed in a professional manner consistent 
                      with industry standards. We provide a 30-day warranty on delivered code for bugs 
                      and issues related to original specifications.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Disclaimers</h3>
                    <ul className="space-y-2 ml-6">
                      <li>• No guarantee of specific business outcomes or profits</li>
                      <li>• Third-party service dependencies are outside our control</li>
                      <li>• Market conditions and external factors may affect results</li>
                      <li>• Client responsible for compliance with applicable laws</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Limitation of Liability</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    NeuraForge's total liability for any claims related to our services shall not exceed 
                    the total amount paid by the client for the specific project in question.
                  </p>
                  <p>
                    We are not liable for indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of profits, data, or business opportunities.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Termination</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">By Client</h3>
                    <p>
                      Clients may terminate projects with 7 days written notice. Payment is due for all 
                      work completed and costs incurred up to the termination date.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">By NeuraForge</h3>
                    <p>
                      We may terminate agreements for non-payment, breach of terms, or if continuing 
                      the project becomes impractical or impossible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Governing Law</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    These terms shall be governed by and construed in accordance with applicable local laws. 
                    Any disputes will be resolved through good-faith negotiation or, if necessary, 
                    binding arbitration.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Changes to Terms</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    We reserve the right to modify these terms at any time. Updated terms will be posted 
                    on our website and take effect immediately. Existing projects will continue under 
                    the terms agreed upon at project initiation.
                  </p>
                </div>
              </div>

              <div className="card-luxury p-12 lg:p-16 bg-gradient-to-br from-purple-50/80 to-blue-50/60 dark:from-purple-950/30 dark:to-blue-950/20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 tracking-wide">Contact Information</h2>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/90">
                  <p>
                    For questions about these terms or to discuss your project requirements:
                  </p>
                  <div className="space-y-3">
                    <p><strong>Email:</strong> legal@neuraforge.tech</p>
                    <p><strong>Business Inquiries:</strong> <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact Form</a></p>
                    <p><strong>Project Discussions:</strong> Schedule a discovery call through our contact page</p>
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