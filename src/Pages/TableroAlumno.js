import React from "react";
import { Link } from "react-router-dom";
import Banni from "../Assets/8255_Hero.png";
import "../Styles/TableroAlumno.scss";

export default function TableroAlumno() {
  return (
    <div className="home text">
      <h1>Bienvenido Ricardo</h1>
      <span className="si">Echa un vistazo a tus materias en curso</span>
      <section className="home__curses">
        <Link
          to="/curse"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Matemáticas</h3>
            <p className="text">
              Materia orientada a la comprensión del uso y manipulación de
              números.
            </p>
            <p className="docente text">Docente: Manganito</p>
            
          </div>
        </Link>
        <Link
          to="/curse"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Español</h3>
            <p className="text">
              Estudio de la lengua española y su gramática.
            </p>
            <p className="docente text">Docente: Pepito</p>
            
          </div>
        </Link>
        <Link
          to="/curse"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Ingles</h3>
            <p className="text">
              Enseñanza de la lengua extranjera en nivel A2
            </p>
            <p className="docente text">Docente: Filomeno</p>
            
          </div>
        </Link>
        <Link
          to="/curse"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Tutorías</h3>
            <p className="text">Orientación en el desarrollo del estudiante.</p>
            <p className="docente text">Docente: Chipin</p>
            
          </div>
        </Link>
        <Link
          to="/curse"
          className="transition home__curses-curso border__radius"
        >
          <img className="border__radius" src={Banni} alt="" />
          <div className="home__curses-curso-text">
            <h3 className="text">Historia</h3>
            <p className="text">
              Historia de México y del mundo en el sigo XX.
            </p>
            <p className="docente text">Docente: Chipina</p>
            
          </div>
        </Link>
      </section>
    </div>
  );
}
