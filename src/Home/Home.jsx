import useTitle from "../Hooks/useTitle";
import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";
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
            <ToyCategories></ToyCategories>
            <Reviews></Reviews>
            <ToyDonation></ToyDonation>
        </div>
    );
};

export default Home;