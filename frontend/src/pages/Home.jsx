import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import BentoGrid from "../components/BentoGrid";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";


const Home = () => {
  const { user, loading } = useAuth();
  return (
    <main className="bg-[#f6f1eb] overflow-x-hidden font-['Outfit']">

      <Navbar />

      <Hero />

      <div className="h-[1px] bg-[#e5d8cb] w-[90%] mx-auto"></div>

      <FeaturedSection />

      <div className="h-[1px] bg-[#e5d8cb] w-[90%] mx-auto"></div>

      <BentoGrid />

      <Footer />

    </main>
  );
};

export default Home;