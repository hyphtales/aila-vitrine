import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Founder from '@/components/Founder';
import Limits from '@/components/Limits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Founder />
        <Limits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
