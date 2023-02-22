import React from "react";
import "./Footer.scss";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import {TbSearch} from "react-icons/tb";
import Payment from "../../assets/payments.jpeg";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">Servicio al cliente</div>
                <div className="text">
                    Contactenos
                </div>
                <div className="text">
                    Cambios y devoluciones
                </div>
                <div className="text">
                    Politicas de la tienda
                </div>
                <div className="text">
                    Politicas de datos
                </div>
            </div>
            <div className="col">
            <div className="title">Mi cuenta</div>
            <div className="c-item">
                    <div className="text">
                        Mis pedidos
                    </div>
                </div>
                <div className="c-item">
                    <div className="text">Mis devoluciones</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Recursos</div>
                <div className="c-item">
                    <div className="text">
                        Tienda
                    </div>
                </div>
                
                <div className="c-item">
                        <div className="text">Devoluciones</div>
                </div>
            </div>
            <div className="col">
            <div className="title">Newsletter</div>
            <span className="text">Registrate para ser el primero en recibir nuestras noticias</span>
                <div className="form">
                    <input type= "text" placeholder="Email address"/>
                    <button><TbSearch /></button>
                </div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <img src={Payment} alt=""/>
            </div>
        </div>
    </footer>;
};

export default Footer;
