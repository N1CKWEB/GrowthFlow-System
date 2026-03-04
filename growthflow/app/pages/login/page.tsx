"use client";

import { Input } from "@heroui/react";
import { useState } from "react";
import Image from "next/image";
import img_illustration from "../../../assets/illustrations/img_illustration.svg";
import logo_google from "../../../assets/illustrations/google.png";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    router.push("/pages/register");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r  bg-[#0a1628] selection:bg-blue-500/30 dark relative overflow-hidden px-4 ">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] opacity-30 animate-pulse duration-[10s]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] opacity-30 animate-pulse duration-[8s] delay-1000" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="w-full max-w-6xl bg-blue-900 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT SIDE */}
        <div className="p-12 flex flex-col justify-center">
          {/* Logo placeholder */}
          <div className="mb-10">
            {/* Aquí va tu logo */}
            <div className="h-8 w-32 bg-transparent" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">
            Accede a tu panel{" "}
          </h2>

          <p className="text-white mb-8">
            Gestiona tus leads, automatiza procesos y escala tu crecimiento
            desde un solo lugar.{" "}
          </p>

          {/* Email */}
          <div className="mb-6">
            <input
              className="w-full px-4 py-3 rounded-xl bg-white border border-white
              text-blue-900"
              placeholder="Introduce tu correo electronico"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <input
              className="w-full px-4 py-3 rounded-xl bg-white border border-white
             shadow-[0_4px_6px_-2px_rgba(0,0,0,0.15)] text-blue-900"
              placeholder="Introduce tu contraseña"
            />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-blue-900 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Login button */}
          <button className="w-full bg-blue-600 hover:bg-black text-white py-3 rounded-full font-medium transition mb-4 cursor-pointer">
            Iniciar Sesión
          </button>

          {/* Google button */}
          <button className="w-full  bg-black text-white  py-3 rounded-full font-medium flex items-center justify-center gap-2 transition cursor-pointer ">
            <Image src={logo_google} width={20} height={30} alt="" />
            Continuar con Google
          </button>

          <p className="text-sm text-gray-400 font-medium  text-center mt-6">
            ¿Nuevo en GrowthFlow?{" "}
            <a
              onClick={handleRegister}
              href="#"
              className="text-white font-medium hover:underline"
            >
              Crear Cuenta
            </a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white flex flex-col items-center justify-center p-12 text-center">
          <p className="text-black mb-2 text-xl">Es bueno verte de vuelta</p>

          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            Bienvenido de nuevo
          </h2>

          <Image
            src={img_illustration}
            width={350}
            height={350}
            alt="Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
