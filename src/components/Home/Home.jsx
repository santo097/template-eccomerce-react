import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
// import Products from "../Products/Products"; 
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Banner2 from "./Banner2/Banner2";
import Instagram from "./instagram/Instagram";
import Instagram2 from "./Instagram2/Instagram2";
const Home = () => {
    return (
    <div>
        <Banner />
        <Section1 />
        <Banner2 />
        <Section2 />
        <Instagram />
        <Category />
        <Instagram2 />
        
    </div>
    
    );
};

export default Home;
