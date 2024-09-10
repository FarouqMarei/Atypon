import Twitter from "@/assets/images/Twitter.png";
import LinkedIn from "@/assets/images/LinkedIn.png";
import Facebook from "@/assets/images/Facebook.png";
import Reddit from "@/assets/images/Reddit.png";
import Email from "@/assets/images/Email.png";

const LeftSideBar = () => {

    return (
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

    );
};

export default LeftSideBar;