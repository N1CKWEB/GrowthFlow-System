'use client';
import * as Field from '../../components/Field';
import "../../styles/login.css";



export default function Login() {
  const logo = "/assets/img/logo_negro.png";

  return (
    <div className="login-container">
      {/* LEFT COLUMN */}
      <div className="login-left">
        <img src={logo} className="login-logo" alt="GrowthFlow" />

        <div className="login-form-wrapper">
          <p className="login-subtitle">Inicia Sesión para gestionar tus negocios </p>
      <Field.Root name="serverName">
        <Field.Label>Gmail</Field.Label>
        <Field.Control
          defaultValue=""
          placeholder="Introduce tu correo electronico"
          required
          className={'bg-red-300'}
          minLength={3}
          pattern=".*[A-Za-z].*"
        />
        <Field.Description>Must be 3 or more characters long</Field.Description>
        <Field.Error />
      </Field.Root>

        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="login-right">
        <div className="hero-overlay">
          <h1 className="hero-title">
            It’s time to make management easier and faster ⚡
          </h1>
          <p className="hero-subtitle">
            Manage attendance, leave, employee data, payroll and more — all in one simple app.
          </p>
        </div>
      </div>
    </div>
  );
}
