// React imports
import { Component } from "react";

// Bootstrap icons imports
import {
  MapFill,
  EnvelopeOpenFill,
  TelephoneFill,
  Linkedin,
  Github,
  Telegram,
  Send,
} from "react-bootstrap-icons";

// Framer Motion imports
import { motion } from "framer-motion";

// Data import
import data from "../data/data.json";

export default class ContactSection extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", subject: "", message: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(form) {
    try {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          alert("Email sent successfully: " + result);
          this.setState(() => ({
            name: "",
            email: "",
            subject: "",
            message: "",
          }));
        })
        .catch((error) => {
          console.log(error);
          alert("Email sending failed: " + error.message);
        });
    } catch (error) {
      alert("Email sending failed: " + error.message);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    const isValidEmail = emailRegex.test(this.state.email);
    if (!isValidEmail) {
      const emailElement = document.querySelector("#email");
      emailElement.setCustomValidity("Please enter a valid Gmail address.");
      emailElement.reportValidity();
      return;
    }
    this.submitForm();
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
    const buttonVariants = {
      hover: {
        scale: 1.1,
        backgroundColor: "#facc15",
        color: "#030712",
      },
    };
    return (
      <section
        id="contact"
        className="h-fit lg:h-screen font-body py-5 px-5 md:px-10 lg:px-20 xl:px-40"
      >
        <motion.title
          className="flex flex-col justify-center select-none"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <span className="self-center text-2xl md:text-3xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            get in
            <span className="text-yellow-400 uppercase"> touch</span>
          </span>
          <span className="text-zinc-600 text-5xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            contact
          </span>
        </motion.title>
        <section className="flex flex-col-reverse gap-18 lg:flex-row lg:gap-16 my-10">
          {/* Left Section */}
          <motion.section
            className="flex flex-col gap-5 lg:w-8/12"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.p className="uppercase text-white text-md lg:text-lg font-extrabold">
              Don't be shy !
            </motion.p>
            <p className="text-zinc-200 text-sm lg:text-md ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creating ideas, or exploring opportunities to be a
              part of your endeavors.
            </p>
            <div className="flex gap-5">
              <MapFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">Address point</p>
                <a
                  href={data.address.geog || " "}
                  target="_blank"
                  className="text-white uppercase"
                >
                  {data.address.line1}, {data.address.line2}
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <EnvelopeOpenFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">Mail me</p>
                <a href={`mailto:${data.contact.email}`} className="text-white">
                  {data.contact.email}
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <TelephoneFill className="text-yellow-400" size={25} />
              <div>
                <p className="text-zinc-400 uppercase text-md">call me</p>
                <a
                  href={`tel:${data.contact.phone}`}
                  className="text-white uppercase"
                >
                  {data.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-5 justify-evenly">
              <motion.a
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
                href={data.social.linkedin}
                target="_blank"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
                href={data.social.telegram}
                target="_blank"
              >
                <Telegram size={20} />
              </motion.a>
              <motion.a
                className="p-3 text-white bg-zinc-700 w-fit rounded-full active:bg-yellow-400 transition ease-out duration-500"
                variants={buttonVariants}
                whileHover="hover"
                href={data.social.github}
                target="_blank"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.section>
          {/* Right Section */}
          <form
            onSubmit={this.handleSubmit}
            className="flex flex-col gap-8 lg:gap-8 lg:w-11/12 mb-10"
          >
            <div className="flex flex-col lg:flex-row gap-5">
              <input
                // required
                type="text"
                placeholder="YOUR NAME"
                value={this.state.name}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter your name")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={(e) =>
                  this.setState((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white flex-grow"
              />
              <input
                required
                id="email"
                type="email"
                placeholder="YOUR EMAIL"
                value={this.state.email}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter your email")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                onChange={(e) =>
                  this.setState((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                pattern="^[\w-.]+@([\w-]+\.)+gmail\.com$"
                className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white flex-grow active:bg-zinc-700"
              />
            </div>
            <input
              required
              type="text"
              placeholder="YOUR SUBJECT"
              value={this.state.subject}
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your subject")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              onChange={(e) =>
                this.setState((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="bg-zinc-700 rounded-full px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white"
            />
            <textarea
              required
              cols="0"
              rows="5"
              placeholder="YOUR MESSAGE"
              value={this.state.message}
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter your message")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              onChange={(e) =>
                this.setState((prev) => ({ ...prev, message: e.target.value }))
              }
              className="bg-zinc-700 rounded px-5 py-2 placeholder-zinc-400 focus:outline-2 focus:outline-yellow-400 text-white"
            ></textarea>
            <motion.button
              className="uppercase w-fit border-2 rounded-full cursor-pointer text-white self-center transition ease-out duration-500 flex items-center pl-3 gap-3"
              variants={buttonVariants}
              whileHover="hover"
              type="submit"
            >
              Send message
              <div className="rounded-full bg-yellow-400 w-fit p-3 relative r-0">
                <Send />
              </div>
            </motion.button>
          </form>
        </section>
      </section>
    );
  }
}
