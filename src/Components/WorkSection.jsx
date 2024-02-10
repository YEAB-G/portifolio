// React imports
import { Component } from "react";

// Framer Motion imports
import { AnimatePresence, motion } from "framer-motion";

// Data imports
import data from "../data/data.json";
import { IMAGES } from "../data/images";

export default class WorkSection extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      background: ["bg-zinc-600", "bg-zinc-900", "bg-yellow-400"],
      color: ["text-zinc-50", "text-zinc-50", "text-zinc-900"],
      showMore: false,
    };
  }
  componentDidMount() {
    this.setState({ projects: data.projects });
  }
  render() {
    const titleVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0.2,
        },
      },
    };
    const cardVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0, transition: { duration: 1 } },
      hover: {
        scale: 1.05,
      },
    };
    const filterProjects = this.state.projects.filter(
      (project) => project.top === true
    );

    let projects = filterProjects;
    !this.state.showMore
      ? (projects = filterProjects)
      : (projects = this.state.projects);
    return (
      <section
        id="works"
        className="h-fit md:min-h-screen font-body py-5 px-5 md:px-10 lg:20 xl:px-40"
      >
        <motion.title
          className="flex flex-col justify-center select-none"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            Latest
            <span className="text-yellow-400 uppercase"> Works</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wide uppercase z-0 ">
            portfolio
          </span>
        </motion.title>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.a
                key={project.id}
                className={
                  "w-full h-30 lg:h-64 rounded p-3 " +
                  this.state.background[project.id % 3]
                }
                variants={cardVariants}
                exit="hidden"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.8 }}
                href={project.url}
                target="_blank"
              >
                <div className="pointer-events-none flex flex-col justify-between h-full gap-5 overflow-hidden">
                  <div className="flex justify-between pointer-events-none">
                    <p
                      className={
                        "capitalize text-md pointer-events-none " +
                        this.state.color[project.id % 3]
                      }
                    >
                      {project.name}
                    </p>
                    <div className="flex justify-center align-center gap-3 capitalize pointer-events-none">
                      {project.languages.map((lang) => (
                        <p
                          key={lang}
                          className="text-zinc-400 bg-zinc-700 w-fit h-fit text-sm rounded p-1 pointer-events-none"
                        >
                          {lang}
                        </p>
                      ))}
                    </div>
                  </div>
                  {IMAGES[project.id] && (
                    <img
                      key={IMAGES[project.id].id}
                      src={IMAGES[project.id].name}
                      alt={project.name}
                      className="scale-110"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </section>
        <motion.div
          className="flex justify-center mt-5 mb-10 "
          variants={cardVariants}
          whileHover="hover"
          onClick={() => this.setState({ showMore: !this.state.showMore })}
        >
          <button className="uppercase underline text-yellow-400 hover:text-zinc-400 active:text-zinc-400 transition ease-out duration-500">
            {this.state.showMore ? "View Less" : " See All Projects"}
          </button>
        </motion.div>
      </section>
    );
  }
}
