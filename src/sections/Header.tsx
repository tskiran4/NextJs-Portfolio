import { useCallback } from 'react';

export const Header = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="flex justify-center item-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a onClick={() => scrollToSection('home')} className="nav-item cursor-pointer">Home</a>
        <a onClick={() => scrollToSection('projects')} className="nav-item cursor-pointer">Projects</a>
        <a onClick={() => scrollToSection('about')} className="nav-item cursor-pointer">About</a>
        <a href="mailto:tskiran4@gmail.com" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  );
};