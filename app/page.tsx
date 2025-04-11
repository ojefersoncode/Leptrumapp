import { Vitrine } from '@/components/landing/Vitrine';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { ScrollToTop } from '../components/landing/ScrollToTop';

export default async function LandingPage() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Hero />
        <Vitrine />
        <Newsletter />
        <div className="bg-slate-200">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}
