import { SelectedPage } from "@/shared/types";
import LeftSideBar from "../left-siderbar";
import CenterBody from "../center-body";
import RightSideBar from "../right-sidebar";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MainBody = () => {


  return (
    <main className="main-layout">
      {/* Left Sidebar */}
      <LeftSideBar/>


      {/* <!-- Main Content --> */}
      <CenterBody/>

      {/* <!-- Right Sidebar --> */}
      <RightSideBar/>

    </main>
  );
};

export default MainBody;
