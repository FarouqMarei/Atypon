import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/images/image2.png";
import Vector from "@/assets/images/Vector.png";
import Burger from "@/assets/images/burger.png";
import Search from "@/assets/images/search.png";
import { useEffect, useState } from "react";
import ToggleSwitch from "@/shared/ToggleSwitch";
import { useTranslation } from "react-i18next";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isOn, setIsOn] = useState(false);
  const { t } = useTranslation();
  const [isChecked, setIsChecked] = useState(true);

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
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
    <section id="home" className="gap-16 bg-gray-20 md:h-full md:pb-0 fill">

      {/* IMAGE AND TEXT OVERLAY */}
      <div className="relative">
        <img
          src={HomePageGraphic}
          alt="home-page-graphic"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-50 text-center text-white">
          <div className="header__container flex justify-between items-center w-full px-10 padding-wall">
            {/* Left: Menu Button */}
            <div className="header__actions">
              <div className="action-div">
                <img src={Burger} alt="Atypon Logo" />
              </div>
              <div className="p-4 hidden md:block">
              <ToggleSwitch id="switch" checked={checked} onChange={checked => setChecked(checked)} />
              </div>
            </div>

            {/* Center: Logo */}
            <div className="header__logo">
              <img src={Vector} alt="Atypon Logo" />
            </div>

            {/* Right: Search Button and Toggle Switch */}
            <div className="header__actions flex items-center">
              <div className="action-div">
                <img src={Search} alt="Atypon Logo" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="header__menu Montserrat-font menu-padding-top menu-font-properties">
              <li>{t('Healthy Lifestyle')}</li>
              <li>{t('Chronic Diseases')}</li>
              <li>{t('Womens Health')}</li>
              <li>{t('Mental Health')}</li>
              <li>{t('More')}</li>
              <div className="vertical-line"></div>
              <li>{t('Health Education Publications')}</li>
            </ul>
            <hr className="horizontal-line" />
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-center bg-opacity-50 text-center text-white bottom-0 left-0 p-4 main-image-bottom-text">
          <h1 className="mt-4 text-sm md:text-lg healthy-lifestyle">
            {t('HEALTHY LIFESTYLE')}

          </h1>
          <p className="text-4xl md:text-6xl font-bold">
            {t('Could walking help lower cancer risk?')}

          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
