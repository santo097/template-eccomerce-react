import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
// import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import "./Header.scss";
import Logo from "./Logo/Logo";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    }

    useEffect(()=>{
         window.addEventListener("scroll", handleScroll);
    }, []);

    return (<>
        <Logo />
        <div className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Blog</li>
                    <li>Historia</li>
                    <li>Tiendas</li>
                </ul>
                {/* <div className="center">JSDEVSTORE.</div> */}
                <div className="right">
                    {/* <TbSearch onClick={() => setShowSearch(true) }/> */}
                    <span className="cart-icon" onClick={() => setShowCart(true)} >
                        <CgShoppingCart />
                        <span className="quantity-icon">5</span>
                    </span>
                </div>
            </div>
        </div>
        {showCart && <Cart setShowCart={setShowCart} /> }
        {showSearch && <Search setShowSearch={setShowSearch} />}
        
    </>);
};

export default Header;
