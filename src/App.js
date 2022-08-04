import Headerbottom from "./components/Headerbottom";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import SliderFeatures from "./components/SliderFeatures";
import SlideTopFeatures from "./components/SlideTopFeatures";
import Topbar from "./components/Topbar";
import TopProductButton from "./components/TopProductButton";
import TopProducts from "./components/TopProducts";

function App() {
  return (
    <div className="mx-auto max-w-[1920px]">
      <Topbar/>
      <Navbar/>
      <div className="py-2">
        <HeaderTop/>
        <Headerbottom/>
        <SlideTopFeatures/>
        <TopProducts/>
        <TopProductButton/>
        <SliderFeatures/>
      </div>
    </div>
  );
}

export default App;
