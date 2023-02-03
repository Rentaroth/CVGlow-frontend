import { useState } from 'react';

function Form() {
  const [formBlur, setFormBlur] = useState('blur-sm');

  return (
    <section className="w-full h-[90vh] p-2 relative flex items-center justify-center bg-light_green">
      <div
        onMouseEnter={() => setFormBlur('blur-none')}
        onMouseOut={() => setFormBlur('blur-sm')}
        className={
          formBlur +
          ' z-10 w-full h-full flex justify-between bg-cover absolute opacity-90 duration-500'
        }
      ></div>
      <div className="z-20 w-[50vw] h-[60vh] flex flex-col items-center justify-center gap-3 font-Raleway bg-basic_white">
        <input
          className="w-[60%] h-[5vh] text-sm px-2 md:h-[8vh] md:rounded-xl rounded-md bg-basic_white text-light_green placeholder:text-light_green shadow-xl"
          placeholder="Username"
        ></input>
        <input className="w-[60%] h-[5vh] text-sm px-2 md:h-[8vh] md:rounded-xl rounded-md bg-basic_white text-light_green placeholder:text-light_green shadow-xl" placeholder="Password"></input>
        <input className="w-[60%] h-[5vh] text-sm px-2 md:h-[8vh] md:rounded-xl rounded-md bg-basic_white text-light_green placeholder:text-light_green shadow-xl" placeholder="Email"></input>
        <button className="w-[30%] h-[5vh] text-md px-2 mt-2 bg-dark_green text-basic_white font-Raleway font-bold md:h-[8vh] md:rounded-xl rounded-md">Register</button>
      </div>
    </section>
  );
}

export { Form };
