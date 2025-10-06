import Link from 'next/link';
import { Button } from './ui/Button';

export default function CtaBand() {
  return (
    <section className="section-padding bg-gradient-to-r from-nf-primary/20 via-nf-accent/20 to-nf-primary/20">
      <div className="container-width">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-nf-primary/20 to-nf-accent/20 rounded-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nf-primary/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 font-medium">
                Fixed-fee proposals in 48h
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
              Ready to 
              <span className="text-nf-primary"> Ship?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get a detailed proposal in 48 hours. Fixed scope, clear timeline, 
              measurable outcomes. No meetings about meetings.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-4 min-w-[200px] shadow-glow hover:shadow-glow-strong">
                  Get Your Proposal
                </Button>
              </Link>
              
              <Link href="/work">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 min-w-[200px] border-white/20 text-white hover:bg-white/10"
                >
                  See Our Results
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70">
                <div>
                  <div className="font-semibold text-white mb-1">Response Time</div>
                  <div>Within 24 hours</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Delivery</div>
                  <div>2-6 weeks typically</div>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Payment</div>
                  <div>Fixed-fee milestones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}