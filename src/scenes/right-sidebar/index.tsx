import farouq from "@/assets/images/officialMe.jpg";
import Calendar from "@/assets/images/Calendar.png";
import Share from "@/assets/images/Share.png";
import View from "@/assets/images/View.png";
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

const RightSideBar = () => {
    const [activeTab, setActiveTab] = useState('Latest');

    const handleTabClick = (tabName: string) => {
      setActiveTab(tabName);
    };
    return (
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

    );
};

export default RightSideBar;