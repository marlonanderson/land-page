import React from "react";
import paisagem from "../../../assests/image/imgPaisagem.jpg";
import "./Style.css";

const About = () => {
  return (
    <section id="operation">
      <div className="operation">
        <div>
          <h2>Sobre nós</h2>
        </div>
        <div className='container-text-aperation'>
          <div className='box-text-operation'>
            <p>
              Um aplicativo voltado pro turismo, ajudando as pessoas a
              encontrarem pontos de interesse na cidade que deseja mais
              facilmente e não só isso! Se você é comerciante ou representa
              algum serviço público da sua cidade, esse aplicativo é pra você
              também
            </p>
          </div>
          <div className='box-img-operation'>
            <img
              src={paisagem}
              alt="paisagem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
