import React from "react";
import "./Style.css";
import Logo from "../../assests/image/Logo.png";
import Facebook from "../../assests/image/Facebook.png";
import Instagram from "../../assests/image/Instagram.png";
import * as yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import Axios from "axios";
import Navbar from "./../../component/Navbar/Navbar";
import Banner from "./../../component/Home/Banner/Banner";
import About from "../../component/Home/About/About";
import Destiny from "../../component/Home/Destiny/Destiny";
import Packages from "../../component/Home/Packages/Packages";
import Questions from "../../component/Home/Questions/Questions";

const validationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório."),
  email: yup.string().email("E-mail inválido.").required("Campo obrigatório."),
  subject: yup.string().required("Campo obrigatório."),
  your_doubt: yup.string().required("Campo obrigatório.")
});

function Home() {
  //Enviar os dados para o back-end
  const saveForm = async (e, file) => {
    let errorMessage = "Houve um erro ao enviar seu contato, tente novamente!";
    var userService = new FormData(document.getElementById("service"));

    const url = "http://45.132.240.32/api/save-lead";
    // const url = "http://localhost:8000/api/save-lead";

    const saveDataForm = true;

    if (saveDataForm) {
      // informando o tipo do grupo de contato ao backend
      // user.contact_group_id = 1;
      // "_token": "{{ csrf_token() }}"
      // userService.append("_token","{{ csrf_token() }}");
      var headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      };
      // enviando dados do objeto user para a API
      Axios.post(url, userService, headers)
        .then((response) => {
          console.log(response);
          // JSON.stringify({
          //   type: "success",
          //   mensagem: sucessMessage
          // });

          swal({
            title: "Sucesso!",
            text: "Seu contato foi salvo com sucesso!",
            type: "success"
          });
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error);
            JSON.stringify({
              type: "error",
              mensagem: errorMessage
            });
          }
        });
    } else {
      JSON.stringify({
        type: "error",
        mensagem: errorMessage
      });
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      your_doubt: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      saveForm();
    }
  });

  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <div>
          <About />
          <Destiny />
          <Questions />
          <section id="form">
            <h2>Quer falar conosco?</h2>
            <p>
              Preencha os campos abaixo e tire suas dúvidas, nossa equipe
              entrará em contato
            </p>

            <form className="form" onSubmit={formik.handleSubmit} id="service">
              <div className="box-input">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nome*"
                    className="input-width margin"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail*"
                    className="input-width"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Assunto*"
                  className="fullWidth"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div style={{ color: "red" }}>{formik.errors.subject}</div>
                ) : null}
              </div>
              <div>
                <textarea
                  id="your_doubt"
                  cols="30"
                  rows="10"
                  name="your_doubt"
                  placeholder="Sua dúvida*"
                  className="text-area"
                  onChange={formik.handleChange}
                  value={formik.values.your_doubt}
                ></textarea>
                {formik.touched.your_doubt && formik.errors.your_doubt ? (
                  <div style={{ color: "red" }}>{formik.errors.your_doubt}</div>
                ) : null}
              </div>
              <button type="submit" className="button-form">
                Enviar
              </button>
            </form>
          </section>
          <div className="header">
            <div>
              <img src={Logo} alt="Logo picTour" className="logo" />
            </div>
            <div className="redes-sociais">
              <div>
                <a
                  href="https://www.facebook.com/Pic-Tour-106158642113927"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Facebook}
                    alt="Logo Facebook"
                    className="logo-rede-social"
                  />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/pictour.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagram}
                    alt="Logo Instagram"
                    className="logo-rede-social"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="box-text-footer">
          <p>&copy;Copyrigth 2022 PicTour</p>
          <p>Todos os direitos reservado</p>
        </div>
        <div className="termos">
          <p>Termos de privacidade</p>
          <p>Termos de uso</p>
        </div>
      </footer>
    </>
  );
}
export default Home;
