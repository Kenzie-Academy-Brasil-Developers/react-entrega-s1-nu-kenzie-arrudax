import './style.css'
import logo from "../../assets/nuKenzie.svg";

function Header({notWelcome}) {
  return (
    <>
      <div className="header__conteiner">
        <img src={logo} alt="logo Nu Kenzie" />
        <button onClick={() => notWelcome()} className="header__btn">Inicio</button>
      </div>
    </>
  );
}

export default Header;
