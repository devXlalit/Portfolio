import { RiGithubLine } from "@remixicon/react";
import { MdArrowOutward } from "react-icons/md";
import "animate.css";

import SEO from "../SEO.jsx";
import BentoCard from "../BentoCard.jsx";
import TextChanger from "../../TextChanger";
import Tooltipx from "../Tooltipx";
import GitHubHeatmap from "../GitHubHeatmap";
import ExperienceBox from "../ExperienceBox";
import { useContact } from "../../context/ContactContext";
import {
  tools,
  socials,
  stats,
  experienceData,
  projects,
  upcomingProject,
} from "../../data/portfolio";

const AVATAR_URL =
  "https://pbs.twimg.com/profile_images/2008509739911815168/YeO76mcY_400x400.jpg";

// Bento spans that give the project grid a varied, intentional rhythm.
const PROJECT_SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

const Home = () => {
  const { openContact } = useContact();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="font-extrabold">
      <SEO
        title={
          "Lalit Pagare | devxlalit | Hire Freelance Full Stack Developer & DevOps Engineer"
        }
        description={
          "Freelance Full Stack Developer & DevOps Engineer. Building enterprise-grade web applications with CI/CD, Docker, & Kubernetes. 3+ years of expertise. Hire a remote full stack devops specialist for projects. Expert in modern web apps, automation, and reliable cloud deployment (AWS/Azure). 3 years experience."
        }
        keywords={
          "freelance full stack devops enginee, full stack developer devops consultant, hire full stack devops freelancer, remote full stack devops specialist, corporate full stack development devops, enterprise full stack and devops services, full-stack CI/CD implementation"
        }
      />

      {/* ───────────────────────── HOME / IDENTITY ───────────────────────── */}
      <section id="home" className="scroll-mt-28">
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
          {/* Identity */}
          <BentoCard
            dark
            eyebrow="FULL STACK · DEVOPS"
            index={0}
            interactive={false}
            className="lg:col-span-8 lg:row-span-2"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#08D9D6]/15 px-3 py-1 text-xs md:text-sm font-[gilroy-medium] text-[#08D9D6]">
                  <span className="h-2 w-2 rounded-full bg-[#08D9D6] animate-pulse" />
                  Available for freelance
                </span>
                <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02]">
                  I&apos;m <span className="text-[#08D9D6]">Lalit,</span>
                </h1>
                <h2 className="mt-1 flex flex-col text-3xl md:text-6xl leading-tight">
                  {/* Reserve one line and never wrap so the cycling word
                      (FULL STACK / MERN STACK / …) can't resize the hero. */}
                  <span className="block min-h-[1.25em] whitespace-nowrap">
                    <TextChanger />
                  </span>
                  <span className="text-[#FF2E63]">DEVELOPER</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm md:text-lg font-[gilroy-medium] text-[#EAEAEA]/70 leading-relaxed">
                  I build scalable, SEO-friendly web apps and reliable cloud
                  deployments — owning the stack from database design to CI/CD.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => scrollTo("projects")}
                    className="flex items-center gap-1 rounded-full bg-[#08D9D6] px-6 py-3 text-sm text-[#252A34] transition-transform duration-300 hover:scale-105"
                  >
                    Explore my work
                    <MdArrowOutward size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => openContact()}
                    className="rounded-full border border-[#EAEAEA]/25 px-6 py-3 text-sm text-[#EAEAEA] transition-colors duration-300 hover:bg-[#EAEAEA] hover:text-[#252A34]"
                  >
                    Let&apos;s talk
                  </button>
                </div>
              </div>

              <img
                src={AVATAR_URL}
                referrerPolicy="no-referrer"
                alt="Lalit Pagare"
                className="h-24 w-24 shrink-0 rounded-2xl object-cover shadow-[0px_8px_30px_-12px_rgba(0,0,0,0.5)] ring-2 ring-[#08D9D6]/40 md:h-28 md:w-28"
              />
            </div>
          </BentoCard>

          {/* Social / connect */}
          <BentoCard eyebrow="Connect" index={1} className="lg:col-span-4">
            <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-3">
              {socials.map(({ Icon, title, href, hover }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-2xl border border-content/[0.07] px-3 py-3 text-sm font-[gilroy-medium] text-content/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-content/15"
                >
                  <Icon
                    size={26}
                    className={`text-content transition-colors duration-200 ${hover}`}
                  />
                  {title}
                </a>
              ))}
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard eyebrow="By the numbers" index={2} className="lg:col-span-4">
            <div className="grid flex-1 content-center grid-cols-3 gap-2">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-3xl md:text-4xl text-[#08D9D6] leading-none">
                    {value}
                  </span>
                  <span className="mt-2 text-xs md:text-sm font-[gilroy-medium] text-content/65 leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* GitHub activity */}
          <BentoCard
            eyebrow="GitHub activity"
            index={3}
            className="lg:col-span-12"
          >
            <p className="mb-4 text-sm md:text-base font-[gilroy-medium] text-content/65">
              A year of contributions on{" "}
              <a
                href="https://github.com/devXlalit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-content underline decoration-[#08D9D6] underline-offset-2"
              >
                @devXlalit
              </a>
            </p>
            <GitHubHeatmap />
          </BentoCard>
        </div>
      </section>

      {/* ───────────────────────────── SKILLS ────────────────────────────── */}
      <section id="skills" className="mt-4 scroll-mt-28 md:mt-5">
        <BentoCard eyebrow="Stack" index={0} interactive={false}>
          <h2 className="text-2xl md:text-4xl leading-none">
            Tools &amp; Technologies
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-7 md:justify-start md:gap-9">
            {tools.map(({ Icon, color, title }, i) => (
              <Tooltipx
                key={i}
                icon={<Icon size={52} color={color} />}
                title={title}
              />
            ))}
          </div>
        </BentoCard>
      </section>

      {/* ─────────────────────────── EXPERIENCE ──────────────────────────── */}
      <section id="work" className="mt-4 scroll-mt-28 md:mt-5">
        <BentoCard eyebrow="Experience" index={0} interactive={false}>
          <h2 className="text-2xl md:text-4xl leading-none">
            Corporate experience
          </h2>
          <div className="mt-8">
            {experienceData.map((item, index) => (
              <ExperienceBox
                key={index}
                JobTitle={item.JobTitle}
                CompanyName={item.CompanyName}
                WebsiteLink={item.WebsiteLink}
                Date={item.Date}
                Summary={item.Summary}
                ListItems={item.ListItems}
                Tech={item.Tech}
                isLast={index === experienceData.length - 1}
                index={index}
              />
            ))}
          </div>
        </BentoCard>
      </section>

      {/* ──────────────────────────── PROJECTS ───────────────────────────── */}
      <section id="projects" className="mt-4 scroll-mt-28 md:mt-5">
        <div className="mb-4 md:mb-5">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-[gilroy-medium] uppercase tracking-[0.18em] text-[#08D9D6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#08D9D6]" />
            Selected work
          </span>
          <h2 className="mt-2 text-2xl md:text-4xl leading-none">
            Projects showcase
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              className={PROJECT_SPANS[index] || "lg:col-span-4"}
            />
          ))}

          {/* Upcoming — the one place pink is spent */}
          <BentoCard
            eyebrow="Upcoming"
            accent="pink"
            index={projects.length}
            className="lg:col-span-12"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl md:text-2xl leading-tight">
                  Something new is in the works
                </h3>
                <p className="mt-2 max-w-lg text-sm md:text-base font-[gilroy-medium] text-content/65 leading-relaxed">
                  A fresh project is currently in development. Check back soon —
                  or reach out if you&apos;d like to build it with me.
                </p>
              </div>
              <img
                src={upcomingProject}
                alt="Upcoming project preview"
                loading="lazy"
                className="h-28 w-full rounded-2xl object-cover md:h-32 md:w-72"
              />
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ───────────────────────────── CONTACT ───────────────────────────── */}
      <section id="contact" className="mt-4 scroll-mt-28 md:mt-5">
        <BentoCard dark eyebrow="Contact" index={0} interactive={false}>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl leading-tight">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-xl text-sm md:text-lg font-[gilroy-medium] text-[#EAEAEA]/70 leading-relaxed">
                I&apos;m open to freelance and full-time work. Tell me what
                you&apos;re building and let&apos;s make it happen.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openContact()}
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#08D9D6] px-8 py-4 text-sm text-[#252A34] transition-transform duration-300 hover:scale-105"
            >
              Start a conversation
              <MdArrowOutward size={18} />
            </button>
          </div>
        </BentoCard>
      </section>
    </main>
  );
};

const ProjectCard = ({ project, index, className }) => (
  <BentoCard index={index} className={className}>
    <div className="overflow-hidden rounded-2xl">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-44 w-full object-cover transition-transform duration-500 md:h-52 md:group-hover:scale-105"
      />
    </div>

    <h3 className="mt-5 text-lg md:text-xl font-[gilroy-regular] leading-snug">
      {project.title}
    </h3>
    <p className="mt-2 text-sm md:text-base font-[gilroy-medium] leading-relaxed text-content/65">
      {project.desc}
    </p>

    {project.tags && (
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-content/10 bg-content/[0.03] px-3 py-1 text-xs font-[gilroy-medium] text-content/70"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    <div className="mt-5 flex flex-wrap gap-3">
      {project.glink && (
        <a href={project.glink} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-1 rounded-full border border-content/15 px-4 py-2 text-sm transition-colors duration-300 hover:bg-content hover:text-page">
            <RiGithubLine size={18} />
            GitHub
          </button>
        </a>
      )}
      <a href={project.wlink} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-1 rounded-full bg-content px-5 py-2 text-sm text-page transition-all duration-300 hover:scale-105 hover:bg-[#08D9D6] hover:text-[#252A34]">
          Visit
          <MdArrowOutward size={18} />
        </button>
      </a>
    </div>
  </BentoCard>
);

export default Home;
