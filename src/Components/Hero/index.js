import "./style.css";
import fotoPerfil from "../../images/fotoperfil.jpeg"
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h3>Full Stack Software Developer</h3>
        <p>
          Hi, I am Fernando Filho, Full Stack Software developer. Here you find
          every professional and educational informationon about me, plus a
          couple personal projects
        </p>
        <ul>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Instagram</Link></li>
        </ul>
      </div>
      <div className="hero-image-container">
        <img src={fotoPerfil} alt="Foto do Fernando Melo Filho"/>
      </div>
    </div>
  );
}

export default Hero;
