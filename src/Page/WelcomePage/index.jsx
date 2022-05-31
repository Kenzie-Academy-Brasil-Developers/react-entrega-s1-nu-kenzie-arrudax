import logo from "../../assets/nuKenzieWelcomePage.svg";
import banner from "../../assets/ilustracao.svg";
import "./style.css";

function WelcomePage({ setIsWelcome }) {
  function letWelcome() {
    setIsWelcome(true);
  }

  return (
    <div className="colorBg">
      <div className="position__welcomePage">
        <div className="conteiner__welcomePage">
          <section className="welcomePage__content">
            <img src={logo} alt="logo" />
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura</span>
            <button onClick={() => letWelcome()} className="welcomePage__btn">
              Iniciar
            </button>
          </section>
          <div className="banner__welcomePage">
            <img src={banner} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
