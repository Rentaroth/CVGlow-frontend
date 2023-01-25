import React from 'react';

function Section2() {
  const logos = (
    <div className="w-full rounded-2xl h-fit flex flex-col justify-center items-center text-start border-[1px] bg-white opacity-100 hover:bg-[#45484e] hover:text-stone-200 hover:border-black duration-500">
      <img
        className=" w-1/4 h-1/5 m-2"
        src="https://i.postimg.cc/vHvFVRP8/React-icon-black.png"
        alt="technology_logo"
      ></img>
      <h3 className="text-xl text-justify align-top font-Lobster font-bold">
        React.js
      </h3>
      <p className="text-xs font-Kanit text-center h-fit w-11/12 align-top">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
        consequat urna. Mauris dignissim in eros sit amet semper.
      </p>
    </div>
  );
  return (
    <section className="w-full h-3/4 relative bg-white flex flex-col items-center justify-center md:items-start">
      <img
        className="z-0 w-full h-full object-cover"
        src="https://i.postimg.cc/0jQcwxTJ/depositphotos-12208904-stock-photo-diamonds-on-white-background-with.webp"
        alt="White_diamond"
      ></img>
      <div className="w-full h-fit top-0 absolute px-4">
        <div className="z-10 w-full pt-6 h-fit flex flex-col items-center md:items-start">
          <h1 className="font-Raleway text-xxl font-bold mb-2">
            Full Stack Developer
          </h1>
          <p className="font-Raleway text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            consequat urna. Mauris dignissim in eros sit amet semper. Proin
            scelerisque tempus libero, eu malesuada enim lacinia in.
          </p>
        </div>
        <div className="z-10 w-full h-fit flex flex-col md:h-4/5 md:grid md:grid-cols-3 md:grid-rows-2 gap-2 my-4 bg-transparent opacity-80 object-fill max-w-300px max-h-300px duration-500">
          {logos}
          {logos}
          {logos}
          {logos}
          {logos}
          {logos}
        </div>
      </div>
    </section>
  );
}

export { Section2 };
