import "./Section1.scss";
import prod from "../../../assets/products/item2.webp"
import prod2 from "../../../assets/products/casual.webp"

const Section1 = () => {
    return (
        <section className="section-1">
            <div className="row">
                <div className="col-sm">
                    <img className="mb-6" src={prod} alt=""></img>
                    <button className="btn btn-secondary">Hombre</button>
                </div>
                <div className="col-sm">
                    <img className="mb-6" src={prod2} alt=""></img>
                    <button className="btn btn-secondary">Mujer</button>
                </div>
            </div>
        </section>
    );
};

export default Section1;
