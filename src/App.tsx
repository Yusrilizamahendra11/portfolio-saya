import profilePicture from './assets/yusril-iza-mahendra1.jpg';
import irrigationImage from './assets/yim.jpg';
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Eye, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap,
  Briefcase,
  Award,
  Camera,
  Fish,
  Users,
  Send,
  ChevronDown,
  Target,
  BarChart3,
  Settings,
  Map,
  Compass
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'portfolio', 'hobbies', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-white">
             Yusril Iza Mahendra
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-amber-500 ${
                    activeSection === item.id ? 'text-amber-500' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-amber-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item.id ? 'text-amber-500 bg-slate-700' : 'text-white hover:text-amber-500 hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/5 rounded-full blur-lg animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-amber-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-600 flex items-center justify-center">
                  <div className="relative w-60 h-60 rounded-full overflow-hidden bg-gray-700">
                  <img src={profilePicture} alt="Foto Profil Yusril" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center animate-bounce">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                YUSRIL IZA MAHENDRA
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Civil Engineering Graduate &<br />
                <span className="text-amber-500">Project Supervision Consultant</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
               href="/CV-YUSRIL-IZA-MAHENDRA.pdf" 
               download
               className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center active:scale-95"
               >
               <Download size={20} />
               Download CV
              </a>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
                >
                  <Eye size={20} />
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Extensive experience in project supervision and irrigation network development, 
                with expertise in field coordination and preparing detailed, accurate technical surveys.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Target className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Project Focus</h3>
                  <p className="text-slate-600">Specialized in irrigation systems and infrastructure development</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <BarChart3 className="w-12 h-12 text-amber-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
                  <p className="text-slate-600">Expert in field data collection and technical analysis</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Based in Lombok Tengah, NTB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5" />
                    <span>Civil Engineering Graduate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5" />
                    <span>4+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-blue-500"></div>
              
              <div className="relative pl-20 pb-12">
                <div className="absolute left-6 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-slate-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <GraduationCap className="w-8 h-8 text-amber-500" />
                    <div>
                      <h3 className="text-2xl font-bold">Bachelor of Civil Engineering</h3>
                      <p className="text-slate-400">Universitas Mataram</p>
                    </div>
                  </div>
                  <p className="text-blue-400 font-semibold mb-4">2018 – 2025</p>
                  <p className="text-slate-300 leading-relaxed">
                    Specialized in civil engineering software, irrigation network design, 
                    and project management. Gained comprehensive knowledge in structural 
                    analysis, hydraulic systems, and construction management.
                  </p>
                  
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-slate-700 px-4 py-2 rounded-lg text-center">
                      <Settings className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm">Engineering Software</p>
                    </div>
                    <div className="bg-slate-700 px-4 py-2 rounded-lg text-center">
                      <Map className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm">Network Design</p>
                    </div>
                    <div className="bg-slate-700 px-4 py-2 rounded-lg text-center">
                      <Briefcase className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm">Project Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: "2025",
                title: "Non-Swamp Land Optimization Surveyor",
                company: "LPPM Universitas Mataram",
                icon: <Compass className="w-8 h-8" />,
                description: "Conducted comprehensive land surveys for optimization projects"
              },
              {
                year: "2023",
                title: "Geospatial Surveyor",
                company: "LPPM Universitas Mataram",
                icon: <Map className="w-8 h-8" />,
                description: "Specialized in geospatial data collection and analysis"
              },
              {
                year: "2022",
                title: "Surveyor & Planning Consultant",
                company: "LPPM Universitas Mataram",
                icon: <Target className="w-8 h-8" />,
                description: "Provided surveying and planning consultation services"
              },
              {
                year: "2021",
                title: "Project Consultant",
                company: "CV Nataloka Konsultan",
                icon: <Briefcase className="w-8 h-8" />,
                description: "Managed project supervision and technical consultancy"
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-blue-600 font-semibold mb-3">{exp.company}</p>
                    <p className="text-slate-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: "Project Supervision", level: 95 },
              { skill: "Irrigation Network Investigation", level: 90 },
              { skill: "Irrigation System Design", level: 88 },
              { skill: "Field Data Analysis", level: 92 },
              { skill: "Team Coordination", level: 87 },
              { skill: "Field Survey", level: 94 },
              { skill: "Graphic Design", level: 85 }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">
                    {item.skill}
                  </h3>
                  <span className="text-amber-500 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Irrigation Network Development",
                description: "Comprehensive irrigation system design and implementation",
                image: irrigationImage,
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Land Survey & Mapping",
                description: "Detailed topographical surveys and land mapping projects",
                image: "https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Infrastructure Planning",
                description: "Strategic infrastructure development and planning",
                image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Field Data Collection",
                description: "Comprehensive field surveys and data analysis",
                image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Project Supervision",
                description: "On-site project management and quality control",
                image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Technical Consulting",
                description: "Expert technical consultation and problem-solving",
                image: "https://images.pexels.com/photos/1108717/pexels-photo-1108717.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Brand Identity Design",
                description: "Creative logo and brand identity development",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Digital Illustrations",
                description: "Custom digital artwork and technical illustrations",
                image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              },
              {
                title: "Marketing Materials",
                description: "Professional brochures, flyers, and promotional designs",
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
                link: "[INSERT YOUR LINK HERE]"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                onClick={() => window.open(project.link, '_blank')}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-3">{project.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <span>View Project</span>
                    <Eye className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Hobbies & Interests</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                hobby: "Futsal",
                icon: <Users className="w-16 h-16" />,
                description: "Team sports enthusiast with regular practice sessions"
              },
              {
                hobby: "Fishing",
                icon: <Fish className="w-16 h-16" />,
                description: "Relaxing weekend fishing trips and nature exploration"
              },
              {
                hobby: "Photography",
                icon: <Camera className="w-16 h-16" />,
                description: "Capturing landscapes and documenting project sites"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-blue-500 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.hobby}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-slate-600">yusrilizamahendra11@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-slate-600">085162747301</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-amber-500 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-slate-600">Lombok Tengah, NTB, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-amber-500 hover:from-blue-600 hover:to-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2025 Yusril Iza Mahendra. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Civil Engineering Graduate & Project Supervision Consultant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;