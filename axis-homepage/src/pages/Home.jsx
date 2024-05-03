import Content from "../components/Content";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Photo from "../components/Photo";
const home = () => {
  return (
    <div>
      <Navbar />
      <Photo />
      <HeroSection />
      <Content />
      <Footer />
    </div>
  );
};

export default home;
