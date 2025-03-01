import Header from "@/componetnts/index/header";
import Widget from "@/componetnts/index/widget";
import Gallery from "@/componetnts/index/gallery";
import Services from "@/componetnts/index/services";
import Parallax from "@/componetnts/index/parallax";
import Factories from "@/componetnts/index/factories";
import Services2 from "@/componetnts/index/services2";

export default function Home() {
  return (
    <div className=" w-[100vw] flex flex-col items-center">
      <Header/>
      <Widget/>
      <Gallery/>
      {/* <Services/> */}
      <Services2/>
      <Parallax/>
      <Factories/>
    </div>
  );
}
