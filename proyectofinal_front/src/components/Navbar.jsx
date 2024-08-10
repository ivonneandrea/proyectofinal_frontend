import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { MyContext } from "../context/MyContext.jsx";
import formatPrice from '../helpers/formatPrice.js'; //preguntar que es esto

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const {totalPrice} = useContext(MyContext);

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/"> Logo 
                </NavLink>
                <NavLink className={activeClass} to="/"> Crear cuenta
                </NavLink>
                <NavLink className={activeClass} to="/"> Iniciar sesión 
                </NavLink>
                <NavLink className={activeClass} to="/cart">Productos  {formatPrice(totalPrice)}
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;