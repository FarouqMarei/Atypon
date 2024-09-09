import Stairs from "@/assets/images/image13.png";
import Vegetables from "@/assets/images/image3.png";
import Strawberry from "@/assets/images/image38.png";
import Stretch from "@/assets/images/image30.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 footer-font-color">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <label>RELATED POSTS</label>
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="">
            <img
              src={Stairs}
              alt="home-page-graphic"
              className="w-full h-auto object-cover"
            />
            <div className="inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-center text-white">
              {/* <h1 className="mt-4 text-sm md:text-lg healthy-lifestyle">
                healthy lifestyle
              </h1> */}
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
              {/* <h1 className="mt-4 text-sm md:text-lg healthy-lifestyle">
                healthy lifestyle
              </h1> */}
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
              {/* <h1 className="mt-4 text-sm md:text-lg healthy-lifestyle">
                healthy lifestyle
              </h1> */}
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
              {/* <h1 className="mt-4 text-sm md:text-lg healthy-lifestyle">
                healthy lifestyle
              </h1> */}
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
