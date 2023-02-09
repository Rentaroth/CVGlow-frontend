function Section2() {
  const logos = (
    <div className="w-[200px] md:w-[100%] h-fit flex flex-col justify-center items-center text-start rounded-md border-[1px] border-slate-500 bg-white opacity-100 hover:bg-[#45484e] hover:text-stone-200 hover:border-black duration-500">
      <img
        className=" w-1/4 h-1/5 m-2"
        src="https://i.postimg.cc/vHvFVRP8/React-icon-black.png"
        alt="technology_logo"
      ></img>
      <h3 className=" text-max md:text-sm text-justify align-top font-Lobster font-bold">
        React.js
      </h3>
      <p className="text-xs md:text-xxs font-Kanit text-center h-fit w-11/12 align-top">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
        consequat urna. Mauris dignissim in eros sit amet semper.
      </p>
    </div>
  );
  return (
    <section className="w-full h-fit relative bg-white flex flex-col items-center justify-center md:items-start bg-section2 bg-fixed md:bg-cover">
      <div className="w-full h-fit top-0 px-4">
        <div className="z-10 w-full pt-6 h-fit flex flex-col items-center md:items-start">
          <h1 className="font-Raleway text-xl md:text-md md:mb-[5%] font-bold mb-2">
            Full Stack Developer
          </h1>
          <p className="font-Raleway text-sm md:text-xs md:mb-[5%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
            consequat urna. Mauris dignissim in eros sit amet semper. Proin
            scelerisque tempus libero, eu malesuada enim lacinia in.
          </p>
        </div>
        <div className="z-10 pb-4 w-full h-fit flex overflow-scroll overscroll-auto scroll-smooth md:overflow-hidden md:overscroll-none md:w-fit md:h-fit scrollbar-hide">
          <div className=' w-fit h-full flex md:w-full md:h-fit md:grid md:grid-cols-3 md:grid-rows-2 gap-4 my-4 bg-transparent opacity-80'>
            {logos}
            {logos}
            {logos}
            {logos}
            {logos}
            {logos}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Section2 };
