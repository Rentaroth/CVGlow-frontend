function Section3() {
  const square = (
    <div className="w-full h-[40vw] md:h-[20vw] flex flex-col justify-end md:rounded-xl p-2 rounded-md text-start bg-basic_white text-light_green">
      <h5 className="text-md">Theme Name</h5>
      <p className="text-xxs md:text-xs">
        Nisi Lorem sit labore ut ut ea veniam culpa pariatur mollit et duis.
      </p>
    </div>
  );

  return (
    <section className="w-full h-fit px-4 py-8 bg-light_green text-basic_white">
      <div className="flex flex-col text-center mb-4">
        <h3 className=" text-max md:text-xl font-Raleway font-bold">
          Your CV's
        </h3>
        <p className=" text-md">
          Duis do cupidatat proident aliqua. Nulla mollit fugiat deserunt aliqua
          magna reprehenderit eiusmod ea et pariatur quis velit.
        </p>
      </div>
      <div className="w-full h-fit grid grid-cols-3 grid-rows-2 gap-2 md:gap-4">
        {square}
        {square}
        {square}
        {square}
        {square}
        {square}
      </div>
    </section>
  );
}

export { Section3 };
