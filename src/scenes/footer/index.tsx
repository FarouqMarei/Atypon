import Stairs from "@/assets/images/image13.png";
import Vegetables from "@/assets/images/image3.png";
import Strawberry from "@/assets/images/image38.png";
import Stretch from "@/assets/images/image30.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Footer = () => {

  const slides = [
    { src: Stairs, alt: "Smarter Food Choices 101 Tips For Busy Women" },
    { src: Vegetables, alt: "Smarter Food Choices 101 Tips For Busy Women" },
    { src: Strawberry, alt: "Smarter Food Choices 101 Tips For Busy Women" },
    { src: Stretch, alt: "Smarter Food Choices 101 Tips For Busy Women" },
  ];

  return (
    <footer className="bg-primary-100 py-16 footer-font-color">
      <p className="related-posts">RELATED POSTS</p>
      <div className="block md:hidden lg:hidden">
        <Carousel
          autoPlay={false}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          swipeable
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.src} alt={slide.alt} className="w-full h-auto" />
              <p className="legend">{slide.alt}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex hidden md:block">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="">
            <img
              src={Stairs}
              alt="home-page-graphic"
              className="w-full h-auto object-cover"
            />
            <div className="inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-center text-white">
            </div>
          </div>
          <p>Smarter Food Choices 101 Tips For Busy Women</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="">
            <img
              src={Vegetables}
              alt="home-page-graphic"
              className="w-full h-auto object-cover"
            />
            <div className="inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-center text-white">
            </div>
          </div>
          <p>Smarter Food Choices 101 Tips For Busy Women</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="">
            <img
              src={Strawberry}
              alt="home-page-graphic"
              className="w-full h-auto object-cover"
            />
            <div className="inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-center text-white">
            </div>
          </div>
          <p>Smarter Food Choices 101 Tips For Busy Women</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="">
            <img
              src={Stretch}
              alt="home-page-graphic"
              className="w-full h-auto object-cover"
            />
            <div className="inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-center text-white">
            </div>
          </div>
          <p>Smarter Food Choices 101 Tips For Busy Women</p>
        </div>
      </div>
      <div>
        <ScrollToTop />
      </div>
    </footer>
  );
};

export default Footer;
