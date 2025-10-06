import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import SelectedWork from '@/components/SelectedWork';
import ProcessStrip from '@/components/ProcessStrip';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <SelectedWork />
      <ProcessStrip />
      <Testimonials />
      <CtaBand />
    </main>
  );
}