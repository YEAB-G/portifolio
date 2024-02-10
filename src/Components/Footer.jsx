// React imports
import { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section id="blog" className="h-screen py-5">
        <title className="flex flex-col justify-center select-none w-screen">
          <span className="self-center font-body text-lg md:text-2xl lg:text-4xl font-black text-white relative uppercase z-10 ">
            my
            <span className="text-yellow-400 uppercase"> blog</span>
          </span>
          <span className="text-zinc-600 font-body text-3xl md:text-5xl lg:text-7xl font-black absolute self-center opacity-30 tracking-wider uppercase z-0 ">
            posts
          </span>
        </title>
        <div className=" grid justify-items-center content-center h-full cursor-default">
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
          <p className="uppercase text-zinc-900 font-black text-4xl opacity-40">
            Coming soon!
          </p>
        </div>
      </section>
    );
  }
}
