// React imports
import React, { Component } from "react";

// Third-party library imports
import { Download, ArchiveFill, BookHalf } from "react-bootstrap-icons";
import { motion } from "framer-motion";

// Data import
import data from "../data/data.json";

export default class AboutSection extends Component {
  currentYear = new Date().getFullYear();
  constructor() {
    super();
    this.state = {
      personalInfo: [],
      counters: [],
      skills: [],
      experience: [],
      education: [],
    };
  }
  componentDidMount() {
    this.setState({
      personalInfo: data["personal-infos"],
      counters: data.counters,
      skills: data.skills,
      experience: data.experience,
      education: data.education,
    });
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
    const containerVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
    };
    const childVariants = {
      hidden: {
        opacity: 0,
        x: -250,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          mass: 0.4,
          damping: 8,
        },
      },
    };
    const buttonVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#facc15",
        color: "#030712",
      },
    };
    const cardVariants = {
      visible: {
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      },
    };

    // const value = 216;
    const value = 180;
    return (
      <motion.section
        id="about"
        className="h-fit font-body py-5 px-5 md:px-10 lg:px-20 xl:px-40"
      >
        <motion.title
          className="flex flex-col justify-center select-none"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            About
            <span className="text-yellow-400 uppercase"> me</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            Resume
          </span>
        </motion.title>
        {/* Personal Info Section  */}
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-10 xl:gap-15 my-16">
          {/* Information */}
          <section className="flex flex-col gap-5 md:w-full">
            <p className="uppercase text-white text-md lg:text-lg font-extrabold">
              Personal Infos
            </p>
            <motion.div
              className="grid grid-cols-2 gap-3 justify-center w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              {this.state.personalInfo.map((info) => {
                let age = 2023;
                if (info.label === "Age") {
                  const currentYear = new Date().getFullYear();
                  age = currentYear - info.value;
                }
                return (
                  <p key={info.id} className="text-zinc-500 ">
                    {info.label}:
                    <span className="text-white">
                      {" "}
                      {info.label === "Age" ? `${age} years old` : info.value}
                    </span>
                  </p>
                );
              })}
            </motion.div>
            {/* Download CV */}
            <motion.a
              className="uppercase self-center lg:self-start w-fit border-2 rounded-full pl-5 cursor-pointer text-white xl:mt-10 transition ease-out duration-500"
              variants={buttonVariants}
              whileHover="hover"
              download
              href="src/assets/Yeabsera_Lisanework.pdf"
            >
              download cv
              <motion.button
                className="rounded-full bg-yellow-400 p-3 ml-3"
                variants={buttonVariants}
                whileHover="hover"
              >
                <Download />
              </motion.button>
            </motion.a>
          </section>
          {/* Counter Section */}
          <motion.section
            className="grid gap-y-6 gap-x-8 sm:gap-x-10 md:gap-x-14 md:gap-y-9 lg:gap-x-10 lg:gap-y-8 grid-cols-2 mt-10 lg:mt-0 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            {this.state.counters.map((counter) => (
              <motion.div
                key={counter.id}
                className="border-4 border-zinc-700 p-3 md:p-5 lg:p-2 xl:p-10"
                variants={cardVariants}
              >
                <p className="text-yellow-400 text-5xl font-bold flex w-fit ">
                  {counter.number}
                  <span className="text-xl">+</span>
                </p>
                <div className="grid md:grid-cols-4 lg:grid-cols-3 md:gap-0 md:gap-x-2">
                  <p className="text-yellow-400 self-start relative md:bottom-2">
                    _______
                  </p>
                  <div className="text-white ml-2 flex-col md:flex-row capitalize col-span-1 md:col-span-3 lg:col-span-2">
                    <p className="items-center">{counter.firstWord}</p>
                    <p>{counter.secondWord}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </section>
        {/* Skills Section */}
        <section className="flex flex-col gap-10 items-center">
          <motion.p
            className="uppercase text-white text-lg lg:text-lg font-extrabold"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            my skills
          </motion.p>
          <motion.div
            className="self-center grid grid-cols-3 md:grid-cols-4 gap-x-10 md:gap-x-40 gap-y-8 md:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* SKILLS */}
            {this.state.skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="flex items-center flex-col gap-2 md:gap-5"
                variants={childVariants}
              >
                <div
                  className="h-16 w-16 md:h-24 md:w-24 rounded-full flex justify-center items-center"
                  style={{
                    background: `conic-gradient(#facc15 ${
                      skill.level * 3.6 || 0
                    }deg, #52525b 0deg )`,
                  }}
                >
                  <div className="h-14 w-14 md:h-20 md:w-20 bg-zinc-800 rounded-full flex justify-center items-center">
                    <p className="text-white md:font-bold md:font-lg">
                      {skill.level}%
                    </p>
                  </div>
                </div>
                <p className="uppercase text-white text-xs md:text-base">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* Experience and Education */}
        <section className="flex flex-col items-center my-16">
          <motion.p
            className="uppercase text-white text-lg lg:text-lg font-extrabold mb-10"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            Experience & Education
          </motion.p>
          <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 lg:gap-y-0">
            {/* Experience Side */}
            <aside className="flex flex-col gap-10">
              {this.state.experience.map((exp) => (
                <div key={exp.id} className="flex">
                  <div className=" flex flex-col items-center">
                    <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                      <ArchiveFill />
                    </div>
                    <span className="border-l-2 h-full border-zinc-600"></span>
                  </div>
                  <motion.div
                    className="flex flex-col gap-3 ml-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.p
                      className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                      variants={childVariants}
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p
                      className="uppercase text-white text-md font-medium"
                      variants={childVariants}
                    >
                      {exp.title}
                    </motion.p>
                    <motion.p
                      className="text-zinc-400"
                      variants={childVariants}
                    >
                      {exp.description}
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </aside>
            {/* Education Side */}
            <aside className="flex flex-col gap-10 lg:gap-0">
              {this.state.education.map((edu) => (
                <div key={edu.id} className="flex">
                  <div className=" flex flex-col items-center">
                    <div className="bg-yellow-400 text-white w-10 h-10 p-3 rounded-full">
                      <BookHalf />
                    </div>
                    <span className="border-l-2 h-full border-zinc-600"></span>
                  </div>
                  <motion.div
                    className="flex flex-col gap-3 ml-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.p
                      className="text-zinc-400 rounded-full px-3 bg-zinc-700 w-fit"
                      variants={childVariants}
                    >
                      {edu.institution}
                    </motion.p>
                    <motion.p
                      className="uppercase text-white text-md font-medium"
                      variants={childVariants}
                    >
                      {edu.degree}
                    </motion.p>
                    <motion.p
                      className="text-zinc-400"
                      variants={childVariants}
                    >
                      {edu.description}
                    </motion.p>
                  </motion.div>
                </div>
              ))}
            </aside>
          </section>
        </section>
      </motion.section>
    );
  }
}
