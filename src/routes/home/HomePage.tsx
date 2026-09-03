import Hero from "../../components/sections/Hero";
import StatsStrip from "../../components/sections/StatsStrip";
import Work from "../../components/sections/Work";
import About from "../../components/sections/About";
import DesignFocus from "../../components/sections/DesignFocus";
import Approach from "../../components/sections/Approach";
import Testimonials from "../../components/sections/Testimonials";
import ContactCTA from "../../components/sections/ContactCTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Work />
      <About />
      <DesignFocus />
      <Approach />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomePage;
