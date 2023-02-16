function Section1() {
  return (
    <section className="w-full h-fit p-4 bg-light_green">
      <div className="w-full h-fit mb-4 text-center text-basic_white">
        <h3 className="text-max my-6 md:my-12 md:text-xl font-bold font-Raleway">Explore new themes</h3>
        <p className="text-xl md:text-sm">
          Enim excepteur cillum aute aliquip velit aliqua magna ullamco
          voluptate elit. Culpa excepteur irure cupidatat consequat ullamco ea
          id tempor quis ipsum quis sint in.
        </p>
      </div>
      <div className="flex justify-evenly my-6 md:my-12">
        <div className="w-[30%] md:w-[25%]"><img className="rounded-xl" src="https://i.postimg.cc/0jzRhn4L/coding.jpg" alt="random_theme"></img></div>
        <div className="w-[30%] md:w-[25%]"><img className="rounded-xl" src="https://i.postimg.cc/0jzRhn4L/coding.jpg" alt="random_theme"></img></div>
        <div className="w-[30%] md:w-[25%]"><img className="rounded-xl" src="https://i.postimg.cc/0jzRhn4L/coding.jpg" alt="random_theme"></img></div>
      </div>
    </section>
  );
}

export { Section1 };
