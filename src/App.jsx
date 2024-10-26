import { useState } from "react";
import Logo from "./assets/logo.png"
import Fibre from "./assets/network.jpeg"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Network,
  Shield,
  Cable,
  Router,
  Server,
  Globe,
  Radio,
  MessageCircle,
  Facebook,
  Send,
} from "lucide-react";


// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Network Background component
const NetworkBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="absolute inset-0 grid grid-cols-8 gap-1">
      {Array(64)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="relative">
            <div
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
            <div className="h-full border-r border-blue-800/20" />
          </div>
        ))}
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Navigation items with href and display text
  const navItems = [
    { href: "services", text: "Services" },
    { href: "technologies", text: "Technologies" },
    { href: "contact", text: "Contact" },
  ];

  // Handle navigation click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };


 const socialLinks = [
   {
     name: "WhatsApp",
     icon: <MessageCircle className="w-5 h-5" />,
     color:
       "hover:bg-green-600/20 hover:border-green-500 group-hover:text-green-500",
     link: "https://wa.me/+213770404839",
   },
   {
     name: "Viber",
     icon: <Phone className="w-5 h-5" />,
     color:
       "hover:bg-purple-600/20 hover:border-purple-500 group-hover:text-purple-500",
     link: "viber://chat?number=+213770404839",
   },
   {
     name: "Telegram",
     icon: <Send className="w-5 h-5" />,
     color:
       "hover:bg-blue-600/20 hover:border-blue-500 group-hover:text-blue-500",
     link: "https://t.me/yourTelegramUsername",
   },
   {
     name: "Facebook",
     icon: <Facebook className="w-5 h-5" />,
     color:
       "hover:bg-blue-700/20 hover:border-blue-600 group-hover:text-blue-600",
     link: "https://www.facebook.com/profile.php?id=100083683237978&mibextid=qi2Omg",
   },
 ];


  const services = [
    {
      title: "Fibre Optique",
      description:
        "Installation et maintenance de réseaux fibre optique haute performance",
      icon: <Cable className="w-8 h-8 text-blue-400" />,
      features: ["Travaux ODN", "Raccordement", "Maintenance"],
    },
    {
      title: "Réseaux",
      description:
        "Solutions complètes pour réseaux téléphoniques et électriques",
      icon: <Network className="w-8 h-8 text-blue-400" />,
      features: ["Câblage structuré", "Installation", "Configuration"],
    },
    {
      title: "Sécurité",
      description: "Systèmes de surveillance et alarmes de dernière génération",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      features: ["Caméras IP", "Contrôle d'accès", "Alarmes"],
    },
  ];

  const features = [
    { icon: <Router className="w-6 h-6" />, text: "Infrastructure réseau" },
    { icon: <Server className="w-6 h-6" />, text: "Services cloud" },
    { icon: <Globe className="w-6 h-6" />, text: "Connectivité mondiale" },
    { icon: <Radio className="w-6 h-6" />, text: "Solutions sans fil" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-lg border-b border-gray-700 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className=" w-14 h-14 ">
                <img src={Logo} alt="Wifibre Logo" className=" w-14 h-14 " />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                WIFIBRE Entrepreneur
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-800"
                >
                  {item.text}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 text-gray-300 hover:bg-gray-700"
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <NetworkBackground />
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
              L&#39;Excellence en Télécommunications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Solutions innovantes en fibre optique, réseaux et sécurité pour
              votre entreprise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={(e) => handleNavClick(e, "services")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <span>Nos Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => handleNavClick(e, "contact")}
                className="px-8 py-4 border border-blue-400 hover:bg-blue-900/30 rounded-lg transition-all"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Nos Services Professionnels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Technology Showcase Section */}
      <div id="technologies" className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={Fibre}
              alt="Digital connectivity visualization"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Technologies de Pointe
            </h2>
            <p className="text-gray-300 text-lg">
              Découvrez nos solutions innovantes en matière de connectivité
              numérique. De la fibre optique aux réseaux sans fil, nous vous
              offrons les meilleures technologies pour votre transformation
              digitale.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}

      <div id="contact" className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Contactez Nos Experts
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div id="contact" className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-blue-400">
                  Informations de Contact
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6" />,
                      text: "0770404839",
                      label: "Téléphone",
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      text: "wifibre.entrepreneur@gmail.com",
                      label: "Email",
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      text: "Cité 440 logts LSP, Ain Malha, Djasr Kasentina",
                      label: "Adresse",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                    >
                      <div className="text-blue-400 mt-1">{contact.icon}</div>
                      <div>
                        <p className="text-sm text-gray-400">{contact.label}</p>
                        <p className="text-gray-200">{contact.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-400">NIF: 002318044410188</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur rounded-xl border border-gray-700 transition-all ${platform.color}`}
                  >
                    <div className="p-2 bg-gray-700/50 rounded-lg transition-colors">
                      {platform.icon}
                    </div>
                    <span className="font-medium">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 h-full min-h-[400px]">
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9042225461115!2d3.0833333147714993!3d36.733333314963414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3e8b40e1445%3A0x4b6b32a89e2d5!2sAin%20Malha%2C%20Djasr%20Kasentina!5e0!3m2!1sen!2sdz!4v1635785145784!5m2!1sen!2sdz"
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
