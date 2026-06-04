import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Showcase from '../components/Showcase';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Offer from '../components/Offer';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030B25] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Problem />
      <Solution />
      <Showcase />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
