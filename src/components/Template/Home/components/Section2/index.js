function Section2() {
  return (
    <section className="w-full flex justify-start relative bg-basic_black text-basic_white">
      {/* <div className="absolute w-full h-full z-0"><img className="h-full w-full" src="https://i.postimg.cc/SxwqZKN6/life-wallpaper-thumb.jpg" alt="coding_background"></img></div> */}
      <div className="h-full w-full mx-4 my-8 md:my-12 pl-[10%] z-10">
        <h3 className="text-max md:text-xl mb-5 font-bold font-Raleway">Create a CV</h3>
        <ul className="text-xs flex flex-col gap-4 list-disc">
          <li className="w-full">Respond the blanks to fill your curriculum vitae</li>
          <li className="w-full">Select the theme you want to personalize your information</li>
          <li className="w-full">Change the theme of your CV </li>
          <li className="w-full">Show it public!</li>
        </ul>
        <button className="w-[30vw] h-[10vw] md:w-[15vw] md:h-[5vw] mt-8 border-[1px] rounded-md font-Kanit text-xxl md:text-sm text-basic_white">Create New</button>
      </div>
    </section>
  );
}

export { Section2 };