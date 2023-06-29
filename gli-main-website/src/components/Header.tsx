import React from "react";


const Header: React.FC = () => {
    return (
        <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/products">Productos</a></li>
        </ul>
      </nav>
    )
}

export default Header;