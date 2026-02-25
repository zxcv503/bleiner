/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { 
  Truck, 
  HardHat, 
  Snowflake, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook,
  ChevronLeft,
  ChevronRight,
  Check,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Translations ---

type Language = 'de' | 'en';

interface TranslationSchema {
  seoH1: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    fleet: string;
    contact: string;
    services: string;
    requestQuote: string;
  };
  services: {
    transportation: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    construction: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    winter: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
    };
    learnMore: string;
    ourCoreServices: string;
    expertise: string;
    coreDescription: string;
  };
  hero: {
    slides: {
      title: string;
      subtitle: string;
      description: string;
    }[];
    requestQuote: string;
    ourServices: string;
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    motto: string;
    categories: {
      all: string;
      transportation: string;
      construction: string;
      winter: string;
      roadAssistance: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    certifiedQuality: string;
    companyInfo: {
      detailsTitle: string;
      name: string;
      address: string;
      phone: string;
      vat: string;
      register: string;
      bank: {
        title: string;
        name: string;
        iban: string;
        bic: string;
      };
      taxNote: string;
      paymentTerms: string;
      regions: string;
    };
    licenses: {
      title: string;
      items: {
        title: string;
        description: string;
        director: string;
        gisa: string;
        directorLabel: string;
        gisaLabel: string;
      }[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    mobile: string;
    email: string;
    facebook: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      placeholders: {
        name: string;
        email: string;
        phone: string;
        message: string;
      };
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        messageRequired: string;
        phoneInvalid: string;
      };
    };
  };
  footer: {
    rights: string;
    privacy: string;
    imprint: string;
  };
  fleet: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const translations: Record<Language, TranslationSchema> = {
  de: {
    seoH1: 'Bleiner Transport, Erdbau & Winterdienst in Steyr, Niederösterreich',
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      projects: 'Projekte',
      fleet: 'Fuhrpark',
      contact: 'Kontakt',
      services: 'Leistungen',
      requestQuote: 'Angebot anfordern',
    },
    services: {
      transportation: {
        title: 'Transport & Logistik',
        subtitle: 'Schwerlast-Lösungen',
        description: 'Wir bieten umfassende Schwertransporte und regionale Logistik in ganz Österreich und grenzüberschreitend an. Unser Fuhrpark ist für spezialisierte Gerätetransporte gerüstet und gewährleistet eine zuverlässige Planung und sichere Lieferung.',
        features: [
          'Schwer- & Sondertransporte',
          'Regionale & grenzüberschreitende Logistik',
          'Industrieanlagen-Transporte',
          'Zuverlässige Planung & Verfolgung',
          'Erfahrene professionelle Fahrer'
        ],
      },
      construction: {
        title: 'Bauvorbereitung',
        subtitle: 'Präzisions-Erdarbeiten',
        description: 'Unser Expertenteam kümmert sich um die kritischen frühen Phasen des Bauens. Von der Geländegradierung bis zur Bodenvorbereitung sorgen wir dafür, dass Ihr Standort perfekt nivelliert und bereit für den Bau ist.',
        features: [
          'Präzise Geländegradierung',
          'Bodenvorbereitung & Nivellierung',
          'Baustellenräumung',
          'Feldnivellierung & Ausgleich',
          'Technische Bodenbewertung'
        ],
      },
      winter: {
        title: 'Winterdienst',
        subtitle: 'Sicherheit & Zuverlässigkeit',
        description: 'Wenn der Winter einbricht, ist Zuverlässigkeit alles. Wir bieten professionelle Schneeräumung und Straßenreinigung für kommunale und private Aufträge an, um die Verkehrssicherheit und Erreichbarkeit zu gewährleisten.',
        features: [
          'Professionelle Schneeräumung',
          'Straßen- & Gehwegreinigung',
          'Instandhaltung der Verkehrssicherheit',
          'Kommunale & private Verträge',
          '24/7 Schnelleinsatzteam'
        ],
      },
      learnMore: 'Mehr erfahren',
      ourCoreServices: 'Unsere Kernleistungen',
      expertise: 'Expertise',
      coreDescription: 'Exzellenz in Transport, Bauvorbereitung und Winterwartung mit österreichischer Präzision und Zuverlässigkeit.',
    },
    hero: {
      slides: [
        {
          title: 'Zuverlässige Schwertransporte in Österreich, Deutschland, Tschechien, Mittel- & Osteuropa',
          subtitle: 'Transport & Logistik',
          description: 'Spezialisierte Logistiklösungen für schwere Maschinen und Industrieanlagen.'
        },
        {
          title: 'Präzise Geländevorbereitung & Bodenausgleich',
          subtitle: 'Bauvorbereitung',
          description: 'Fachmännische Standortvorbereitung, Bodennivellierung und Geländeaustausch für Ihre Projekte.'
        },
        {
          title: 'Professionelle Schneeräumung & Winterwartung',
          subtitle: 'Winterdienst',
          description: 'Straßen sicher und frei halten mit unseren reaktionsschnellen Winterwartungsdiensten.'
        }
      ],
      requestQuote: 'Angebot anfordern',
      ourServices: 'Unsere Leistungen',
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Portfolio',
      description: 'Ein Einblick in unsere jüngsten Arbeiten in ganz Österreich, die unser Engagement für Qualität und Zuverlässigkeit unter Beweis stellen.',
      motto: 'Ihr Erfolg ist unser Geschäft',
      categories: {
        all: 'Alle',
        transportation: 'Transport & Logistik',
        construction: 'Bauvorbereitung',
        winter: 'Winterdienst',
        roadAssistance: 'Pannenhilfe',
      },
    },
    about: {
      title: 'Über die Harald Bleiner GmbH',
      subtitle: 'Unternehmensprofil',
      description: 'Die Harald Bleiner GmbH ist Ihr verlässlicher Partner für spezialisierte Transportlösungen, Erdbewegungen und Winterdienste. Mit jahrelanger Erfahrung und einem modernen Fuhrpark garantieren wir höchste Qualität und Termintreue.',
      certifiedQuality: 'Zertifizierte Qualität',
      companyInfo: {
        detailsTitle: 'Unternehmensdaten',
        name: 'Harald Bleiner GmbH',
        address: 'Wolfernstraße 20b, 4400 Steyr',
        phone: '0664 / 462 17 57',
        vat: 'ATU79792814',
        register: '611331 t',
        bank: {
          title: 'Bankverbindung',
          name: 'Raiffeisenbank Sierning-Enns',
          iban: 'AT84 3456 0000 0203 3538',
          bic: 'RZOOAT2L560',
        },
        taxNote: '',
        paymentTerms: '',
        regions: 'Österreich, Deutschland, Tschechien, Mittel- & Osteuropa',
      },
      licenses: {
        title: 'Gewerbeberechtigungen',
        items: [
          {
            title: 'LI Metalltechniker',
            description: 'Metalltechnik für Land- und Baumaschinen verbunden mit Metalltechnik für Metall- und...',
            director: 'Mst. Harald Bleiner',
            gisa: '37809485',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'LI Bau',
            description: 'Erdbewegungsarbeiten, für die statische Kenntnisse nicht erforderlich sind',
            director: 'Mst. Harald Bleiner',
            gisa: '12071968',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'LI Fahrzeugtechnik',
            description: 'Kraftfahrzeugtechnik verbunden mit Karosseriebautechnik und Karosserielackiertechniker',
            director: 'Mst. Harald Bleiner',
            gisa: '35380955',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'FG Entsorgungs- und Ressourcenmanagement',
            description: 'Schneeräumung, Betreuung und Reinigung von Verkehrsflächen (Sommer- und Winterdienst)',
            director: 'Mst. Harald Bleiner',
            gisa: '33181769',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'LI Bauhilfsgewerbe',
            description: 'Vermietung von Baumaschinen',
            director: 'Mst. Harald Bleiner',
            gisa: '12071975',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'FG Güterbeförderungsgewerbe',
            description: 'Beförderung von Gütern mit Kraftfahrzeugen im grenzüberschreitenden Verkehr...',
            director: 'Mst. Harald Bleiner',
            gisa: '12044931',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'Vermessungstechnik',
            description: 'Vermessungstechniker vermessen Grundstücke, Bauwerke und Landschaften für Bauwesen, Kataster und Planung. Arbeit im Außen- und Innendienst mit CAD/GIS.',
            director: 'Mst. Harald Bleiner',
            gisa: '-',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
          {
            title: 'Landwirtschaft & Handel',
            description: 'Pauschalierte Landwirtschaft sowie Lohnunternehmen für land- und forstwirtschaftliche Betriebe, Handel.',
            director: 'Mst. Harald Bleiner',
            gisa: '-',
            directorLabel: 'Gewerberechtliche Geschäftsführung',
            gisaLabel: 'GISA-Zahl',
          },
        ],
      },
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Kontakt',
      address: 'Adresse',
      mobile: 'Mobil',
      email: 'E-Mail',
      facebook: 'Folgen Sie uns auf Facebook',
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        message: 'Ihre Nachricht',
        submit: 'Anfrage senden',
        successTitle: 'Vielen Dank!',
        successMessage: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.',
        placeholders: {
          name: 'Max Mustermann',
          email: 'max@beispiel.at',
          phone: '+43 664 1234567',
          message: 'Erzählen Sie uns von Ihrem Projekt...',
        },
        errors: {
          nameRequired: 'Name ist erforderlich',
          emailRequired: 'E-Mail ist erforderlich',
          emailInvalid: 'Ungültige E-Mail-Adresse',
          messageRequired: 'Nachricht ist erforderlich',
          phoneInvalid: 'Ungültiges Telefonformat',
        },
      },
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      imprint: 'Impressum',
    },
    fleet: {
      title: 'Unser Fuhrpark',
      subtitle: 'Moderne Ausrüstung',
      description: 'Ein Einblick in unsere spezialisierten Fahrzeuge und Maschinen, die für höchste Zuverlässigkeit und Effizienz sorgen.',
    },
  },
  en: {
    seoH1: 'Bleiner Transport, Earthworks & Winter Services in Steyr, Lower Austria',
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      fleet: 'Fleet',
      contact: 'Contact',
      services: 'Services',
      requestQuote: 'Request a Quote',
    },
    services: {
      transportation: {
        title: 'Transportation & Logistics',
        subtitle: 'Heavy-Duty Solutions',
        description: 'We provide comprehensive heavy transport and regional logistics across Austria and cross-border. Our fleet is equipped for specialized equipment transport, ensuring reliable scheduling and safe delivery.',
        features: [
          'Heavy & Oversized Transport',
          'Regional & Cross-border Logistics',
          'Industrial Equipment Transport',
          'Reliable Scheduling & Tracking',
          'Experienced Professional Operators'
        ],
      },
      construction: {
        title: 'Construction Preparation',
        subtitle: 'Precision Groundwork',
        description: 'Our expert team handles the critical early stages of construction. From terrain grading to soil preparation, we ensure your site is perfectly leveled and ready for building.',
        features: [
          'Precision Terrain Grading',
          'Soil Preparation & Leveling',
          'Construction Site Clearing',
          'Field Leveling & Equalization',
          'Technical Ground Assessment'
        ],
      },
      winter: {
        title: 'Winter Services',
        subtitle: 'Safety & Reliability',
        description: 'When winter hits, reliability is everything. We offer professional snow clearing and street cleaning for municipal and private contracts, ensuring road safety and accessibility.',
        features: [
          'Professional Snow Clearing',
          'Street & Sidewalk Cleaning',
          'Road Safety Maintenance',
          'Municipal & Private Contracts',
          '24/7 Rapid Response Team'
        ],
      },
      learnMore: 'Learn More',
      ourCoreServices: 'Our Core Services',
      expertise: 'Expertise',
      coreDescription: 'Delivering excellence in transport, construction preparation, and winter maintenance with Austrian precision and reliability.',
    },
    hero: {
      slides: [
        {
          title: 'Reliable Heavy Transport Across Austria, Germany, Czech Republic, Central & Eastern Europe',
          subtitle: 'Transportation',
          description: 'Specialized logistics solutions for heavy machinery and industrial equipment.'
        },
        {
          title: 'Precision Terrain Preparation & Ground Leveling',
          subtitle: 'Construction Preparation',
          description: 'Expert site preparation, soil grading, and terrain equalization for your projects.'
        },
        {
          title: 'Professional Snow Clearing & Winter Maintenance',
          subtitle: 'Winter Service',
          description: 'Keeping roads safe and clear with rapid-response winter maintenance services.'
        }
      ],
      requestQuote: 'Request a Quote',
      ourServices: 'Our Services',
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'Portfolio',
      description: 'A showcase of our recent work across Austria, demonstrating our commitment to quality and reliability.',
      motto: 'Your success is our business',
      categories: {
        all: 'All',
        transportation: 'Transportation',
        construction: 'Construction',
        winter: 'Winter Service',
        roadAssistance: 'Road Assistance',
      },
    },
    about: {
      title: 'About Harald Bleiner GmbH',
      subtitle: 'Company Profile',
      description: 'Harald Bleiner GmbH is your reliable partner for specialized transport solutions, earthmoving, and winter services. With years of experience and a modern fleet, we guarantee the highest quality and adherence to schedules.',
      certifiedQuality: 'Certified Quality',
      companyInfo: {
        detailsTitle: 'Company Details',
        name: 'Harald Bleiner GmbH',
        address: 'Wolfernstraße 20b, 4400 Steyr, Austria',
        phone: '+43 664 462 17 57',
        vat: 'ATU79792814',
        register: '611331 t',
        bank: {
          title: 'Bank Details',
          name: 'Raiffeisenbank Sierning-Enns',
          iban: 'AT84 3456 0000 0203 3538',
          bic: 'RZOOAT2L560',
        },
        taxNote: '',
        paymentTerms: '',
        regions: 'Austria, Germany, Czech Republic, Central & Eastern Europe',
      },
      licenses: {
        title: 'Trade Licenses / Business Activities',
        items: [
          {
            title: 'Metal Technology',
            description: 'Metal technology for agricultural and construction machinery combined with metal construction...',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '37809485',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Construction',
            description: 'Earthmoving works not requiring structural engineering certification',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '12071968',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Automotive Engineering',
            description: 'Motor vehicle technology combined with body construction and automotive painting',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '35380955',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Waste and Resource Management',
            description: 'Snow removal, maintenance and cleaning of traffic areas (summer and winter services)',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '33181769',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Construction Auxiliary Trade',
            description: 'Rental of construction machinery',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '12071975',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Freight Transport Trade',
            description: 'Transport of goods by motor vehicles in cross-border traffic',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '12044931',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Surveying Technology',
            description: 'Surveying technicians measure land, buildings, and landscapes for construction, cadastre, and planning. Field and office work with CAD/GIS.',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '-',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
          {
            title: 'Agriculture & Trade',
            description: 'Flat-rate agriculture as well as contracting for agricultural and forestry operations, trade.',
            director: 'Master Craftsman Harald Bleiner',
            gisa: '-',
            directorLabel: 'Commercial Managing Director',
            gisaLabel: 'GISA No.',
          },
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Contact',
      address: 'Address',
      mobile: 'Mobile',
      email: 'Email',
      facebook: 'Follow us on Facebook',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Inquiry',
        successTitle: 'Thank You!',
        successMessage: 'Your message has been sent successfully. We will get back to you soon.',
        placeholders: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+43 664 1234567',
          message: 'Tell us about your project...',
        },
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email address',
          messageRequired: 'Message is required',
          phoneInvalid: 'Invalid phone format',
        },
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
    },
    fleet: {
      title: 'Our Vehicle Fleet',
      subtitle: 'Modern Equipment',
      description: 'A look at our specialized vehicles and machinery, ensuring maximum reliability and efficiency for every task.',
    },
  },
};

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationSchema;
}>({
  lang: 'de',
  setLang: () => {},
  t: translations.de,
});

// --- Components ---

const Navbar = () => {
  const { lang, setLang, t } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: t.services.transportation.title, href: '#transportation', icon: <Truck size={16} /> },
    { name: t.services.construction.title, href: '#construction', icon: <HardHat size={16} /> },
    { name: t.services.winter.title, href: '#winter', icon: <Snowflake size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-1.5 rounded">
            <Truck size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-lg tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              HARALD BLEINER
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
              GmbH
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#home"
            className={`font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
          >
            {t.nav.home}
          </a>

          <div className="relative group">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              className={`flex items-center gap-1 font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
            >
              {t.nav.services} <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <a 
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      <span className="text-slate-400">{service.icon}</span>
                      {service.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="#projects"
            className={`font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
          >
            {t.nav.projects}
          </a>

          <a 
            href="#fleet"
            className={`font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
          >
            {t.nav.fleet}
          </a>

          <a 
            href="#about"
            className={`font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
          >
            {t.nav.about}
          </a>

          <a 
            href="#contact"
            className={`font-medium text-sm transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'}`}
          >
            {t.nav.contact}
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t.nav.requestQuote}
            </a>

            {/* Language Switcher */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
              isScrolled ? 'border-slate-200 bg-slate-50' : 'border-white/20 bg-white/10 backdrop-blur-md'
            }`}>
              <button 
                onClick={() => setLang('de')}
                className={`text-xs font-bold transition-colors ${lang === 'de' ? (isScrolled ? 'text-slate-900' : 'text-white') : (isScrolled ? 'text-slate-400' : 'text-white/40')}`}
              >
                DE
              </button>
              <div className={`w-px h-3 ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`} />
              <button 
                onClick={() => setLang('en')}
                className={`text-xs font-bold transition-colors ${lang === 'en' ? (isScrolled ? 'text-slate-900' : 'text-white') : (isScrolled ? 'text-slate-400' : 'text-white/40')}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-display font-semibold text-slate-900">{t.nav.home}</a>
                <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                  <button onClick={() => { setLang('de'); setIsMobileMenuOpen(false); }} className={`text-xs font-bold ${lang === 'de' ? 'text-slate-900' : 'text-slate-400'}`}>DE</button>
                  <div className="w-px h-3 bg-slate-200" />
                  <button onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }} className={`text-xs font-bold ${lang === 'en' ? 'text-slate-900' : 'text-slate-400'}`}>EN</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{t.nav.services}</p>
                <div className="flex flex-col gap-4">
                  {services.map((service) => (
                    <a 
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-display font-semibold text-slate-900 flex items-center gap-3"
                    >
                      {service.icon} {service.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100" />
              <div className="flex flex-col gap-4">
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-display font-semibold text-slate-900">{t.nav.projects}</a>
                <a href="#fleet" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-display font-semibold text-slate-900">{t.nav.fleet}</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-display font-semibold text-slate-900">{t.nav.about}</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-display font-semibold text-slate-900">{t.nav.contact}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t } = useContext(LanguageContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 'bleiner-1',
      title: t.hero.slides[0].title,
      subtitle: t.hero.slides[0].subtitle,
      image: '/images/ai-bleiner-transport-1.png',
      description: t.hero.slides[0].description
    },
    {
      id: 'bleiner-2',
      title: t.hero.slides[1].title,
      subtitle: t.hero.slides[1].subtitle,
      image: '/images/ai-bleiner-construction-2.png',
      description: t.hero.slides[1].description
    },
    {
      id: 'bleiner-3',
      title: t.hero.slides[2].title,
      subtitle: t.hero.slides[2].subtitle,
      image: '/images/ai-bleiner-snow-1.png',
      description: t.hero.slides[2].description
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            key={currentSlide + '-content'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] rounded mb-6">
              {slides[currentSlide].subtitle}
            </span>
            <h2 className={`text-white mb-6 leading-[1.1] ${currentSlide === 0 ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl'}`}>
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 font-light max-w-xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2 group"
              >
                {t.hero.requestQuote} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                {t.hero.ourServices}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentSlide ? 'w-12 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-10 right-10 hidden md:flex gap-4 z-20">
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const ServiceSection = () => {
  const { t } = useContext(LanguageContext);
  const services = [
    {
      id: 'transportation',
      title: t.services.transportation.title,
      subtitle: t.services.transportation.subtitle,
      color: 'bg-slate-900',
      textColor: 'text-white',
      accentColor: 'bg-slate-700',
      description: t.services.transportation.description,
      features: t.services.transportation.features,
      images: [
        '/images/bleiner-transport-4.jpg',
        '/images/bleiner-transport-5.jpg',
        '/images/bleiner-transport-7.jpg',
        '/images/bleiner-transport-9.jpg',
        '/images/bleiner-transport-10.jpg',
        '/images/bleiner-transport-11.jpg',
      ],
      reversed: false
    },
    {
      id: 'construction',
      title: t.services.construction.title,
      subtitle: t.services.construction.subtitle,
      color: 'bg-[#fdf8f3]',
      textColor: 'text-slate-900',
      accentColor: 'bg-amber-100',
      description: t.services.construction.description,
      features: t.services.construction.features,
      images: [
        '/images/bleiner-construction-1.jpg',
        '/images/bleiner-construction-2.jpeg',
        '/images/bleiner-construction-5.jpg',
        '/images/bleiner-construction-6.jpg',
        '/images/bleiner-construction-10.jpg',
        '/images/bleiner-construction-12.jpg',
      ],
      reversed: true
    },
    {
      id: 'winter',
      title: t.services.winter.title,
      subtitle: t.services.winter.subtitle,
      color: 'bg-sky-50',
      textColor: 'text-slate-900',
      accentColor: 'bg-sky-100',
      description: t.services.winter.description,
      features: t.services.winter.features,
      images: [
        '/images/bleiner-snow-2.jpg',
        '/images/bleiner-snow-3.jpg',
        '/images/bleiner-snow-5.jpg',
      ],
      reversed: false
    }
  ];

  return (
    <section id="services" className="py-0">
      <div className="bg-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.services.expertise}</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">{t.services.ourCoreServices}</h2>
          <p className="text-slate-500 text-lg">
            {t.services.coreDescription}
          </p>
        </div>
      </div>

      {services.map((service, idx) => (
        <div key={service.id} id={service.id} className={`${service.color} py-24 overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 ${service.reversed ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: service.reversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className={`inline-block px-3 py-1 ${service.accentColor} ${service.textColor} text-[10px] font-bold uppercase tracking-widest rounded mb-6`}>
                    {service.subtitle}
                  </span>
                  <h3 className={`text-4xl md:text-5xl mb-8 ${service.textColor}`}>{service.title}</h3>
                  <p className={`text-lg mb-10 opacity-80 leading-relaxed ${service.textColor}`}>
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className={`flex items-center gap-3 text-sm font-medium ${service.textColor}`}>
                        <div className={`p-1 rounded-full ${service.accentColor} flex-shrink-0`}>
                          <ArrowRight size={12} className={service.textColor} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${
                      service.textColor === 'text-white' 
                        ? 'bg-white text-slate-900 hover:bg-slate-100' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {t.services.learnMore} <ArrowRight size={18} />
                  </a>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3"
                >
                  {service.images.map((img, i) => (
                    <div key={i} className={i % 3 === 1 ? 'pt-8' : ''}>
                      <img
                        src={img}
                        alt={`${service.title} ${i + 1}`}
                        className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover hover:shadow-2xl transition-shadow duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Projects = () => {
  const { lang, t } = useContext(LanguageContext);
  const [filter, setFilter] = useState('all');

  const projects = [
    // Transport
    {
      id: 1,
      title: { de: 'Internationaler Gütertransport', en: 'International Freight Transport' },
      description: {
        de: 'Grenzüberschreitender Komplettladungs-Transport quer durch Europa mit Planenauflieger-Lösungen für sichere und flexible Frachtabwicklung. Geeignet für Langstrecken-Logistik im kommerziellen und industriellen Bereich.',
        en: 'Cross-border full-truckload transport across Europe using curtain-side trailer solutions for secure and flexible cargo handling. Suitable for long-distance commercial and industrial logistics.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-17.jpg'],
    },
    {
      id: 2,
      title: { de: 'Schüttguttransport', en: 'Bulk Material Transport' },
      description: {
        de: 'Schwerlast-Kipptransport von Bau- und Zuschlagsstoffen mit Sattelzug und Anhänger. Geeignet für Großvolumen-Transport in Infrastruktur- und Industrieprojekten.',
        en: 'Heavy-duty tipper transport of construction and aggregate materials using articulated truck and trailer. Suitable for large-volume hauling in infrastructure and industrial projects.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-15.jpg'],
    },
    {
      id: 3,
      title: { de: 'Übermaß- / Sondertransport', en: 'Oversized / Special Cargo Transport' },
      description: {
        de: 'Transport von übergroßen und schweren Industriekomponenten mit spezialisierten Tieflader-Anhängern. Geeignet für Energie-, Bau- und Infrastrukturprojekte, die eine sichere Ladungshandhabung unter anspruchsvollen Bedingungen erfordern.',
        en: 'Transport of oversized and heavy industrial components using specialized flatbed trailers. Suitable for energy, construction, and infrastructure projects requiring secure load handling in challenging conditions.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-13.jpg'],
    },
    {
      id: 4,
      title: { de: 'Schwer- & Hochtransport', en: 'Heavy & High Cargo Transport' },
      description: {
        de: 'Spezialisierter Tieflader-Transport für übergroße, schwere und hohe Maschinen. Reduzierte Plattformhöhe gewährleistet die Einhaltung von Höhenbeschränkungen bei maximaler Ladungsstabilität und Sicherheit.',
        en: 'Specialized low-loader transport for oversized, heavy, and high machinery. Reduced platform height ensures compliance with height restrictions while maintaining maximum load stability and safety.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-16.jpg'],
    },
    {
      id: 5,
      title: { de: 'Nächtliche Sondertransport-Einsätze', en: 'Night-Time Special Transport Operations' },
      description: {
        de: 'Durchführung von Übermaß- und Schwertransporten auf Langstrecken während der Nachtstunden zur Sicherstellung der behördlichen Konformität, Reduzierung der Verkehrsbelastung und sicheren Zustellung komplexer Frachteinheiten.',
        en: 'Execution of oversized and heavy long-haul transport during night hours to ensure regulatory compliance, reduced traffic impact, and secure delivery of complex cargo units.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-2.jpg'],
    },
    // Construction
    {
      id: 6,
      title: { de: 'Erdarbeiten & Baustellenvorbereitung', en: 'Earthworks & Site Preparation' },
      description: {
        de: 'Umfassende Aushub-, Planungs- und Bodenverlagerungsarbeiten für die Baustellenentwicklung. Durchführung von Erdarbeiten mit schwerem Gerät für Infrastruktur- und Bauprojekte.',
        en: 'Comprehensive excavation, grading, and soil relocation for construction site development. Execution of groundwork operations using heavy machinery for infrastructure and building projects.',
      },
      category: 'construction',
      images: ['/images/bleiner-construction-3.jpg', '/images/bleiner-construction-4.jpg', '/images/bleiner-construction-10.jpg'],
    },
    {
      id: 7,
      title: { de: 'Grundstücksvorbereitung & Geländerodung', en: 'Initial Ground Preparation & Land Clearing' },
      description: {
        de: 'Frühphasige Standortentwicklung einschließlich Geländeräumung, Bodenabtragung und Grundvorbereitung vor den strukturellen Bauarbeiten.',
        en: 'Early-stage site development including terrain clearing, soil displacement, and base preparation prior to structural construction works.',
      },
      category: 'construction',
      images: ['/images/bleiner-construction-1.jpg'],
    },
    {
      id: 8,
      title: { de: 'Kranarbeiten & Schwerlasthebung', en: 'Crane Operations & Heavy Lifting' },
      description: {
        de: 'Professionelle Mobilkran-Dienstleistungen für präzises Heben, Positionieren und Montieren von modularen und strukturellen Komponenten in industriellen und baulichen Umgebungen.',
        en: 'Professional mobile crane services for precise lifting, positioning, and installation of modular and structural components in industrial and construction environments.',
      },
      category: 'construction',
      images: ['/images/bleiner-construction-5.jpg'],
    },
    {
      id: 9,
      title: { de: 'Industrieboden-Grundvorbereitung', en: 'Industrial Floor Base Preparation' },
      description: {
        de: 'Professionelle Nivellierung, Gradierung und Verdichtung von Tragschichten in Industrieanlagen. Vorbereitung stabiler und belastbarer Fundamente für Betonböden und Schwerlastbetrieb.',
        en: 'Professional leveling, grading, and compaction of sub-base layers inside industrial facilities. Preparation of stable and load-bearing foundations for concrete flooring and heavy-duty operational use.',
      },
      category: 'construction',
      images: ['/images/bleiner-construction-8.jpg', '/images/bleiner-construction-9.jpg', '/images/bleiner-construction-11.jpg'],
    },
    {
      id: 10,
      title: { de: 'Spezialtransport – Transformator für Windkraftanlage', en: 'Special Transport – Transformer for Wind Turbine' },
      description: {
        de: 'Spezialtransport eines Transformators für eine Windkraftanlage. Fachgerechte Logistik und sicherer Transport von Schwerkomponenten für die Energiewirtschaft.',
        en: 'Special transport of a transformer for a wind turbine. Professional logistics and safe transport of heavy components for the energy industry.',
      },
      category: 'transportation',
      images: ['/images/bleiner-transport-12.jpg'],
    },
    // Winter
    {
      id: 11,
      title: { de: 'Winterstraßenwartung & Schneeräumung', en: 'Winter Road Maintenance & Snow Clearing' },
      description: {
        de: 'Professionelle Schneeräumung und Streudienste zur Gewährleistung sicherer und befahrbarer Straßen während der Winterbedingungen. Zuverlässiger 24/7-Winterdienst für kommunale und private Auftraggeber.',
        en: 'Professional snow plowing and de-icing services ensuring safe and passable roads during winter conditions. Reliable 24/7 winterdienst operations for municipal and private sectors.',
      },
      category: 'winter',
      images: ['/images/bleiner-snow-2.jpg'],
      year: '2026',
      location: 'Steyr',
    },
    {
      id: 12,
      title: { de: 'Alpiner Winterdienst & Schwerschneeräumung', en: 'Alpine Winter Service & Heavy Snow Clearing' },
      description: {
        de: 'Spezialisierte Schneeräumungseinsätze auf Berg- und Höhenstraßen. Einsatz von Schwerlast-Räumgeräten zur Aufrechterhaltung der Erreichbarkeit und Sicherheit unter extremen Winterbedingungen.',
        en: 'Specialized snow removal operations on mountain and high-altitude roads. Deployment of heavy-duty plowing equipment to maintain accessibility and safety under extreme winter conditions.',
      },
      category: 'winter',
      images: ['/images/bleiner-snow-3.jpg'],
      year: '2023',
      location: 'Steyr',
    },
    {
      id: 13,
      title: { de: 'Wintergeländeräumung & Oberflächenwartung', en: 'Winter Terrain Clearing & Surface Maintenance' },
      description: {
        de: 'Schneeräumung und Geländenivellierung zur Aufrechterhaltung zugänglicher, stabiler und sicherer Oberflächen in Industriegebieten, Zufahrtsstraßen und offenen Flächen während der Winterbedingungen.',
        en: 'Snow clearing and terrain leveling operations to maintain accessible, stable, and safe surfaces across industrial areas, access roads, and open sites during winter conditions.',
      },
      category: 'winter',
      images: ['/images/bleiner-snow-5.jpg'],
      year: '2022',
      location: 'Steyr',
    },
    // Road Assistance
    {
      id: 14,
      title: { de: 'Straßen-Notfallhilfe & Fahrzeugbergung', en: 'Emergency Road Assistance & Vehicle Recovery' },
      description: {
        de: 'Schnelleinsatz-Unterstützung bei Verkehrsereignissen einschließlich Schwerlastfahrzeug-Stabilisierung, Bergungskoordination und Sicherheitsmanagement vor Ort in Zusammenarbeit mit Rettungsdiensten.',
        en: 'Rapid-response support for traffic incidents including heavy vehicle stabilization, recovery coordination, and on-site safety management in cooperation with emergency services.',
      },
      category: 'roadAssistance',
      images: ['/images/bleiner-others-1.jpeg'],
    },
    {
      id: 15,
      title: { de: '24/7-Betrieb & Allwetter-Einsatz', en: '24/7 Operations & All-Weather Deployment' },
      description: {
        de: 'Rund-um-die-Uhr Transport und Materialhandling, einschließlich Nachtschichten und Schneebedingungen. Sicherstellung der betrieblichen Kontinuität unabhängig von Zeit und Wetter.',
        en: 'Round-the-clock transport and material handling, including night shifts and snow conditions. Ensuring operational continuity regardless of time or weather.',
      },
      category: 'roadAssistance',
      images: ['/images/bleiner-others-2.jpg', '/images/bleiner-others-3.jpg'],
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: t.projects.categories.all },
    { id: 'transportation', label: t.projects.categories.transportation },
    { id: 'construction', label: t.projects.categories.construction },
    { id: 'winter', label: t.projects.categories.winter },
    { id: 'roadAssistance', label: t.projects.categories.roadAssistance },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-8">
          <div className="max-w-2xl">
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.projects.subtitle}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{t.projects.title}</h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            {t.projects.description}
          </p>
        </div>

        <p className="text-lg md:text-xl font-display font-bold text-slate-900 italic mb-12 border-l-4 border-slate-900 pl-4">
          &ldquo;{t.projects.motto}&rdquo;
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat.id
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Main Image */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.images[0]}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {project.year && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                      {project.year} — {project.location}
                    </div>
                  )}
                  {project.images.length > 1 && (
                    <div className="absolute top-4 left-4 bg-slate-900/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-white">
                      {project.images.length} {lang === 'de' ? 'Fotos' : 'Photos'}
                    </div>
                  )}
                </div>

                {/* Additional Images */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-1 px-1 pt-1">
                    {project.images.slice(1).map((img, i) => (
                      <div key={i} className="overflow-hidden aspect-[16/9]">
                        <img
                          src={img}
                          alt={`${project.title[lang]} ${i + 2}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {t.projects.categories[project.category as keyof typeof t.projects.categories]}
                  </span>
                  <h4 className="text-xl font-bold mt-1 mb-3 text-slate-900">{project.title[lang]}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.description[lang]}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Fleet = () => {
  const { lang, t } = useContext(LanguageContext);
  const fleetImages = [
    { id: 1, title: lang === 'de' ? 'LKW-Teleskopkran' : 'Truck-Mounted Telescopic Crane', image: '/images/bleiner-vehicles-1.jpg' },
    { id: 2, title: lang === 'de' ? 'Hydraulischer Mobilkran' : 'Hydraulic Mobile Crane', image: '/images/bleiner-vehicles-2.jpg' },
    { id: 3, title: lang === 'de' ? 'Abrollkipper' : 'Hooklift Container Truck', image: '/images/bleiner-vehicles-3.jpg' },
    { id: 4, title: lang === 'de' ? 'Schneepflug- & Streufahrzeug' : 'Snow Plough & Spreader Truck', image: '/images/bleiner-vehicles-5.jpg' },
    { id: 5, title: lang === 'de' ? 'Schwerlast-Antriebsreifen' : 'Heavy-Duty Drive Tyres', image: '/images/bleiner-vehicles-6.jpg' },
    { id: 6, title: lang === 'de' ? 'Schwerlast-Fuhrpark' : 'Heavy Fleet Line-Up', image: '/images/bleiner-vehicles-7.jpg' },
    { id: 7, title: lang === 'de' ? 'Werkstatt-Fahrgestellservice' : 'Workshop Chassis Service', image: '/images/bleiner-vehicles-8.jpg' },
    { id: 8, title: lang === 'de' ? 'Planierraupe' : 'Tracked Bulldozer', image: '/images/bleiner-vehicles-9.jpg' },
    { id: 9, title: lang === 'de' ? 'Tieflader-Maschinentransport' : 'Low-Loader Machinery Haulage', image: '/images/bleiner-transport-3.jpg' },
    { id: 10, title: lang === 'de' ? 'Bagger-Tieflader-Transport' : 'Excavator Low-Loader Haulage', image: '/images/bleiner-transport-10.jpg' },
    { id: 11, title: lang === 'de' ? 'Tieflader-Baggertransport' : 'Low-Loader Excavator Transport', image: '/images/bleiner-transport-11.jpg' },
    { id: 12, title: lang === 'de' ? 'Pritsche-Sondertransport' : 'Flatbed Special Transport', image: '/images/bleiner-transport-12.jpg' },
    { id: 13, title: lang === 'de' ? 'Kipper-Sattelauflieger' : 'Tipper Semi-Trailer', image: '/images/bleiner-transport-15.jpg' },
    { id: 14, title: lang === 'de' ? 'Planenauflieger' : 'Curtain-Side Semi-Trailer', image: '/images/bleiner-transport-17.jpg' },
  ];

  return (
    <section id="fleet" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.fleet.subtitle}</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">{t.fleet.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.fleet.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetImages.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold tracking-wide">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.about.subtitle}</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-8">{t.about.title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            {t.about.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-emerald-600 mb-8">
            <Check size={20} />
            <span className="font-bold">{t.about.certifiedQuality}</span>
            <span className="text-slate-400 mx-2">·</span>
            <span className="text-sm text-slate-500">{t.about.companyInfo.regions}</span>
          </div>

          <div className="space-y-4 max-w-md mx-auto text-center">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm border-b border-slate-200 pb-2">{t.about.companyInfo.detailsTitle}</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-slate-400">Name:</span> <span className="font-medium">{t.about.companyInfo.name}</span></div>
              <div><span className="text-slate-400">Address:</span> <span className="font-medium">{t.about.companyInfo.address}</span></div>
              <div><span className="text-slate-400">Phone:</span> <span className="font-medium">{t.about.companyInfo.phone}</span></div>
              <div><span className="text-slate-400">VAT:</span> <span className="font-medium">{t.about.companyInfo.vat}</span></div>
              <div><span className="text-slate-400">FN:</span> <span className="font-medium">{t.about.companyInfo.register}</span></div>
            </div>
          </div>

        </div>

        <div className="pt-24 border-t border-slate-200">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">{t.about.licenses.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.about.licenses.items.map((license, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Check size={24} />
                </div>
                <h5 className="text-xl font-bold mb-3 text-slate-900">{license.title}</h5>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {license.description}
                </p>
                <div className="pt-6 border-t border-slate-50 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{license.directorLabel}</p>
                    <p className="text-sm font-medium text-slate-900">{license.director}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{license.gisaLabel}</p>
                    <p className="text-sm font-mono text-slate-600">{license.gisa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.errors.nameRequired;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.errors.emailInvalid;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.errors.messageRequired;
    }
    
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = t.contact.form.errors.phoneInvalid;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="flex-1 p-12 lg:p-20 text-white">
            <h2 className="text-4xl md:text-5xl mb-8">{t.contact.title}</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              {t.contact.subtitle}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t.contact.address}</h5>
                  <p className="text-slate-400">Wolfernstraße 20b, 4400 Steyr, Austria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t.contact.mobile}</h5>
                  <p className="text-slate-400">0664 / 462 17 57</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold mb-1">{t.contact.email}</h5>
                  <p className="text-slate-400">haraldbleinergmbh@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <a 
                href="https://www.facebook.com/harald.bleiner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-sky-400 transition-colors"
              >
                <Facebook size={20} />
                <span className="font-medium">{t.contact.facebook}</span>
              </a>
            </div>
          </div>

          <div className="flex-1 bg-white p-12 lg:p-20">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.form.successTitle}</h3>
                <p className="text-slate-500">{t.contact.form.successMessage}</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.placeholders.name}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-slate-900 focus:ring-0 transition-colors outline-none`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.placeholders.email}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-slate-900 focus:ring-0 transition-colors outline-none`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.contact.form.phone}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholders.phone}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:border-slate-900 focus:ring-0 transition-colors outline-none`}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.contact.form.message}</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholders.message}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:border-slate-900 focus:ring-0 transition-colors outline-none resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '...' : <>{t.contact.form.submit} <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/5 pb-12 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-white text-slate-950 p-1 rounded">
              <Truck size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-tighter">
                HARALD BLEINER
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
                GmbH
              </span>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-white/60 font-medium">
            <a href="#home" className="hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#fleet" className="hover:text-white transition-colors">{t.nav.fleet}</a>
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Harald Bleiner GmbH. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.imprint}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('de');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="relative">
        <h1 className="sr-only">{translations[lang].seoH1}</h1>
        <Navbar />
        <Hero />
        <ServiceSection />
        <Projects />
        <Fleet />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
