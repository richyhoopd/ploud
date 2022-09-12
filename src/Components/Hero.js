import React from "react";
import Student from "../Assets/juicy-girl-is-working-on-laptop-at-a-remote-job.gif";
import { Link } from "react-router-dom";
import "../Styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero__banner">
      <div className="text__part">
        <h1>La nube de tareas del Poli</h1>
        <p>Emplea tu tiempo haciendo tus tareas, no entregandolas.</p>
        <Link
          to="/iniciar"
          className="maint__btn"
          style={{
            backgroundColor: "#556FCC",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingRight: "28px",
            paddingLeft: "28px",
            borderRadius: "20px",
            color: "#FAFDFF",
            textDecoration: "none",
          }}
        >
          Comienza a entregar tus tareas
        </Link>
      </div>
      <figure>
        <img src={Student} alt="Student" />
      </figure>
    </section>
  );
}
