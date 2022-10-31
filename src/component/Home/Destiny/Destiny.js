import React from 'react';

import Turista from "../../../assests/image/Turista.png";
import Comercio from "../../../assests/image/Comercio.png";
import Service from "../../../assests/image/Service.png";
import './Style.css';

const Destiny = () =>{
     return(
        <section id="destiny">
            <div>
              <h2>A Quem se Destina?</h2>
            </div>
            <div className="destiny">
              <div className="card">
                <div>
                  <img src={Turista} alt="imagem de um icone de usúario" />
                  <span>Turista</span>
                </div>
                <p>
                  Se você é alguém que gosta de viajar e conhecer diferentes
                  lugares, visitar pontos turísticos e tirar diversas fotos,
                  aqui é possível. Você pode localizar mais facilmente os pontos
                  turisticos através das avaliações de outros usuários e não
                  perde tempo ao procurar por conta própria.
                </p>
              </div>
              <div className="card marginCard">
                <div>
                  <img src={Comercio} alt="imagem de um icone de comércio" />
                  <span>Comércio</span>
                </div>
                <p>
                  Se você é do negócio e recebe turistas diariamente, aqui você
                  pode divulgar seu comércio tornando mais fácil das pessoas
                  encontrarem e avaliarem.
                </p>
              </div>
              <div className="card">
                <div>
                  <img
                    src={Service}
                    alt="imagem de um icone serviço publico "
                  />
                  <span>Serviço público</span>
                </div>
                <p>
                  Se você é do Serviço Público e deseja fomentar o turismo em
                  seu município, aqui você cria o seu mapa turístico digital,
                  identificando seus principais pontos a serem visitados na
                  cidade.
                </p>
              </div>
            </div>
          </section>
     )
}

export default Destiny