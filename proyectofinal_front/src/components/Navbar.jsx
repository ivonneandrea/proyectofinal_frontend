import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import formatPrice from '../helpers/formatPrice.js';

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const {totalPrice} = useContext(PizzaContext);

    return (
        <Navbar className="navigation">
            <section className="navLinks">
                <NavLink className={activeClass} to="/"> Logo 
                </NavLink>
                <NavLink className={activeClass} to="/cart">Productos  {formatPrice(totalPrice)}
                </NavLink>
                <NavLink className={activeClass} to="/"> Registrarse
                </NavLink>
                <NavLink className={activeClass} to="/"> Iniciar sesión 
                </NavLink>



            </section>
        </Navbar>
    );
};

export default Navigation;