import useTitle from "../Hooks/useTitle";
import ToyCategories from "./ToyCategories/ToyCategories";


const Home = () => {
    useTitle("Home")
    return (
        <div className="max-w-7xl mx-auto">
            <h2>Home</h2>
            <ToyCategories></ToyCategories>
        </div>
    );
};

export default Home;