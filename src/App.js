import React, { useState, useEffect } from "react";
import "@/App.css";
import { 
  Building2, 
  Globe, 
  Wrench, 
  Shield, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Clock,
  Users,
  Cog,
  Ship,
  Factory,
  Award,
  Target,
  Briefcase,
  Send,
  AlertCircle,
  MessageCircle
} from "lucide-react";

const WHATSAPP_NUMBER = "17864426961";
const FORM_EMAIL = "ljyenergy.serv@gmail.com";

// WhatsApp helper function
const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

// Floating WhatsApp Button Component
const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, me gustaría obtener información sobre sus servicios industriales.`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-btn"
      className="fixed bottom-24 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};

// Header Component
const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "divisiones", label: "Divisiones" },
    { id: "abastecimiento", label: "Abastecimiento" },
    { id: "registro", label: "Registro" },
    { id: "cotizacion", label: "Cotización" },
    { id: "cumplimiento", label: "Cumplimiento" },
    { id: "equipos", label: "Equipos" },
    { id: "contacto", label: "Contacto" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-header shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#inicio" 
            data-testid="logo-link"
            className="flex items-center"
            onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_site-cost-estimator/artifacts/h65tckwf_FC7FF0B8-7EE2-4CAB-8AAD-BA7B812CE1A7.png"
              alt="Industrial Solutions Partners"
              className={`h-14 md:h-16 w-auto transition-all ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                data-testid={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled 
                    ? "text-[#334155] hover:text-[#0EA5E9] hover:bg-slate-100" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                } ${activeSection === item.id ? (isScrolled ? "text-[#0EA5E9]" : "text-white") : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            data-testid="mobile-menu"
            className="lg:hidden py-4 bg-white rounded-lg shadow-lg mb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className="block w-full px-4 py-3 text-left text-[#334155] hover:bg-slate-50 hover:text-[#0EA5E9]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')` 
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-slide-up">
          Soluciones Industriales
          <span className="block text-[#0EA5E9]">Globales</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-slide-up stagger-1">
          Su socio estratégico en abastecimiento técnico internacional y servicios de mantenimiento industrial
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up stagger-2">
          <a 
            href="#cotizacion"
            data-testid="hero-quote-btn"
            className="btn-primary px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-2"
            onClick={(e) => { e.preventDefault(); document.getElementById("cotizacion").scrollIntoView({ behavior: "smooth" }); }}
          >
            Solicitar Cotización
            <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="#nosotros"
            data-testid="hero-about-btn"
            className="px-8 py-4 rounded-md font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-[#0F172A] transition-colors"
            onClick={(e) => { e.preventDefault(); document.getElementById("nosotros").scrollIntoView({ behavior: "smooth" }); }}
          >
            Conózcanos
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slide-up stagger-3">
          {[
            { value: "10+", label: "Años de Experiencia" },
            { value: "200+", label: "Clientes Satisfechos" },
            { value: "5", label: "Países Atendidos" },
            { value: "24/7", label: "Soporte Técnico" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0EA5E9] mb-1">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section 
      id="nosotros" 
      data-testid="about-section"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2 mb-6">
              Industrial Solutions Partners
            </h2>
            <p className="text-[#334155] mb-6 text-lg">
              Somos un grupo empresarial especializado en soluciones industriales integrales, 
              con presencia estratégica en Estados Unidos y Venezuela. Nuestra misión es ser 
              el aliado estratégico de empresas que requieren abastecimiento técnico de alta 
              calidad y servicios de mantenimiento industrial especializados.
            </p>
            <p className="text-[#334155] mb-8">
              Con más de 10 años de experiencia en el sector, hemos consolidado una red de 
              proveedores certificados y un equipo técnico altamente capacitado para atender 
              las necesidades más exigentes de la industria petrolera, energética y manufacturera.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Misión", desc: "Proveer soluciones industriales de excelencia" },
                { icon: Award, title: "Visión", desc: "Ser líderes en abastecimiento técnico" },
                { icon: Shield, title: "Valores", desc: "Integridad, calidad y compromiso" },
                { icon: Users, title: "Equipo", desc: "Profesionales especializados" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A]">{item.title}</h4>
                    <p className="text-sm text-[#334155]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Industrial facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0EA5E9] text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Divisions Section
const DivisionsSection = () => {
  const mainDivisions = [
    {
      name: "Atlanta Professional Services LLC",
      location: "Miami, USA",
      focus: "Abastecimiento Técnico Internacional",
      description: "Especializada en la procura internacional de repuestos industriales bajo especificaciones técnicas. Operamos desde Miami para atender clientes en toda América Latina con productos certificados de fabricantes reconocidos mundialmente.",
      services: [
        "Repuestos industriales bajo especificación",
        "Equipos y maquinaria industrial",
        "Materiales técnicos certificados",
        "Logística internacional"
      ],
      icon: Globe,
      color: "bg-[#0EA5E9]"
    },
    {
      name: "LJY Energy Services",
      location: "Venezuela",
      focus: "Mantenimiento Industrial & Servicios Petroleros",
      description: "Enfocada en servicios de mantenimiento industrial y soporte a contratistas del sector petrolero. Contamos con personal técnico certificado y amplia experiencia en proyectos de alta complejidad.",
      services: [
        "Mantenimiento preventivo y correctivo",
        "Servicios de inspección técnica",
        "Soporte a operaciones petroleras",
        "Gestión de proyectos industriales"
      ],
      icon: Wrench,
      color: "bg-[#0F172A]"
    }
  ];

  const associatedCompanies = [
    {
      name: "Masterlock Internacional C.A.",
      location: "Maracaibo, Estado Zulia, Venezuela",
      focus: "Costura al Frío & Reparaciones en Sitio",
      description: "Empresa especializada en servicios de costura al frío y reparaciones industriales en sitio. Con años de experiencia en el sector petrolero y energético, ofrecemos soluciones técnicas sin parar operaciones.",
      services: [
        "Costura al frío de tuberías",
        "Reparaciones industriales en sitio",
        "Servicios de emergencia 24/7",
        "Mantenimiento especializado"
      ],
      phone: "+58-414-6443403",
      rif: "J-40222381-1",
      logo: "https://customer-assets.emergentagent.com/job_site-cost-estimator/artifacts/i9bcimrx_IMG_0752.jpeg",
      color: "bg-[#1E3A8A]",
      country: "venezuela"
    },
    {
      name: "Stefano Massobrio C.A.",
      location: "El Tigre, Estado Anzoátegui, Venezuela",
      focus: "Distribuidor Autorizado Hyundai / Kioti",
      description: "Distribuidor autorizado de maquinaria y equipos Hyundai Construction Equipment y Kioti. Con presencia en Caracas y sede principal en El Tigre, ofrecemos equipos de alta calidad para el sector industrial, agrícola y de construcción.",
      services: [
        "Maquinaria Hyundai Construction Equipment",
        "Equipos agrícolas Kioti",
        "Repuestos originales",
        "Servicio técnico autorizado"
      ],
      phone: "+58-412-8379000",
      email: "stefanomassobrioca@gmail.com",
      instagram: "@eventosnaranja",
      logo: "https://customer-assets.emergentagent.com/job_site-cost-estimator/artifacts/5azrrmsm_IMG_0861.jpeg",
      color: "bg-[#B91C1C]",
      country: "venezuela"
    },
    {
      name: "Eleka Improvements LLC",
      location: "South Florida - Miami Dade, USA",
      focus: "Diseño de Interiores & Pintura Profesional",
      description: "Especialistas en casas de lujo en el sur de Florida. Ofrecemos servicios de diseño de interiores y pintura profesional con los más altos estándares de calidad. Empresa licenciada y asegurada.",
      services: [
        "Diseño de interiores de lujo",
        "Servicios de pintura profesional",
        "Remodelaciones residenciales",
        "Acabados de alta gama"
      ],
      phone: "+1 (786) 427-4149",
      email: "info@elekaimprovements.com",
      logo: "https://customer-assets.emergentagent.com/job_site-cost-estimator/artifacts/1uqbwu6x_IMG_0858.jpeg",
      color: "bg-[#78716C]",
      country: "usa"
    }
  ];

  return (
    <section 
      id="divisiones" 
      data-testid="divisions-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Divisions */}
        <div className="text-center mb-16">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Nuestras Divisiones</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
            Grupo Empresarial Integrado
          </h2>
          <p className="text-[#334155] mt-4 max-w-2xl mx-auto">
            Operamos a través de divisiones estratégicas y empresas asociadas que se complementan 
            para ofrecer soluciones industriales integrales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainDivisions.map((division, index) => (
            <div 
              key={index}
              data-testid={`division-card-${index}`}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden card-hover"
            >
              <div className={`${division.color} p-6`}>
                <division.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white">{division.name}</h3>
                <div className="flex items-center gap-2 mt-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span>{division.location}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#0EA5E9] font-semibold mb-3">{division.focus}</div>
                <p className="text-[#334155] mb-6">{division.description}</p>
                <div className="space-y-3">
                  {division.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-3 text-sm text-[#334155]">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Associated Companies */}
        <div className="text-center mb-12">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Empresas Asociadas</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mt-2">
            Red de Socios Estratégicos
          </h3>
          <p className="text-[#334155] mt-4 max-w-2xl mx-auto">
            Contamos con empresas asociadas autorizadas en Estados Unidos y Venezuela que brindan 
            servicios especializados y apoyo técnico para complementar nuestra oferta integral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {associatedCompanies.map((company, index) => (
            <div 
              key={index}
              data-testid={`associated-company-${index}`}
              className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden card-hover"
            >
              <div className={`${company.color} p-6`}>
                <div className="flex items-center gap-4">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-16 w-auto max-w-[200px] object-contain bg-white rounded-lg p-2"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{company.name}</h3>
                    <div className="flex items-center gap-2 mt-1 text-white/80 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[#0EA5E9] font-semibold mb-3">{company.focus}</div>
                <p className="text-[#334155] mb-4">{company.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-[#334155]">
                    <Phone className="w-4 h-4 text-[#0EA5E9]" />
                    <span>{company.phone}</span>
                  </div>
                  {company.rif && (
                    <div className="flex items-center gap-2 text-[#334155]">
                      <FileText className="w-4 h-4 text-[#0EA5E9]" />
                      <span>RIF: {company.rif}</span>
                    </div>
                  )}
                  {company.email && (
                    <div className="flex items-center gap-2 text-[#334155]">
                      <Mail className="w-4 h-4 text-[#0EA5E9]" />
                      <span>{company.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {company.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-3 text-sm text-[#334155]">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Supply Section
const SupplySection = () => {
  const categories = [
    { icon: Cog, title: "Repuestos Mecánicos", desc: "Válvulas, bombas, compresores, rodamientos" },
    { icon: Factory, title: "Equipos Industriales", desc: "Maquinaria pesada, equipos de proceso" },
    { icon: Ship, title: "Materiales de Tubería", desc: "Tuberías, conexiones, bridas, accesorios" },
    { icon: Shield, title: "Instrumentación", desc: "Sensores, medidores, sistemas de control" },
  ];

  return (
    <section 
      id="abastecimiento" 
      data-testid="supply-section"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Servicios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2 mb-6">
              Abastecimiento Técnico Internacional
            </h2>
            <p className="text-[#334155] mb-6 text-lg">
              Proveemos materiales y equipos industriales bajo especificaciones técnicas precisas, 
              trabajando exclusivamente con fabricantes certificados y distribuidores autorizados 
              a nivel mundial.
            </p>
            <p className="text-[#334155] mb-8">
              Todos nuestros productos son suministrados bajo pedido, garantizando que cada 
              entrega cumpla exactamente con los requerimientos técnicos de nuestros clientes.
            </p>
            
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 text-[#0EA5E9] font-semibold mb-2">
                <Clock className="w-5 h-5" />
                <span>Suministro Bajo Pedido</span>
              </div>
              <p className="text-sm text-[#334155]">
                Todos los productos y equipos son cotizados y suministrados según los 
                requerimientos específicos de cada cliente. No manejamos inventario de stock.
              </p>
            </div>

            <a 
              href="#cotizacion"
              data-testid="supply-quote-btn"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold"
              onClick={(e) => { e.preventDefault(); document.getElementById("cotizacion").scrollIntoView({ behavior: "smooth" }); }}
            >
              Solicitar Cotización Técnica
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 card-hover"
              >
                <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-2">{cat.title}</h4>
                <p className="text-sm text-[#334155]">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Registration Form Section
const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    tax_id: "",
    industry: "",
    contact_name: "",
    contact_position: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    comments: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Nuevo Registro de Cliente - Industrial Solutions Partners",
          "Tipo de Solicitud": "REGISTRO DE CLIENTE",
          "Empresa": formData.company_name,
          "RIF/Tax ID": formData.tax_id,
          "Industria": formData.industry,
          "Nombre Contacto": formData.contact_name,
          "Cargo": formData.contact_position,
          "Email": formData.email,
          "Teléfono": formData.phone,
          "País": formData.country,
          "Ciudad": formData.city,
          "Dirección": formData.address,
          "Comentarios": formData.comments || "N/A"
        })
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          company_name: "",
          tax_id: "",
          industry: "",
          contact_name: "",
          contact_position: "",
          email: "",
          phone: "",
          country: "",
          city: "",
          address: "",
          comments: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    "Petróleo y Gas",
    "Energía",
    "Minería",
    "Manufactura",
    "Petroquímica",
    "Construcción",
    "Otro"
  ];

  return (
    <section 
      id="registro" 
      data-testid="registration-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Registro</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
            Registro Corporativo de Cliente
          </h2>
          <p className="text-[#334155] mt-4 max-w-2xl mx-auto">
            Complete el siguiente formulario para registrarse como cliente corporativo y 
            acceder a nuestros servicios de abastecimiento técnico.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          data-testid="registration-form"
          className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Nombre de la Empresa *
              </label>
              <input
                type="text"
                name="company_name"
                data-testid="input-company-name"
                value={formData.company_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Empresa S.A."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                RIF / Tax ID *
              </label>
              <input
                type="text"
                name="tax_id"
                data-testid="input-tax-id"
                value={formData.tax_id}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="J-12345678-9"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Industria *
              </label>
              <select
                name="industry"
                data-testid="select-industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              >
                <option value="">Seleccione...</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Nombre del Contacto *
              </label>
              <input
                type="text"
                name="contact_name"
                data-testid="input-contact-name"
                value={formData.contact_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Cargo *
              </label>
              <input
                type="text"
                name="contact_position"
                data-testid="input-position"
                value={formData.contact_position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Gerente de Compras"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                data-testid="input-email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="correo@empresa.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                data-testid="input-phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                País *
              </label>
              <input
                type="text"
                name="country"
                data-testid="input-country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Venezuela"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Ciudad *
              </label>
              <input
                type="text"
                name="city"
                data-testid="input-city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Caracas"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Dirección *
              </label>
              <input
                type="text"
                name="address"
                data-testid="input-address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                placeholder="Av. Principal, Edificio Torre, Piso 10"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Comentarios Adicionales
              </label>
              <textarea
                name="comments"
                data-testid="input-comments"
                value={formData.comments}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A] resize-none"
                placeholder="Información adicional relevante..."
              />
            </div>
          </div>

          {submitStatus === "success" && (
            <div data-testid="registration-success" className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">Registro enviado exitosamente.</span>
              </div>
              <p className="text-green-700 text-sm mb-3">Nos pondremos en contacto pronto. ¿Desea comunicarse directamente por WhatsApp?</p>
              <button
                type="button"
                onClick={() => openWhatsApp("Hola, acabo de registrarme como cliente corporativo en su página web. Me gustaría obtener más información.")}
                data-testid="registration-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </button>
            </div>
          )}

          {submitStatus === "error" && (
            <div data-testid="registration-error" className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800">Error al enviar el registro. Por favor intente nuevamente.</span>
            </div>
          )}

          <button
            type="submit"
            data-testid="registration-submit-btn"
            disabled={isSubmitting}
            className="mt-6 w-full btn-primary px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="spinner" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Registro</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

// Quote Request Section
const QuoteSection = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_name: "",
    email: "",
    phone: "",
    part_number: "",
    part_description: "",
    quantity: "",
    urgency: "",
    additional_specs: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Nueva Solicitud de Cotización - Industrial Solutions Partners",
          "Tipo de Solicitud": "COTIZACIÓN TÉCNICA",
          "Empresa": formData.company_name,
          "Nombre Contacto": formData.contact_name,
          "Email": formData.email,
          "Teléfono": formData.phone,
          "Número de Parte": formData.part_number || "N/A",
          "Descripción del Producto": formData.part_description,
          "Cantidad": formData.quantity,
          "Urgencia": formData.urgency,
          "Especificaciones Adicionales": formData.additional_specs || "N/A"
        })
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          company_name: "",
          contact_name: "",
          email: "",
          phone: "",
          part_number: "",
          part_description: "",
          quantity: "",
          urgency: "",
          additional_specs: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Quote request error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const urgencyOptions = [
    { value: "standard", label: "Estándar (15-30 días)" },
    { value: "priority", label: "Prioritario (7-14 días)" },
    { value: "urgent", label: "Urgente (1-7 días)" },
  ];

  return (
    <section 
      id="cotizacion" 
      data-testid="quote-section"
      className="py-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Cotización</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
            Solicitud de Cotización Técnica
          </h2>
          <p className="text-[#334155] mt-4 max-w-2xl mx-auto">
            Complete el formulario con los detalles técnicos del producto o equipo que necesita. 
            Nuestro equipo le responderá en un plazo máximo de 48 horas hábiles.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          data-testid="quote-form"
          className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8"
        >
          <h3 className="text-lg font-semibold text-[#0F172A] mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#0EA5E9]" />
            Información de la Empresa
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Nombre de la Empresa *
              </label>
              <input
                type="text"
                name="company_name"
                data-testid="quote-company-name"
                value={formData.company_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Nombre del Contacto *
              </label>
              <input
                type="text"
                name="contact_name"
                data-testid="quote-contact-name"
                value={formData.contact_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                data-testid="quote-email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="phone"
                data-testid="quote-phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#0F172A] mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0EA5E9]" />
            Especificaciones Técnicas
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Número de Parte (si aplica)
              </label>
              <input
                type="text"
                name="part_number"
                data-testid="quote-part-number"
                value={formData.part_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A] font-mono"
                placeholder="ABC-12345-XYZ"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Cantidad Requerida *
              </label>
              <input
                type="number"
                name="quantity"
                data-testid="quote-quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Descripción del Producto *
              </label>
              <textarea
                name="part_description"
                data-testid="quote-description"
                value={formData.part_description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A] resize-none"
                placeholder="Describa el producto o equipo requerido con el mayor detalle posible..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Urgencia *
              </label>
              <select
                name="urgency"
                data-testid="quote-urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
              >
                <option value="">Seleccione...</option>
                {urgencyOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">
                Especificaciones Adicionales
              </label>
              <textarea
                name="additional_specs"
                data-testid="quote-additional-specs"
                value={formData.additional_specs}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A] resize-none"
                placeholder="Materiales, certificaciones, normas técnicas, condiciones de operación..."
              />
            </div>
          </div>

          {submitStatus === "success" && (
            <div data-testid="quote-success" className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">Solicitud enviada exitosamente.</span>
              </div>
              <p className="text-green-700 text-sm mb-3">Recibirá respuesta en 48 horas hábiles. ¿Necesita una respuesta más rápida?</p>
              <button
                type="button"
                onClick={() => openWhatsApp("Hola, acabo de enviar una solicitud de cotización técnica en su página web. Me gustaría dar seguimiento a mi solicitud.")}
                data-testid="quote-whatsapp-btn"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </button>
            </div>
          )}

          {submitStatus === "error" && (
            <div data-testid="quote-error" className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="text-red-800">Error al enviar la solicitud. Por favor intente nuevamente.</span>
            </div>
          )}

          <button
            type="submit"
            data-testid="quote-submit-btn"
            disabled={isSubmitting}
            className="mt-6 w-full btn-primary px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="spinner" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Solicitar Cotización</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

// Compliance Section
const ComplianceSection = () => {
  const policies = [
    {
      icon: Shield,
      title: "Política de Confidencialidad",
      description: "Toda la información proporcionada por nuestros clientes es tratada con absoluta confidencialidad. Implementamos protocolos estrictos de protección de datos y no compartimos información con terceros sin autorización expresa."
    },
    {
      icon: Award,
      title: "Cumplimiento Normativo",
      description: "Operamos en estricto cumplimiento con las regulaciones comerciales internacionales, incluyendo normativas de exportación e importación, sanciones y controles de comercio."
    },
    {
      icon: FileText,
      title: "Documentación y Trazabilidad",
      description: "Mantenemos registros completos de todas las transacciones y documentación técnica. Garantizamos la trazabilidad de todos los productos desde su origen hasta la entrega final."
    },
    {
      icon: Users,
      title: "Ética Empresarial",
      description: "Nos regimos por los más altos estándares de ética empresarial. Mantenemos una política de tolerancia cero hacia la corrupción, el soborno y cualquier práctica comercial desleal."
    }
  ];

  return (
    <section 
      id="cumplimiento" 
      data-testid="compliance-section"
      className="py-24 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Compliance</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Cumplimiento y Confidencialidad
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Operamos bajo los más altos estándares de cumplimiento normativo y protección 
            de la información de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div 
              key={index}
              data-testid={`compliance-card-${index}`}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8"
            >
              <div className="w-12 h-12 bg-[#0EA5E9]/20 rounded-lg flex items-center justify-center mb-4">
                <policy.icon className="w-6 h-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{policy.title}</h3>
              <p className="text-slate-400">{policy.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Compromiso de Confidencialidad</h3>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Industrial Solutions Partners se compromete a proteger la información confidencial de sus clientes, 
            incluyendo datos técnicos, comerciales y financieros. Este compromiso es parte integral de nuestra 
            cultura corporativa y se refleja en todos nuestros procesos y operaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

// Equipment Section
const EquipmentSection = () => {
  const categories = [
    {
      title: "Equipos de Proceso",
      items: ["Intercambiadores de calor", "Torres de destilación", "Reactores", "Separadores"]
    },
    {
      title: "Equipos Rotativos",
      items: ["Bombas centrífugas", "Compresores", "Turbinas", "Motores eléctricos"]
    },
    {
      title: "Instrumentación",
      items: ["Válvulas de control", "Medidores de flujo", "Sensores de presión", "Sistemas SCADA"]
    },
    {
      title: "Equipos de Seguridad",
      items: ["Válvulas de alivio", "Sistemas contra incendio", "Detectores de gas", "Equipos de protección"]
    }
  ];

  return (
    <section 
      id="equipos" 
      data-testid="equipment-section"
      className="py-24 bg-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Catálogo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
            Equipos Disponibles Bajo Ocasión
          </h2>
          <p className="text-[#334155] mt-4 max-w-2xl mx-auto">
            Consulte nuestro catálogo de categorías de equipos disponibles. Todos los productos 
            son cotizados y suministrados bajo pedido según sus especificaciones técnicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              data-testid={`equipment-card-${index}`}
              className="bg-white border border-[#E2E8F0] rounded-lg p-6 card-hover"
            >
              <h3 className="text-lg font-bold text-[#0F172A] mb-4 pb-4 border-b border-[#E2E8F0]">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 text-sm text-[#334155]">
                    <ChevronRight className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-6 py-4">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-medium">
              Todos los equipos son suministrados bajo pedido. Solicite su cotización técnica.
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="#cotizacion"
            data-testid="equipment-quote-btn"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold"
            onClick={(e) => { e.preventDefault(); document.getElementById("cotizacion").scrollIntoView({ behavior: "smooth" }); }}
          >
            Solicitar Cotización
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Nuevo Mensaje de Contacto - Industrial Solutions Partners",
          "Tipo de Solicitud": "MENSAJE DE CONTACTO",
          "Nombre": formData.name,
          "Email": formData.email,
          "Teléfono": formData.phone || "N/A",
          "Asunto": formData.subject,
          "Mensaje": formData.message
        })
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contacto" 
      data-testid="contact-section"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#0EA5E9] font-semibold text-sm uppercase tracking-wider">Contacto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2 mb-6">
              Contáctenos
            </h2>
            <p className="text-[#334155] mb-8">
              Estamos a su disposición para atender sus consultas y requerimientos. 
              Nuestro equipo de especialistas le brindará la asesoría que necesita.
            </p>

            <div className="space-y-6">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#0EA5E9]" />
                  Atlanta Professional Services LLC
                </h3>
                <div className="space-y-3 text-[#334155]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span>Miami, Florida, USA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span>info@industrialsolutionspartners.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span>+1 (786) 442-6961</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-[#0EA5E9]" />
                  LJY Energy Services
                </h3>
                <div className="space-y-3 text-[#334155]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                    <span>Venezuela</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span>servicios@ljyenergy.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#0EA5E9] flex-shrink-0" />
                    <span>+58 (291) 651-7397</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form 
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">Envíenos un Mensaje</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    data-testid="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      data-testid="contact-email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      data-testid="contact-phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    data-testid="contact-subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    data-testid="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-md bg-white text-[#0F172A] resize-none"
                  />
                </div>
              </div>

              {submitStatus === "success" && (
                <div data-testid="contact-success" className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Mensaje enviado exitosamente.</span>
                  </div>
                  <p className="text-green-700 text-sm mb-3">También puede contactarnos directamente por WhatsApp:</p>
                  <button
                    type="button"
                    onClick={() => openWhatsApp("Hola, acabo de enviar un mensaje de contacto en su página web. Me gustaría hablar con ustedes.")}
                    data-testid="contact-whatsapp-btn"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar por WhatsApp
                  </button>
                </div>
              )}

              {submitStatus === "error" && (
                <div data-testid="contact-error" className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">Error al enviar el mensaje. Por favor intente nuevamente.</span>
                </div>
              )}

              <button
                type="submit"
                data-testid="contact-submit-btn"
                disabled={isSubmitting}
                className="mt-6 w-full btn-primary px-6 py-4 rounded-md font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      data-testid="main-footer"
      className="bg-[#0F172A] text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_site-cost-estimator/artifacts/h65tckwf_FC7FF0B8-7EE2-4CAB-8AAD-BA7B812CE1A7.png"
                alt="Industrial Solutions Partners"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-slate-400 max-w-md">
              Su socio estratégico en abastecimiento técnico internacional y servicios 
              de mantenimiento industrial. Operando desde Miami y Venezuela para servir 
              a toda América Latina.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Secciones</h4>
            <ul className="space-y-2">
              {["Inicio", "Nosotros", "Divisiones", "Abastecimiento", "Contacto"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-[#0EA5E9] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {["Registro de Clientes", "Solicitud de Cotización", "Cumplimiento", "Equipos"].map((item) => (
                <li key={item}>
                  <span className="text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Industrial Solutions Partners. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>Política de Privacidad</span>
            <span>Términos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "nosotros", "divisiones", "abastecimiento", "registro", "cotizacion", "cumplimiento", "equipos", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App" data-testid="app-container">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <DivisionsSection />
        <SupplySection />
        <RegistrationSection />
        <QuoteSection />
        <ComplianceSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
