import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
// import Products from "../Products/Products";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Banner2 from "./Banner2/Banner2";
const Home = () => {
    return (
    <div>
        <Banner />
        <Section1 />
        <Banner2 />
        <Section2 />
        <div className="sub-instagram">
            <div className="text">Instagram - HUSHPUPPIESCO</div>
            <hr />
        </div>
        <Category />
        <div className="instagram">
            <div className="text">@HUSHPUPPIESCO</div>
            <hr />
        </div>
        
    </div>
    
    );
};

export default Home;
