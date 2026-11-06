import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Movam Tracking Platform",
    description: "This is a B2B SaaS product for Logistics which was created with the Angular framework. It is a tracking platform that allows users to track their vehicles in real-time. The application contains a dashboard that shows the location of the vehicle, the speed of the vehicle, and the distance traveled. The application also has a feature that allows users to set up geofencing alerts and receive notifications when the vehicle enters or exits a specific area. The application was built to show my skills in NgRx, Rx.js, routing, dependency injection, data-binding, websockets, reactive forms, HttpClient for API calls and angular-material.",
    image: "/projects/Movam_Tracking.png",
    tags: ["Angular", "Typescript", "NgRx", "NodeJS", "Socket.io"],
    link: "https://movam.ng/auth/users",
    github: "#",
  },
  {
    title: "Rosabon - Treasury Portal",
    description: "The User interface of this application was created with React.js. This is a fintech application that was created with the aim of helping users create a savings plan that suit their needs. Users would be able to receive interest upfront, quaterly, bianually or at maturity. The application comprises of a few features such as a KYC module, profile verification module, plan creation module, plan action module, a wallet module, feedback module, and FAQ module",
    image: "/projects/Rosabon_login.JPG",
    tags: ["React", "Paystack", "PostgreSQL", "Tailwind", "NodeJS"],
    link: "#",
    github: "https://github.com/proxycrome/rosabon-web-treasury",
  },
  {
    title: "Gym registration application",
    description: "The User interface of this application was created using Angular. It contains a registration page which automatically calculates the user's Body-Mass Index (BMI). It also contains a page with a table where all the users entries can be viewed, edited or deleted. The application was built to show my skills in routing, dependency injection, data-binding, reactive forms, HttpClient for API calls and angular-material",
    image: "/projects/Gym-app-screenshot.JPG",
    tags: ["Angular", "Typescript", "RxJS", "NgRx"],
    link: "https://gym-registration-entry.netlify.app/",
    github: "https://github.com/proxycrome/gym-registration-app-angular",
  },
  {
    title: "Fairship - Property Manager Application",
    description: "This application was created with React.js. It contains numerous features such as a dashboard, a property creation module for both single and multi unit property, tenants module, rent application module, agent module for landlords, Buy application module, lease termination module and Inspection Module",
    image: "/projects/fairship_Login.JPG",
    tags: ["React", "Javascript", "Redux-saga", "NodeJS", "MongoDB", "Redis"],
    link: "#",
    github: "https://github.com/proxycrome/fairship-web-app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};