import AboutMe from "../Home/AboutMe";
import HeroSection from "../Home/HeroSection";
import MySkills from "../Home/MySkills";
import MyPortfolio from "../Home/MyPortfolio";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";

export default function Home() {
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            {/* <ContactMe /> */}
            <Footer />
        </>
    );
}