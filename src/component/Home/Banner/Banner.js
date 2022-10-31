import banner from "../../../assests/image/Banner.png";
import React from "react";
import "./Style.css";
const Banner = () => {
  return (
    <section>
      <div className="banner">
        <div className="background" />
          <img src={banner} alt="Banner pessoas caminhando ao pôr do sol" />
        <div className="container-text-banner">
          <h1>Suas viagens ficaram muito mais fáceis e divertidas</h1>
          <p>Conheça o PicTour! Um aplicativo de turismo.</p>
          <button>Explore mais</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
