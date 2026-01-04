"use client";

import * as Field from "../../components/Field";
import "../../styles/login.css";
import { CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate();
  const logo = "/assets/img/logo_negro.png";
  const logo_google = "/assets/img/google-icon-1.png";

  const handleHome = () => {
    navigation("/home");
  };
  return (
    <div className="login-container">
      {/* LEFT */}
      <div className="login-left">
        <img
          src={logo}
          className={
            "h-48 w-96 object-none object-center bg-top-left relative bottom-10"
          }
          alt="GrowthFlow"
        />

        <div
          className={
            "w-100 max-w-fit object-none object-center left-15 bottom-0 relative"
          }
        >
          <p className={"text-center flex-1 justify-center"}>
            Inicia sesión para gestionar tus negocios
          </p>

          <Field.Root className="login-field-principal" name="email">
            <Field.Label>Email</Field.Label>
            <Field.Control
              className={"w-full bg-linear-330 text-center text-white"}
              type="email"
              placeholder="Introduce tu correo electrónico"
              required
            />
            <Field.Error />
          </Field.Root>

          <Field.Root className="login-field-principal" name="password">
            <Field.Label>Contraseña</Field.Label>
            <Field.Control
              type="password"
              className={"w-full bg-linear-330 text-center text-white"}
              placeholder="Introduce tu contraseña"
              required
            />
            <Field.Error />
          </Field.Root>

          <CButton
            color="primary"
            type="submit"
            className={
              "w-full h-10 bg-blue-700 relative top-8 font-semibold rounded-xl hover:bg-blue-800"
            }
            onClick={handleHome}
          >
            Iniciar sesión
          </CButton>

          <div
            className={
              "relative top-11 font-semibold rounded-2xl bg-black w-34 h-10 "
            }
          >
            <div
              className={
                "flex-row flex-1 w-5 text-center relative top-2 left-6"
              }
            >
              <img src={logo_google} alt="" />
              <p className={"w-6 h-6 relative bottom-5 left-7"}>Google</p>
            </div>
          </div>

          <p className={"relative top-13"}>
            No tienes cuenta?
            <a href="" className="text-blue-500">
              {" "}
              Registrate
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="hero-overlay">
          <h1 className="hero-title">
            Es hora de hacer la gestión más fácil y rápida ⚡
          </h1>
          <p className="hero-subtitle">
            Gestiona asistencia, datos, nómina y automatizaciones en un solo
            lugar.
          </p>
        </div>
      </div>
    </div>
  );
}
