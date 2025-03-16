import React from "react";
import "../assets/Resume.css";
import imagen from "../assets/imagen.jpg";





const Header: React.FC = () => {
  return (
    <header className="header">
     <img src={imagen} alt="Foto de perfil" className="profile-pic" />

      <div>
        <h1>Daniel Fernando Palacios Quiñones</h1>
        <ul className="contact-info">
          <li>📞 <strong>Teléfono:</strong> 3502977418</li>
          <li>📧 <strong>Correo:</strong> <a href="mailto:palaciosdaniel755@gmail.com">palaciosdaniel755@gmail.com</a></li>
          <li>📍 <strong>Dirección:</strong> Cra 72F # 39 – 45 sur</li>
          <li>🎂 <strong>Fecha de Nacimiento:</strong> 17 de junio de 2002</li>
          <li>🔗 <strong>GitHub:</strong> <a href="https://github.com/DPalacios755" target="_blank" rel="noopener noreferrer">DPalacios755</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
