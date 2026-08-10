import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Info, Menu, X } from 'lucide-react';
import { projects } from '../data/projects';

const EMAIL = 'domofeel@gmail.com';
const EMAIL_COPIED_EVENT = 'portfolio:email-copied';

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = EMAIL;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  window.dispatchEvent(new Event(EMAIL_COPIED_EVENT));
};

const EmailCopyButton = ({ className = '' }: { className?: string }) => (
  <button
    type="button"
    onClick={copyEmail}
    className={className}
    title="Copy email"
    aria-label={`Copy ${EMAIL}`}
  >
    {EMAIL}
  </button>
);

const EmailCopyToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showToast = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsVisible(true);
      timeoutRef.current = setTimeout(() => setIsVisible(false), 6_000);
    };

    window.addEventListener(EMAIL_COPIED_EVENT, showToast);
    return () => {
      window.removeEventListener(EMAIL_COPIED_EVENT, showToast);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const closeToast = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-[30px] right-[30px] z-[100] flex min-h-[58px] w-[min(310px,calc(100vw-60px))] items-center gap-3 rounded-[14px] border border-white/15 bg-[#24252c] px-5 py-3 text-[16px] font-medium text-white shadow-2xl"
        >
          <Info size={22} className="shrink-0 text-[#60a5fa]" aria-hidden="true" />
          <span className="flex-1">Email is copied</span>
          <button
            type="button"
            onClick={closeToast}
            className="-mr-1 p-1 text-white/55 transition-colors hover:text-white"
            aria-label="Close notification"
          >
            <X size={21} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const projectMenuLabels: Record<string, string> = {
  'weather-integration': 'Weather integration',
  notifications: 'Notifications',
  'wall-tablet': 'Wall tablet',
  'smart-scenarios': 'Smart scenarious',
};

export const Navbar = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAboutActive = location.pathname === '/about';
  const isPortfolioActive = location.pathname === '/' || location.pathname.startsWith('/case');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 pointer-events-none border-b ${
        isScrolled 
          ? `${isAboutActive ? 'bg-[#181818]/90' : 'bg-brand-bg/90'} backdrop-blur-md border-white/10 py-4` 
          : 'bg-transparent border-transparent py-8'
      }`}>
        <div className="mx-auto flex w-full max-w-[2048px] items-center justify-between px-[clamp(24px,6.25vw,128px)] pointer-events-auto">
          <div className="flex items-center gap-16 pointer-events-auto">
            <Link to="/" className="group text-[28px] font-normal tracking-tight leading-none text-white transition-opacity">
              Kate<span className="text-[#a1a1a1] font-light">Mel</span>
            </Link>

            <div className="hidden lg:flex items-baseline gap-[26px] text-[22px] font-light tracking-tight mt-1">
              <div 
                className="relative group"
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                <Link 
                  to="/"
                  className={`transition-colors cursor-pointer flex items-center gap-1 group/btn ${isPortfolioOpen ? 'text-brand-muted' : (isPortfolioActive ? 'text-[#A3E635]' : 'hover:text-brand-accent')}`}
                >
                  Portfolio
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                <AnimatePresence>
                  {isPortfolioOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full w-max pt-4"
                  >
                      <div className="flex w-max flex-col gap-3 rounded-2xl border border-white/10 bg-brand-bg p-6 shadow-2xl">
                        {projects.map(project => (
                          <Link 
                            key={project.id} 
                            to={`/case/${project.id}`} 
                            className="text-xl font-light tracking-tight text-white/60 hover:text-white hover:translate-x-1 transition-all whitespace-nowrap"
                          >
                            {projectMenuLabels[project.id] ?? project.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/about" 
                className={`transition-colors ${isAboutActive ? 'text-[#A3E635]' : 'hover:text-brand-accent'}`}
              >
                About me
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7 text-base pointer-events-auto shrink-0">
            <EmailCopyButton className="cursor-pointer transition-colors hover:text-brand-accent" />
            <a href="https://t.me/domofeel" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">
              Telegram
            </a>
            <a
              href="./CV_Ekaterina_Melnikova.pdf"
              download="CV_Ekaterina_Melnikova.pdf"
              className="min-w-[116px] px-6 py-2.5 bg-transparent border border-[#A3E635] text-[#A3E635] font-bold flex items-center justify-center gap-2 hover:bg-[#A3E635]/10 hover:scale-105 transition-all cursor-pointer uppercase group/cv"
              style={{
                borderRadius: "var(--case-button-radius, 0px)",
                fontSize: "var(--case-button-font-size, 12px)",
                lineHeight: "var(--case-button-line-height, 1.2)",
                letterSpacing: "var(--case-button-letter-spacing, 0.18em)",
              }}
            >
              CV
            </a>
          </div>

          <button 
            className="lg:hidden p-2 -mr-2 text-white hover:text-brand-accent transition-colors pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-brand-bg/95 backdrop-blur-xl lg:hidden flex flex-col pt-32 px-6 pb-6 pointer-events-auto overflow-y-auto"
          >
            <div className="flex flex-col gap-8 text-3xl font-light tracking-tight mt-4">
              <div className="flex flex-col gap-6">
                <Link 
                  to="/"
                  className={`transition-colors ${isPortfolioActive ? 'text-[#A3E635]' : 'text-white'}`}
                >
                  Portfolio
                </Link>
                <div className="flex flex-col gap-4 pl-6 border-l border-white/10">
                  {projects.map(project => (
                    <Link 
                      key={project.id} 
                      to={`/case/${project.id}`} 
                      className={`text-xl transition-colors ${location.pathname === '/case/' + project.id ? 'text-[#A3E635]' : 'text-white/60 hover:text-white'}`}
                    >
                      {projectMenuLabels[project.id] ?? project.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                to="/about"
                className={`transition-colors ${isAboutActive ? 'text-[#A3E635]' : 'text-white'}`}
              >
                About me
              </Link>
            </div>

            <div className="mt-auto pt-12 flex flex-col gap-6 border-t border-white/10">
              <div className="flex flex-col gap-4 text-brand-muted text-lg">
                <EmailCopyButton className="w-fit cursor-pointer text-left text-white transition-colors hover:text-brand-accent" />
                <a href="https://t.me/domofeel" target="_blank" rel="noopener noreferrer" className="w-fit text-white transition-colors hover:text-brand-accent">
                  Telegram
                </a>
              </div>
              <a
                href="./CV_Ekaterina_Melnikova.pdf"
                download="CV_Ekaterina_Melnikova.pdf"
                className="px-6 py-4 bg-transparent border border-[#A3E635] text-[#A3E635] font-bold flex items-center justify-center gap-2 hover:bg-[#A3E635]/10 hover:scale-105 transition-all uppercase mt-4 w-full"
                style={{
                  borderRadius: "var(--case-button-radius, 0px)",
                  fontSize: "var(--case-button-font-size, 12px)",
                  lineHeight: "var(--case-button-line-height, 1.2)",
                  letterSpacing: "var(--case-button-letter-spacing, 0.18em)",
                }}
              >
                CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <EmailCopyToast />
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t border-white/5 bg-[#181818] px-[clamp(24px,6.25vw,128px)] py-20">
      <h2 className="title-text text-center mb-12">Let's connect.</h2>
      <div className="flex gap-12 text-lg">
        <EmailCopyButton className="cursor-pointer border-b border-transparent transition-colors hover:border-brand-accent hover:text-brand-accent" />
        <a href="https://t.me/domofeel" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent">Telegram</a>
        <a href="./CV_Ekaterina_Melnikova.pdf" download="CV_Ekaterina_Melnikova.pdf" className="hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent">CV</a>
      </div>
      <p className="mt-20 text-brand-muted text-sm">© 2026 Kate Mel</p>
    </footer>
  );
};
