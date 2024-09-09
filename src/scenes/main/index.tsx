import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import farouq from "@/assets/images/officialMe.jpg"

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
    <aside className="sidebar left-sidebar font-color">
      <div>
        Cover Image: A stripy monarch caterpillar (Danaus plexippus) gorges on a butterfly milkweed. Photo by: Sarah Mac
        Farland
        Photo by: Sarah Mac Farland
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
          <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque
            sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet,
          </p>
          <p>consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam
            ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
          <h3>Abstract</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi,
            pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis.
            In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
            <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
          <div id="body"></div>
        </div>
      </section>
    </section>

    {/* <!-- Right Sidebar --> */}
    <aside className="right-sidebar font-color">
      <div className="author-info">
        <img src={farouq} alt="Author Image"/>
        <div className="author-details">
          <h4>Farouq Marei</h4>
          <p>Software Engineering Team Lead</p>
          <p><small>April 1, 2021</small></p>
          <div className="social-stats">
            <span>1K Shares</span> | <span>5K Views</span>
          </div>
        </div>
      </div>
      <div className="ad-banner">Ad Banner 300x250</div>
    </aside>
  </main>
  );
};

export default Benefits;
