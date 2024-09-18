import darkSaasLandingPage from "@/assets/images/page1.png";
import lightSaasLandingPage from "@/assets/images/page2.png";
import aiStartupLandingPage from "@/assets/images/page3.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArroUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Shopify Store",
    year: "2022",
    title: "Etoile La Boutique",
    results: [
      { title: "Optimized store performance and reduced page load time by 35%" },
      { title: "Improved mobile responsiveness, enhancing user experience by 40%" },
      { title: "Increased site reliability through enhanced UI design" },
    ],
    link: "https://etoilelaboutique.com/",
    image: darkSaasLandingPage,
  },
  {
    company: "Shopify Store",
    year: "2021",
    title: "Gush Beauty",
    results: [
      { title: "Implemented custom Shopify plugins, improving functionality by 30%" },
    { title: "Enhanced UI/UX, resulting in a 25% increase in user engagement" },
    { title: "Streamlined navigation for a smoother browsing experience" },
    ],
    link: "https://gushbeauty.com/",
    image: lightSaasLandingPage,
  },
  {
    company: "ReactJS",
    year: "2024",
    title: "Handran BCI",
    results: [
      { title: "Developed component-based architecture, reducing code complexity by 40%" },
      { title: "Enhanced site speed and efficiency by 50% through performance optimization" },
      { title: "Improved accessibility and responsiveness for diverse user devices" },
    ],
    link: "https://handran.in/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Products
        </h2>
        <p className="md:text-lg lg:text-xl text-center text-white/60 max-w-md mx-auto mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>

        <div className="flex flex-col md:mt-20 mt-10 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top:`calc( 64px + ${projectIndex * 40}px`,
              }}
             >
           

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 
                    inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50"  >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 -mb-4">
                      <span>Visit Live Site</span>
                      <ArroUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 rounded-2xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
