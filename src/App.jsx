// React imports
import { Component, createRef } from "react";

// Components
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import WorkSection from "./Components/WorkSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

// Bootstrap icons imports
import { ArrowUpCircle } from "react-bootstrap-icons";

// Framer Motion import
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#facc15",
    color: "#020617",
  },
};
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showAnchor: false,
    };
    this.anchorRef = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const about = document.querySelector("#about");
    let scrollY = window.scrollY;
    if (scrollY < about.offsetTop - 500) {
      this.setState({ showAnchor: false });
    } else {
      this.setState({ showAnchor: true });
    }
  }
  render() {
    return (
      <div className="">
        <Header />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
        <Footer />
        {this.state.showAnchor && (
          <motion.a
            ref={this.anchorRef}
            id="go-to-home"
            href="#home"
            className="bg-zinc-700 p-2 text-white rounded-full fixed bottom-5 right-5 md:hidden"
            variants={buttonVariants}
            whileHover="hover"
          >
            <ArrowUpCircle size={15} />
          </motion.a>
        )}
      </div>
    );
  }
}
