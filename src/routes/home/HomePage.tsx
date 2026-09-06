import Hero from "../../components/sections/Hero";
import StatsStrip from "../../components/sections/StatsStrip";
import Brands from "../../components/sections/Brands";
import Work from "../../components/sections/Work";
import Projects from "../../components/sections/Projects";
import Partnerships from "../../components/sections/Partnerships";
import About from "../../components/sections/About";
import DesignFocus from "../../components/sections/DesignFocus";
import Approach from "../../components/sections/Approach";
import Talent from "../../components/sections/Talent";
import ContactCTA from "../../components/sections/ContactCTA";

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Brands />
      <Work />
      <Projects />
      <Partnerships />
      <About />
      <DesignFocus />
      <Approach />
      <Talent />
      <ContactCTA />
    </>
  );
};

export default HomePage;
