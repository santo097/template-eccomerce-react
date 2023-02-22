import "./Logo.scss";
import logo from "../../../assets/logo-2.png";
import {TbSearch} from "react-icons/tb";

const Logo = () =>{
    return (
    <div className="header-content">
                <img className="logo" src={logo}  alt=""/>
                <div className="right">
                    <div className="form">
                        <input type= "text" placeholder="Email address"/>
                        <button><TbSearch /></button>
                    </div>
                    <div className="description-info"> Envios gratis para pedidos superiores a $300.000</div>
                </div>
    </div>
    );
};

export default Logo;