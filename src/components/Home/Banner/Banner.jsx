import "./Banner.scss";
import BannerImg from '../../../assets/products/leftbanner.jpeg';
import SideImg from '../../../assets/products/rightbanner.jpeg';

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <img className="banner-left-image" src={BannerImg} alt="" />
            </div>
            
            <img className="banner-img" src={SideImg} alt="" />
        </div>
    </div>;
};

export default Banner;
