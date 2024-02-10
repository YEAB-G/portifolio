// React imports
import { Component } from "react";

// Framer Motion imports
import { motion } from "framer-motion";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { light: false };
  }

  render() {
    const headerVariants = {
      hidden: {
        y: -250,
      },
      visible: {
        y: 0,
      },
    };

    return (
      <header
        id="home"
        className="font-body text-white bg-zinc-800 flex justify-between py-5 px-5 md:px-10 lg:px-20 xl:px-40"
      >
        <motion.h3
          className="font-semibold cursor-default text-2xl"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          &lt;/<span className="text-yellow-400">Yeabsira</span>&gt;
        </motion.h3>
      </header>
    );
  }
}
