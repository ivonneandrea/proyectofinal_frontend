//import { NavLink } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
//import { useContext } from "react";
//import { MyContext } from "../context/MyContext.jsx";
//import formatPrice from '../helpers/formatPrice.js'; //preguntar que es esto

//ARREGLAR PORQUE HAY PROBLEMAS CON LAS IMPORTACIONES


const Navigation = () => {

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/"> Logo 
                </NavLink>
                <NavLink className={activeClass} to="/"> Crear cuenta
                </NavLink>
                <NavLink className={activeClass} to="/"> Iniciar sesión 
                </NavLink>
                <NavLink className={activeClass} to="/cart">Productos
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;