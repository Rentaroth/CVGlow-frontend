import React from "react";

function Section2() {
  const logos = (
    <div className="flex flex-col justify-center items-center">
      <img className="w-6 h-6" src="https://i.postimg.cc/vHvFVRP8/React-icon-black.png" alt="technology_logo"></img>
      <h3>React.js</h3>
    </div>
  );
  return (
    <section className=" w-full h-80 px-6 relative bg-white flex flex-col items-center">
      <img className=" z-0 absolute w-full h-full object-cover" src="https://i.postimg.cc/0jQcwxTJ/depositphotos-12208904-stock-photo-diamonds-on-white-background-with.webp" alt="White_diamond"></img>
      <div className="z-10 w-full pt-6 h-40 flex flex-col items-start">
        <h1 className="justify-self-start font-Raleway text-2xl">Full Stack Developer</h1>
        <p className="font-Raleway text-xxs text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          ex ac nisi rutrum rutrum.
        </p>
      </div>
      <div className="z-10 w-full h-full mb-2 grid grid-rows-2 grid-cols-3 bg-white opacity-80 object-fill">
        {logos}
        {logos}
        {logos}
        {logos}
        {logos}
        {logos}
      </div>
    </section>
  );
}

export { Section2 };
