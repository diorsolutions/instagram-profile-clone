import Footer from "./components/Footer";
import Grid from "./components/Grid";
import MainSection from "./components/MainSection";
import Navigation from "./components/Navigation";
import RelatedAccounts from "./components/RelatedAccounts";
import VideoPlays from "./components/VideoPlays";
import VideosSection from "./components/VideosSection";
function Clone() {
  return (
    <div className="wrapper">
      <Navigation />
      <MainSection />
      <Grid />
      <VideosSection />
      <VideoPlays />
      <RelatedAccounts />
      <Footer />
    </div>
  );
}

export default Clone;
