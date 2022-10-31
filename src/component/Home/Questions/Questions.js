import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import React from "react";
import "./Style.css";
const Questions = () => {
  const [question, setQuestion] = React.useState(false);
  const [question1, setQuestion1] = React.useState(false);
  const [question3, setQuestion3] = React.useState(false);

  return (
    <section id="questions">
      <div className="header-questions">
        <h2>FQA</h2>
        <h3>Perguntas frequentes</h3>
      </div>
      <div className="questions">
        <div className="container-card-questions">
          <Box
            onClick={() => {
              setQuestion(!question);
            }}
            className="card-questions"
          >
            Por que usar o PicTour?
            {question ? (
              <Box>
                <HorizontalRuleIcon className="icon-questions" />
              </Box>
            ) : (
              <Box>
                <AddIcon className="icon-questions" />
              </Box>
            )}
          </Box>

          {question ? (
            <Box className="card-questions answers">
              <span>
                O Pictour é um aplicativo voltado para turismo, sendo assim é
                uma nova maneira de você fazer suas viagens ficarem ainda mais
                fáceis e divertidas, facilitando a sua busca por pontos
                turísticos onde você estiver.
              </span>
            </Box>
          ) : null}
        </div>
        <div className="container-card-questions">
          <Box
            onClick={() => {
              setQuestion1(!question1);
            }}
            className="card-questions"
          >
            Para quem o PicTour é indicado?
            {question1 ? (
              <Box>
                <HorizontalRuleIcon className="icon-questions" />
              </Box>
            ) : (
              <Box>
                <AddIcon className="icon-questions" />
              </Box>
            )}
          </Box>
          {question1 ? (
            <Box className="card-questions answers">
              <span>
                O PicTour é indicado para pessoas que gostam de viajar, mas
                também para comerciantes que querem tornar seu negócio mais
                atrativo para as pessoas visitarem. Além disso, a prefeitura da
                cidade tem a possibilidade de registrar os pontos turísticos
                deixando visível no mapa do aplicativo.
              </span>
            </Box>
          ) : null}
        </div>

        <div className="container-card-questions">
          <Box
            onClick={() => {
              setQuestion3(!question3);
            }}
            className="card-questions"
          >
            Posso utilizar em qualquer lugar?
            {question3 ? (
              <Box>
                <HorizontalRuleIcon className="icon-questions" />
              </Box>
            ) : (
              <Box>
                <AddIcon className="icon-questions" />
              </Box>
            )}
          </Box>
          {question3 ? (
            <Box className="card-questions answers">
              <span> Você pode utilizar em qualquer lugar do país.</span>
            </Box>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Questions;
