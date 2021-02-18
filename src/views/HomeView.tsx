import {ReactElement} from "react";
import {Divider} from "antd";
import Uploader from "../components/Uploader";
import Handler from "../components/Handler";

function HomeView(): ReactElement {
  return (
    <>
      <Uploader/>
      <Divider type="vertical"/>
      <Handler/>
    </>
  )
}

export default HomeView;
