import { useState, useEffect, useRef } from "react";

const menuItems = [
  { href: "#home", label: "Beranda" },
  { href: "#about", label: "Tentang Saya" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Kontak" },
];

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Penanda area hamburger + menu
  const menuRef = useRef(null);

  // 1. Navbar fixed saat di-scroll
  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Tutup menu saat klik di luar area menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        isFixed ? "navbar-fixed" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-2xl text-primary block py-6">
              Bayu
            </a>
          </div>

          <div ref={menuRef} className="flex items-center px-4">
            <button
              id="hamburger"
              type="button"
              onClick={toggleMenu}
              aria-label="Buka menu navigasi"
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              className={`block absolute right-4 lg:hidden cursor-pointer ${
                isMenuOpen ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-200 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-200 ease-in-out"></span>
              <span className="hamburger-line transition duration-200 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                {menuItems.map((item) => (
                  <li key={item.href} className="group">
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="text-base text-slate-800 py-2 mx-8 flex group-hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;