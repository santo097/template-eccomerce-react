import "./Section2.scss";
import image1 from "../../../assets/products/Hush-puppies1.webp"
import image2 from "../../../assets/products/ItemShoes.jpg";
import image3 from "../../../assets/products/whiteShoes.jpg";

const Section2 = () =>{
    return (
        <section className="section-2">
            <div  className="row">
                <div className="col-sm">
                    <img  className="mb-6" src={image1} alt=""></img>
                </div>
                <div className="col-sm">
                    <img id="hush"  className="mb-6" src={image2} alt=""></img>
                    {/* <img className="mb-6" src={image3} alt=""></img> */}
                </div>
            </div>
        </section>
    );
}

export default Section2;