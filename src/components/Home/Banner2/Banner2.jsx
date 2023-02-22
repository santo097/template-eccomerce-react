import "./Banner2.scss";
import BannerImg from '../../../assets/products/movehush.jpeg';
import SideImg from '../../../assets/products/sitebanner.jpeg';

const Banner2 = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <img className="sideBanner" src={SideImg} alt="" />
            </div>
            
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner2;
