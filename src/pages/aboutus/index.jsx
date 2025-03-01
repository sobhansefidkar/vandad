import Achevment from "@/componetnts/aboutus/achevement";
import Description from "@/componetnts/aboutus/description";
import Header from "@/componetnts/aboutus/header";
import Team from "@/componetnts/aboutus/team";

function Aboutus() {
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <Description/>
            <Achevment/>
            <Team/>
        </div>
    );
}

export default Aboutus;