function PersonalInformation() {
  return(
    <div className="w-[80%] h-fit flex flex-col">
      <h3 className="my-2 text-max font-Raleway font-bold md:text-md md:my-12">Personal Information</h3>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">First name:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">Second name:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">Last name:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">Second last name:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">E-mail:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">LinkedIn:</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="flex text-xs mb-1 md:mb-0">Phone</h4>
        <button className="w-[10%] h-[4vh] mr-1 md:mr-2 md:h-[6vh] rounded-md bg-basic_white"></button>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">Portfolio (URL):</h4>
        <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md"></input>
      </div>
      <div className="w-full h-fit mb-2">
        <h4 className="text-xs mb-1 md:mb-0">Tell us about you:</h4>
        <textarea maxLength={300} rows="7" cols="50" className="rounded-md text-sm"></textarea>
      </div>
    </div>
  );
}

export { PersonalInformation };