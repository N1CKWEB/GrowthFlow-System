import {
  Globe,
  Key,
  Mail,
  User,
  Lock,
  CreditCard,
  Sparkles,
  Shield,
  Palette,
} from "lucide-react";

export const settingSections = [
  {
    title: "Cuenta",
    items: [
      {
        icon: <User className="w-5 h-5" />,
        title: "Perfil de usuario",
        description: "Gestiona tu información personal y foto de perfil",
      },
      {
        icon: <Mail className="w-5 h-5" />,
        title: "Email y notificaciones",
        description: "Configura tus preferencias de notificaciones",
      },
      {
        icon: <Lock className="w-5 h-5" />,
        title: "Seguridad y contraseña",
        description: "Cambia tu contraseña y configura 2FA",
      },
    ],
  },
  {
    title: "Integraciones",
    items: [
      {
        icon: <Key className="w-5 h-5" />,
        title: "API Keys",
        description: "Gestiona tus claves de API y tokens de acceso",
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Conexiones externas",
        description: "Instagram, n8n, webhooks y más",
      },
    ],
  },
  {
    title: "Facturación",
    items: [
      {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Plan y facturación",
        description: "Gestiona tu suscripción y métodos de pago",
      },
    ],
  },
  {
    title: "Avanzado",
    items: [
      {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Inteligencia Artificial",
        description: "Configura modelos y preferencias de IA",
        badge: "Beta",
      },
      {
        icon: <Palette className="w-5 h-5" />,
        title: "Apariencia",
        description: "Personaliza el tema y la interfaz",
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Privacidad y datos",
        description: "Controla cómo se usan tus datos",
      },
    ],
  },
];
