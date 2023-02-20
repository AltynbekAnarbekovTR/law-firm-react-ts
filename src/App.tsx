import Navbar from "@/scenes/navbar/Navbar";
import { useState, useEffect } from "react";
import Reviews from "./scenes/Reviews/Reviews";
import Home from "./scenes/home/Home";
import { SelectedPage } from "./types/types";
import Services from "./scenes/Services/Services";
import ContactUs from "./scenes/contactUs/ContactUs";
import Footer from "./scenes/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Navbar>
      <Home setSelectedPage={setSelectedPage} />
      <Reviews setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
