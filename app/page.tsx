import { Vitrine } from '@/components/landing/Vitrine';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { Navbar } from '../components/landing/Navbar';
import { Newsletter } from '../components/landing/Newsletter';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { createClient } from '../utils/supabase/server';

export default async function LandingPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar user={user} />
        <Hero />
        <Vitrine />
        <Newsletter />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
