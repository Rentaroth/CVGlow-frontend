function Section3() {
  return (
    <section className="w-full h-[80vh] md:h-fit p-6 md:p-16 relative flex flex-col items-center gap-5 bg-[#85A663]">
      <div className="z-20 w-[40vw] h-fit absolute top-[50%] right-[10%] md:relative md:z-10 md:left-[-15%] md:w-[30vw]">
        <img src="https://i.postimg.cc/LXR5YRdd/theme-example.png" alt="theme_example"></img>
      </div>
      <div className="z-10 w-[80%] h-fit p-6 flex flex-col gap-5 text-left bg-[#F2F2F2] shadow-custom shadow-black md:absolute md:w-[30vw] md:h-fit md:top-[20%] md:left-[45%] md:z-20">
        <h3 className="text-xxl font-Raleway font-bold md:text-md">Explore our themes</h3>
        <p className="text-xs font-Kanit font-light md:text-xxs">
          Sint ad labore magna sit est et aliquip labore. Duis tempor sint sunt
          reprehenderit consequat aute officia ea. Laboris eu eu duis excepteur
          in commodo voluptate Lorem exercitation.Magna aliqua aute magna
          officia deserunt ipsum exercitation aliqua dolor labore non.
        </p>
        <button className="w-[25vw] h-[10vw] bg-[#708C54] text-[#F2F2F2] text-xxl font-Raleway rounded-md md:text-sm md:w-[15vw] md:h-[5vw]">
          View more
        </button>
      </div>
      <div className="z-0 w-[60%] h-[40%] absolute top-[43%] right-[15%] bg-[#D98E32] md:top-[57%] md:right-[15%] md:w-[45%]"></div>
      <div className="z-0 w-[30vw] h-[30vw] absolute top-[35%] right-[3%] rounded-[50%] bg-[#D98E32] md:w-[20vw] md:h-[20vw] md:top-[10%] md:right-[15%]"></div>
    </section>
  );
}

export { Section3 };
