export default function Navbar() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col space-y-4 text-right">
          <a 
            href="#intro" 
            onClick={(e) => scrollToSection(e, 'intro')}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:text-2xl cursor-pointer"
          >
            Justin
          </a>

          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:text-2xl cursor-pointer"
          >
            Projects
          </a>

          <a 
            href="#hobbies" 
            onClick={(e) => scrollToSection(e, 'hobbies')}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:text-2xl cursor-pointer"
          >
            Hobbies
          </a>

          <a 
            href="#recognitions" 
            onClick={(e) => scrollToSection(e, 'recognitions')}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:text-2xl cursor-pointer"
          >
            Recognitions
          </a>

          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-gray-700 hover:text-gray-900 transition-all duration-200 hover:text-2xl cursor-pointer"
          >
            Contact
          </a>
        </div>
    )
}