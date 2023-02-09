function Section2() {
  const square = (
    <div className="w-[25vw] flex flex-col items-center p-1">
      <img
        className="w-[70%]"
        src="https://i.postimg.cc/Y2dBQPSF/images-preview-rev-1.png"
        alt="working_icon"
      ></img>
      <p className="text-xs ">Eu cupidatat velit</p>
    </div>
  );
  return (
    <section className="w-full h-[50vh] md:h-[80vh] flex flex-col justify-evenly bg-[#0D0D0D] p-5">
      <div className="w-full h-[20vh] text-[#F2F2F2] text-center">
        <h2 className="text-xxl font-Roboto font-semibold">Select Different Themes To Show You Up</h2>
        <p className="text-xs font-Kanit italic mt-[4vh]">
          Fugiat proident sint ad magna proident eiusmod ullamco.Occaecat sint
          cillum dolor magna.
        </p>
      </div>
      <div className="w-full h-fit flex text-center text-[#F2F2F2]">
        {square}
        {square}
        {square}
        {square}
      </div>
    </section>
  );
}

export { Section2 };
