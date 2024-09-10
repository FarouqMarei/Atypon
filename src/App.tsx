import Home from "@/scenes/home";
import Main from "@/scenes/main";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { useTranslation } from "react-i18next";
import AboutUs from "./scenes/about";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-20">
      <Home setSelectedPage={setSelectedPage} />
      <Main setSelectedPage={setSelectedPage} />
      <Footer />
      <AboutUs />
    </div>
  );
}

export default App;
