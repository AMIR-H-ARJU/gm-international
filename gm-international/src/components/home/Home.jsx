import AboutUs from "./Aboutus";
import Banner from "./banner";
import Coverage from "./coverage";
import Explore from "./Explore";
import Faqs from "./Faqs";
import GmiGroup from "./groupgmi";
import Support from "./support";
// import { Helmet } from "react-helmet-async";
export default function Home() {
  const pageTitle = "Home";
  const pageDescription =
    "Stay with Gm international. Fast, safe, and easy process!";
  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
        </Helmet> */}
        <Banner></Banner>
        <Explore></Explore>
        <Coverage></Coverage>
        <AboutUs></AboutUs>
        <GmiGroup></GmiGroup>
        <Faqs></Faqs>
        <Support></Support>
      </div>
    </>
  );
}
