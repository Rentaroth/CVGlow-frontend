function Education() {
  return(
    <div className="w-[80%] h-fit flex flex-col">
      <h3 className="my-2 text-max font-Raleway font-bold md:text-md md:my-12">Education</h3>
      <div>
        <div className="w-full h-fit mb-2">
          <h4 className="text-xs mb-1 md:mb-0">Title</h4>
          <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
        </div>
        <div className="w-full h-fit mb-2">
          <h4 className="text-xs mb-1 md:mb-0">Enphasis</h4>
          <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
        </div>
      </div>
    </div>
  );
}

export { Education };