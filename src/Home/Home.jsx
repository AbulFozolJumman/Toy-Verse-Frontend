import useTitle from "../Hooks/useTitle";
import Banner from "./Banner/Banner";
import ToyDIYProjects from "./DIY/DIY";
import Reviews from "./Reviews/Reviews";
import TOTM from "./TOTM/TOTM";
import Tips from "./Tips/Tips";
import ToyCategories from "./ToyCategories/ToyCategories";
import ToyDonation from "./ToyDonation/ToyDonation";
import ToyGallery from "./ToyGallery/ToyGallery";

// This is Website Home Page
const Home = () => {
    useTitle("Home")
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <TOTM></TOTM>
            <ToyCategories></ToyCategories>
            <Tips></Tips>
            <Reviews></Reviews>
            <ToyDonation></ToyDonation>
            <ToyDIYProjects></ToyDIYProjects>
        </div>
    );
};

export default Home;