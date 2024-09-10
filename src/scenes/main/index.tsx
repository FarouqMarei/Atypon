import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import farouq from "@/assets/images/officialMe.jpg";
import walk from "@/assets/images/image36.png";
import Calendar from "@/assets/images/Calendar.png";
import Share from "@/assets/images/Share.png";
import View from "@/assets/images/View.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-3 w-3" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-3 w-3" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <main className="main-layout">
      {/* Left Sidebar */}
      <aside className="sidebar left-sidebar font-color font-size-12">
        <div>
          <p><span className="font-weight-700">Cover Image</span>: A stripy monarch caterpillar (Danaus plexippus) gorges on a butterfly milkweed. Photo by: Sarah Mac Farland</p>
          <p><span className="font-weight-700">Photo by</span>: Sarah Mac Farland</p>
        </div>
        <ul>
          <li><a href="#">Popular Articles</a></li>
          <li><a href="#">Trending Topics</a></li>
          <li><a href="#">Health Tips</a></li>
          <li><a href="#">Newsletter Signup</a></li>
        </ul>
      </aside>

      {/* <!-- Main Content --> */}
      <section className="main-content font-color">

        <section className="content">
          <div className="article-content">
            <article className="drop-cap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque
              sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet,consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam
              ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate.</article>
            <h3 className="font-size-32">Abstract</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi,
              pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis.
              In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
            <div className="ad-banner">Ad Banner 728x90</div>
            <h3 className="font-size-32">Lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
            <div id="body"></div>
            <img src={walk} alt="Atypon Logo" />
            <p className="font-size-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </section>
      </section>

      {/* <!-- Right Sidebar --> */}
      <aside className="right-sidebar font-color">
        <div className="author-info">
          <div className="text-align-left">
            <p className="font-size-16">About</p>
            <hr className="horizontal-line" />
          </div>
          <div className="flex padding-top-10">
            <img src={farouq} alt="Author Image" />
            <div className="author-details padding-left-20">
              <h4 className="font-size-16 author-name text-align-left">Farouq Marei</h4>
              <p className="font-size-12 author-title">Software Engineering Team Lead</p>
            </div>
          </div>
          <div className="social-stats text-align-left padding-top-20">
            <div className="flex line-height-normal">
              <img className="flex author-info-image-size" src={Calendar} alt="Author Image" />
              <p className="font-size-12 padding-left-10"><small>April 1, 2021</small></p>
            </div>
            <div className="flex line-height-normal">
              <img className="flex author-info-image-size" src={Share} alt="Author Image" />
              <p className="font-size-12 padding-left-10"><small>1K Shares</small></p>
            </div>
            <div className="flex line-height-normal">
              <img className="flex author-info-image-size" src={View} alt="Author Image" />
              <p className="font-size-12 padding-left-10"><small>5K Views</small></p>
            </div>
          </div>
        </div>
        <div className="ad-banner">Ad Banner 300x250</div>
      </aside>
    </main>
  );
};

export default Benefits;
