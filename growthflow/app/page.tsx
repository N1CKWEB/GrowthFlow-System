"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  ChevronDown,
  Database,
  Globe,
  Layout,
  Menu,
  Play,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const { scrollY } = useScroll();
  // Hero image parallax effect - moves slightly slower than scroll, but stays fully visible
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.05]);

  const handleLogin = () => {
    router.push("/pages/login");
  };

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "features", "solutions", "pricing", "about"];
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Inicio" },
    { id: "features", label: "Plataforma" },
    { id: "solutions", label: "Soluciones" },
    { id: "pricing", label: "Precios" },
    { id: "about", label: "Nosotros" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] opacity-30 animate-pulse duration-[10s]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] opacity-30 animate-pulse duration-[8s] delay-1000" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#0a1628]/90 backdrop-blur-xl border-white/5 py-4 shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center shadow-lg relative z-10 border border-white/10">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
              GrowthFlow
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full p-1.5 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(link.id);
                }}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-inner"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              // onClick={onLogin}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
            <button
              // onClick={onLogin}
              className="group relative px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold overflow-hidden shadow-lg shadow-blue-600/20 transition-all hover:scale-105 hover:shadow-blue-600/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Prueba Gratis
                <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a1628]/95 backdrop-blur-xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-blue-400">
                GrowthFlow
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-white/5 rounded-full"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${activeSection === link.id ? "text-blue-400" : "text-slate-300"}`}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10 my-4" />
              <button
                // onClick={onLogin}
                className="text-left text-white"
              >
                Iniciar Sesión
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 group-hover:to-white">
                Sistema Operativo para Ventas 2.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
                Convertir datos en
              </span>
              <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-blue-600/20 blur-3xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Crecimiento
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              GrowthFlow es un sistema centralizado para organizar y automatizar
              el crecimiento comercial de un negocio. No es solo gestionar
              leads, es convertir intuición en métricas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button
                // onClick={onLogin}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 group border border-blue-500"
              >
                Comenzar Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-3">
                <Play className="w-5 h-5 fill-current" />
                Ver Demo
              </button>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="mt-20 relative max-w-7xl mx-auto perspective-[2000px]"
          >
            <div className="absolute inset-0 bg-blue-600/10 blur-[150px] rounded-full z-0" />
            <motion.div
              initial={{ rotateX: 20, y: 100, opacity: 0 }}
              animate={{ rotateX: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
              className="relative z-10 rounded-2xl border border-white/10 bg-[#0a1628]/80 backdrop-blur-xl shadow-2xl shadow-blue-900/40 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              {/* Using a generic high-tech dashboard image */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwZGFyayUyMHVpJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MTUzMDQ0OHww&ixlib=rb-4.1.0&q=80&w=1920"
                alt="GrowthFlow Dashboard Interface"
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 right-10 p-5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl max-w-xs hidden lg:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Conversión
                    </p>
                    <p className="text-lg font-bold text-white">
                      +124%{" "}
                      <span className="text-xs font-normal text-slate-400">
                        vs mes anterior
                      </span>
                    </p>
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Purpose & Strategy Section */}
      <section id="features" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Más que un CRM, un Motor de Crecimiento
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Transformamos el caos en claridad operativa. GrowthFlow está
              diseñado para escalar tu negocio mediante la automatización
              inteligente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Database className="w-6 h-6 text-blue-400" />,
                title: "De Datos a Crecimiento",
                desc: "Centraliza cada interacción y conviértela en una oportunidad medible y escalable.",
              },
              {
                icon: <Zap className="w-6 h-6 text-purple-400" />,
                title: "De Manual a Automático",
                desc: "Elimina tareas repetitivas. Deja que el sistema trabaje 24/7 por ti y tu equipo.",
              },
              {
                icon: <Layout className="w-6 h-6 text-yellow-400" />,
                title: "De Desorden a Sistema",
                desc: "Estandariza tus procesos comerciales. Un flujo de trabajo unificado y predecible.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-green-400" />,
                title: "De Intuición a Métricas",
                desc: "Toma decisiones basadas en datos reales, no en suposiciones o corazonadas.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-[#0f1a2e]/50 border border-white/5 hover:bg-[#13223a] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-900/20 transition-all duration-300 relative z-10 shadow-lg shadow-black/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 border-l-2 border-white/5 pl-3 group-hover:border-blue-500/50 transition-colors">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section
        id="solutions"
        className="py-32 bg-[#080f1d] relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
                Para quién es GrowthFlow
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Escalabilidad para visionarios
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Diseñado para equipos y empresas que dependen de la generación y
                conversión de leads para sobrevivir y prosperar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Agencias de Marketing",
                  "Coaches & Consultores",
                  "Negocios Digitales",
                  "Equipos de Ventas",
                  "Startups SaaS",
                  "PYMES en Crecimiento",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-blue-900/10 border border-blue-500/20">
                <h4 className="flex items-center gap-2 font-semibold text-blue-300 mb-2">
                  <Briefcase className="w-4 h-4" /> Tipo de Producto: SaaS
                </h4>
                <p className="text-sm text-slate-400">
                  Totalmente basado en navegador, con gestión de roles, base de
                  datos segura y escalabilidad infinita. Sin instalaciones
                  complejas.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 perspective-[1000px]">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBkYXJrJTIwc2VyaW91cyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE1MzA0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Environment"
                  className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1d] via-transparent to-transparent opacity-90" />

                {/* Floating Card */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 p-6 bg-[#0a1628]/95 backdrop-blur border border-white/10 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div>
                      <h5 className="font-bold text-white">John Doe</h5>
                      <p className="text-xs text-slate-400">
                        CEO, TechStart Inc.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 italic">
                    "GrowthFlow convirtió nuestro caos de leads en una máquina
                    de ventas predecible. La automatización nos ahorra 20 horas
                    a la semana."
                  </p>
                  <div className="flex gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inversión Inteligente
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comienza gratis, escala cuando lo necesites. Sin costos ocultos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
            {/* Starter Plan */}
            <div className="p-8 rounded-3xl bg-[#0f1a2e]/30 border border-white/5 hover:border-white/10 transition-all group hover:bg-[#0f1a2e]/50">
              <h3 className="text-xl font-semibold mb-2 text-slate-300">
                Starter
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-slate-500">/mes</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 h-10">
                Para equipos pequeños que buscan profesionalizar su gestión.
              </p>
              <button
                // onClick={onLogin}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors mb-8 group-hover:border-blue-500/30"
              >
                Comenzar Gratis
              </button>
              <ul className="space-y-4">
                {[
                  "Hasta 2,000 contactos",
                  "CRM Básico",
                  "Email Marketing",
                  "Analítica Simple",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <Check className="w-4 h-4 text-slate-600 group-hover:text-blue-500/50 transition-colors" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-10 rounded-3xl bg-[#0f1d35] border border-blue-500/30 shadow-2xl shadow-blue-900/20 z-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                POPULAR
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />

              <h3 className="text-2xl font-bold mb-2 text-white">
                Professional
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-white">$149</span>
                <span className="text-slate-400">/mes</span>
              </div>
              <p className="text-sm text-slate-300 mb-8 h-10">
                La suite completa para escalar operaciones.
              </p>

              <div className="mb-8">
                <button
                  // onClick={onLogin}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all mb-3 border border-blue-500/50"
                >
                  Prueba Gratis de 14 Días
                </button>
                <p className="text-xs text-center text-slate-500">
                  Sin tarjeta de crédito requerida
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Contactos Ilimitados",
                  "IA Avanzada & Scoring",
                  "Automatización Visual",
                  "Soporte Prioritario 24/7",
                  "Integraciones API",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-white"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-3xl bg-[#0f1a2e]/30 border border-white/5 hover:border-white/10 transition-all group hover:bg-[#0f1a2e]/50">
              <h3 className="text-xl font-semibold mb-2 text-slate-300">
                Enterprise
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 h-10">
                Control total y seguridad dedicada para corporaciones.
              </p>
              <button
                // onClick={onLogin}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors mb-8 group-hover:border-blue-500/30"
              >
                Contactar Ventas
              </button>
              <ul className="space-y-4">
                {[
                  "Instancia Dedicada",
                  "SLA del 99.99%",
                  "Gestor de Cuenta",
                  "Auditoría de Seguridad",
                  "Onboarding Personalizado",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <Check className="w-4 h-4 text-slate-600 group-hover:text-blue-500/50 transition-colors" />{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050b14]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-lg font-bold text-white">GrowthFlow</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 GrowthFlow System™. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
