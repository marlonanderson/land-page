import React from "react";
import Comercio from "../../../assests/image/Comercio.png";
import Service from "../../../assests/image/Service.png";
import "./Style.css";

const Packages = () => {
  return (
    <section id="packages">
      <div>
        <h2 className='title-package'>Pacotes</h2>
      </div>
      <div className="packages">
        <div className="card-packages">
          <div className="header-card">
            <span>Comerciante</span>
            <img src={Comercio} alt="imagem de um icone de comércio" />
          </div>
          <p>
            Se você é alguém que gosta de viajar e conhecer diferentes lugares,
            visitar pontos turísticos e tirar diversas fotos, aqui é possível.
            Você pode localizar mais facilmente os pontos turisticos através das
            avaliações de outros usuários e não perde tempo ao procurar por
            conta própria.
          </p>
          <h2>R$ 0,00</h2>
          <button className="button-package">Assine agora</button>
        </div>
        <div className="card-packages marginCard">
          <div className="header-card">
            <span>Prefeitura</span>
            <img src={Service} alt="imagem de um icone de comércio" />
          </div>
          <p>
            Se você é do negócio e recebe turistas diariamente, aqui você pode
            divulgar seu comércio tornando mais fácil das pessoas encontrarem e
            avaliarem.
          </p>
          <h2>R$ 0,00</h2>
          <button className="button-package">Assine agora</button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
