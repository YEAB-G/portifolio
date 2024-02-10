// React imports
import { Component } from "react";

// Framer Motion imports
import { motion } from "framer-motion";

// Bootstrap icons imports
import { ArrowRight } from "react-bootstrap-icons";

// Data import
import profile from "../assets/profile picture.jpg";

export default class HomeSection extends Component {
  constructor() {
    super();
  }
  render() {
    const titleVariants = {
      hidden: {
        x: -200,
        opacity: 0,
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
    const paragraphVariants = {
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
    const buttonVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#facc15",
        color: "#020617",
      },
    };
    return (
      <section
        id="home"
        className="h-fit md:h-screen font-body py-5 px-5 md:px-10 lg:px-20 xl:px-40 md:grid md:content-center"
      >
        <section className="font-body py-5 grid md:grid-cols-2 grid-cols-1 gap-5">
          <aside className="bg-gradient-to-bl to-yellow-400 from-zinc-800 rounded-sm ps-4 py-4 mx-auto w-8/12 md:w-fit lg:w-8/12 lg:mx-0 border-yellow-400 md:mx-0 h-fit">
            <img
              src={profile}
              alt="profile picture"
              className="rounded-xl rounded-r-none relative left-5"
            />
          </aside>
          <aside className="flex flex-col gap-5 mr-5 md:mr-10 lg:mr-20 xl:mr-40 justify-center mx-5">
            <div className="flex gap-5">
              <p className="text-yellow-400 self-start relative bottom-1">
                ____
              </p>
              <div className="flex flex-col">
                <p className="animate-typing overflow-hidden whitespace-nowrap text-2xl md:text-xl lg:text-2xl font-black text-yellow-400 uppercase">
                  I'm Yeabsira.
                </p>
                <motion.p
                  className="text-white text-md md:text-md lg:text-2xl font-black uppercase whitespace-wrap"
                  variants={titleVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  frontend developer
                </motion.p>
              </div>
            </div>
            <motion.p
              className="text-zinc-400"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
            >
              I'm an Ethiopian-based web developer and front-end specialist,
              focused on crafting clean and user-friendly experiences.
              Passionate about building excellent software that enriches lives.
              <span className="block">
                Let's collaborate and bring your ideas to life!
              </span>
            </motion.p>
            <motion.a
              className="uppercase self-center lg:self-start w-fit border-2 rounded-full pl-5 cursor-pointer text-white transition ease-out duration-500"
              variants={buttonVariants}
              whileHover="hover"
              href="#about"
            >
              more about me
              <motion.button
                className="rounded-full bg-yellow-400 p-3 ml-3"
                variants={buttonVariants}
                whileHover="hover"
              >
                <ArrowRight />
              </motion.button>
            </motion.a>
          </aside>
        </section>
      </section>
    );
  }
}
