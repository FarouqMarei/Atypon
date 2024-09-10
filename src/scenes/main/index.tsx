import { SelectedPage } from "@/shared/types";
import farouq from "@/assets/images/officialMe.jpg";
import walk from "@/assets/images/image36.png";
import Calendar from "@/assets/images/Calendar.png";
import Share from "@/assets/images/Share.png";
import View from "@/assets/images/View.png";
import Twitter from "@/assets/images/Twitter.png";
import LinkedIn from "@/assets/images/LinkedIn.png";
import Facebook from "@/assets/images/Facebook.png";
import Reddit from "@/assets/images/Reddit.png";
import Email from "@/assets/images/Email.png";
import Charts from "@/assets/images/charts.png";
import ArrowRight from "@/assets/images/ArrowRight.png";
import ArrowLeft from "@/assets/images/ArrowLeft.png";
import MailIcon from "@/assets/images/Mail-icon.png";
import FacebookFollow from "@/assets/images/facebook-follow.png";
import TwitterFollow from "@/assets/images/twitter-follow.png";
import YoutubeFollow from "@/assets/images/youtube-follow.png";
import LinkedinFollow from "@/assets/images/linkedin-follow.png";
import Stairs from "@/assets/images/image13.png";
import Yellow from "@/assets/images/image14.png";
import Green from "@/assets/images/image16.png";
import Boot from "@/assets/images/image18.png";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MainBody = ({ setSelectedPage }: Props) => {

  const [activeTab, setActiveTab] = useState('Latest');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <main className="main-layout">
      {/* Left Sidebar */}
      <aside className="sidebar left-sidebar font-color font-size-12 flex">
        <div>
          <p>
            <span className="font-weight-700">Cover Image</span>: A stripy monarch
            caterpillar (<em>Danaus plexippus</em>) gorges on a butterfly milkweed.
            Photo by: Sarah Mac Farland
          </p>
          <p>
            <span className="font-weight-700">Photo by</span>: Sarah Mac Farland
          </p>
        </div>
        <div className="shares-section">
          <p className="shares-count share-color">1k</p>
          <p className="shares-count shares-style">SHARES</p>
          <hr className="horizontal-line-social" />
          <ul className="social-icons padding-top-10">
            <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
            <li><a href="#"><img src={LinkedIn} alt="LinkedIn" /></a></li>
            <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
            <li><a href="#"><img src={Reddit} alt="Reddit" /></a></li>
            <li><a href="#"><img src={Email} alt="Email" /></a></li>
          </ul>
        </div>
        <div className="vertical-line-left-sidebar"></div>
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
            <p className="font-size-12 walk-image-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <hr className="horizontal-line-pattern" />
            <h3 className="font-size-32">Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
            <p className="padding-top-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
          </div>
          <div className="flex padding-top-20">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque</p>
            <img src={Charts} alt="Charts Logo" />
          </div>
          <div className="padding-top-20">
            <h3 className="font-size-32">Conclusion</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. In pulvinar quam ut varius ultrices id diam elit amet. Lacinia cursus morbi dui vulputate. </p>
          </div>
          <div className="flex padding-top-20">
            <div className="flex line-height-normal post">
              <img className="author-info-image-size" src={ArrowLeft} alt="Author Image" />
              <div className="post-desc">
                <p className="font-size-12 padding-left-10"><span className="n-post">PREVIOUS POST</span></p>
                <p className="font-size-12 padding-left-10">Beautiful and Creative Editing Photos by Egz...</p>
              </div>
            </div>
            <div className="flex line-height-normal right-post">
              <div className="post-desc">
                <p className="font-size-12 padding-left-10"><span className="n-post">PREVIOUS POST</span></p>
                <p className="font-size-12 padding-left-10">Beautiful and Creative Editing Photos by Egz...</p>
              </div>
              <img className="author-info-image-size" src={ArrowRight} alt="Author Image" />
            </div>
          </div>
          <hr className="horizontal-line-pattern" />
          <div className="main-author-info padding-top-20">
            <div className="author-info">
              <div className="text-align-left">
                <p className="font-size-16">ABOUT THE AUTHOR</p>
              </div>
              <div className="flex padding-top-10">
                <img src={farouq} alt="Author Image" />
                <div className="author-details padding-left-20">
                  <div className="flex">
                    <h4 className="font-size-16 author-name text-align-left">Farouq Marei</h4>
                  </div>
                  <p className="font-size-12 author-title">Software Engineering Team Lead</p>
                  <p className="font-size-12 author-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi, pellentesque sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat et feugiat auctor mauris nisi.</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="horizontal-line-pattern" />
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
        <div className="non-author-data">
          <div className="ad-banner">Ad Banner 300x250</div>
          <div className="news-letter padding-top-20">
            <div className="flex">
              <img className="author-info-image-size" src={MailIcon} alt="Author Image" />
              <p>Subscribe to our Newsletter</p>
            </div>
            <p>No spam, notifications only about new products, update</p>
            <div className="input-icons">
              <input className="input-field mail-icon" type="text" placeholder="Enter your email here" />
            </div>
            <div>
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-section">
            <div className="tabs">
              <button
                className={activeTab === 'Latest' ? 'tab active' : 'tab'}
                onClick={() => handleTabClick('Latest')}
              >
                Latest
              </button>
              <button
                className={activeTab === 'Popular' ? 'tab active' : 'tab'}
                onClick={() => handleTabClick('Popular')}
              >
                Popular
              </button>
              <button
                className={activeTab === 'Trending' ? 'tab active' : 'tab'}
                onClick={() => handleTabClick('Trending')}
              >
                Trending
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'Latest' && (
                <div className="article-list">
                  {/* Map through the article data */}
                  <div className="article-card">
                    <img src={Stairs} alt="Article Image" />
                    <div className="article-info">
                      <h4>Smarter Food Choices 101 Tips For Busy Women</h4>
                      <p>By Iasonas Georg... | 15 June 2019</p>
                    </div>
                  </div>
                  <div className="article-card">
                    <img src={Yellow} alt="Article Image" />
                    <div className="article-info">
                      <h4>Smarter Food Choices 101 Tips For Busy Women</h4>
                      <p>By Iasonas Georg... | 15 June 2019</p>
                    </div>
                  </div>
                  <div className="article-card">
                    <img src={Green} alt="Article Image" />
                    <div className="article-info">
                      <h4>Smarter Food Choices 101 Tips For Busy Women</h4>
                      <p>By Iasonas Georg... | 15 June 2019</p>
                    </div>
                  </div>
                  <div className="article-card">
                    <img src={Boot} alt="Article Image" />
                    <div className="article-info">
                      <h4>Smarter Food Choices 101 Tips For Busy Women</h4>
                      <p>By Iasonas Georg... | 15 June 2019</p>
                    </div>
                  </div>
                  {/* Repeat similar cards */}
                </div>
              )}

              {activeTab === 'Popular' && (
                <div className="article-list">
                  Popular data
                </div>
              )}

              {activeTab === 'Trending' && (
                <div className="article-list">
                  Trending data
                </div>
              )}
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="follow-us">
            <p>Follow Us</p>
            <div className="social-icons">
              <img src={FacebookFollow} alt="Facebook" />
              <img src={TwitterFollow} alt="Twitter" />
              <img src={YoutubeFollow} alt="YouTube" />
              <img src={LinkedinFollow} alt="LinkedIn" />
            </div>
          </div>

          {/* Tags Section */}
          <div className="tags-section">
            <p>Tags</p>
            <div className="tags">
              <button>Health</button>
              <button>Life</button>
              <button>Women</button>
              <button>Men</button>
              <button>Family's Health</button>
              <button>Nutrition</button>
              <button>Kids</button>
              <button>Diseases</button>
              <button>Habits</button>
              <button>Healthy</button>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default MainBody;
