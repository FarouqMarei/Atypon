import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AboutUs = () => {
  return (
    <footer className="bg-primary-600 py-16 footer-font-color font-size-12">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex bottom-footer hidden md:block">
        <label>ABOUT</label>
        <label>ANNOUNCEMENTS</label>
        <label>NEWS</label>
        <label>VIDEOS</label>
        <label>CONTACT US</label>
      </div>
      <div className="block md:hidden lg:hidden">
        <p>ABOUT</p>
        <p>ANNOUNCEMENTS</p>
        <p>NEWS</p>
        <p>VIDEOS</p>
        <p>CONTACT US</p>
      </div>
      <p className="padding-top-20">Atypon © 2022 all rights reserved</p>
      <div>
        <ScrollToTop />
      </div>
    </footer>
  );
};

export default AboutUs;
