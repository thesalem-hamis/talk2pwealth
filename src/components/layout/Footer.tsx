import mainLogo from "../../assets/mainlogo.png";

export default function Footer() {
  const links = [
    { name: "about", href: "#" },
    { name: "membership", href: "#" },
    { name: "contact", href: "#" },
    { name: "youtube", href: "#" },
    { name: "instagram", href: "#" },
    { name: "pinterest", href: "#" },
    { name: "linkedin", href: "#" },
    { name: "orders", href: "#" },
    { name: "policy", href: "#" },
    { name: "blog", href: "#" },
    { name: "size chart", href: "#" },
  ];

  return (
    <footer 
      className="relative w-full min-h-screen py-20 px-6 md:px-12 flex flex-col justify-between bg-black/90 backdrop-blur-md border-t border-white/10"
    >
      {/* Navigation Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 w-full max-w-4xl mx-auto">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-white text-lg md:text-xl font-normal lowercase hover:opacity-70 transition-opacity"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Massive, Faded, and Centralized Logo Section */}
      <div className="mt-20 md:mt-0 w-full flex justify-center items-end">
        <img 
          src={mainLogo} 
          alt="Talk2Pwealth Logo" 
          className="w-full max-w-7xl h-auto object-contain brightness-0 invert opacity-40" 
        />
      </div>
    </footer>
  );
}