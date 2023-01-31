function Section1() {
  return (
    <section className="w-full h-[80vh] bg-[#7CA15D] flex relative items-end md:items-center lg:h-[100vh overflow-hidden">
      <div className="z-20 flex flex-col w-full h-[28vh] items-start mx-[15vw] justify-evenly border-t-2 bg-[#7CA15D] border-white text-white font-Raleway md:ml-[10vw] md:w-[40vw] md:h-full md:m-0 md:border-none md:justify-center">
        <h1 className="text-max font-Roboto font-extrabold md:w-full md:mb-6">Make your CV glow!</h1>
        <p className="text-sm w-full text-start font-Kanit font-thin md:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          euismod ligula sit amet blandit mollis.
        </p>
        <button className="text-[#708C54] bg-[#F2F2F2] w-[40vw] h-[10vw] md:h-[5vw] rounded-md md:text-md md:w-[20vw]">
          Get started
        </button>
      </div>
      <img
        className="z-10 h-[55%] md:h-[90%] absolute left-[calc(50vw-75.5px)] top-[10%] md:left-[calc(75vw-115px)] lg:left-[calc(70vw-100px)]"
        src="https://i.postimg.cc/QxxnmpmP/businessman-19693.png"
        alt="Business_man"
      ></img>
      <div className="z-0 absolute w-[60vw] h-[60vw] bg-[#D98E32] top-[5vh] left-[20vw] rounded-full md:h-[50vw] md:w-[50vw] md:left-[calc(60vw-60px)] lg:w-[40vw] lg:h-[40vw] lg:left-[calc(60vw-80px)] xl:w-[40vw] xl:h-[40vw]"></div>
    </section>
  );
}

export { Section1 };
