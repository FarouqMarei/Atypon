import Charts from "@/assets/images/charts.png";
import ArrowRight from "@/assets/images/ArrowRight.png";
import ArrowLeft from "@/assets/images/ArrowLeft.png";
import walk from "@/assets/images/image36.png";
import farouq from "@/assets/images/officialMe.jpg";

const CenterBody = () => {

    return (
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

    );
};

export default CenterBody;