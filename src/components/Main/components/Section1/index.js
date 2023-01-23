import React from 'react';

function Section1() {
  const [blurState, setBlurState] = React.useState('blur-sm');
  return (
    <section className=" w-full h-80 min-h-min bg-black relative flex justify-center items-center">
      <img
        onMouseEnter={() => {
          setBlurState('blur-none');
        }}
        onMouseOut={() => {
          setBlurState('blur-sm');
        }}
        src="https://i.postimg.cc/VsKHyGGp/black-diamonds.jpg"
        alt="elegant_background"
        className={blurState + ' h-full w-full duration-300 object-cover'}
      ></img>
      <div className="z-10 font-mono flex flex-col absolute top-26 items-center">
        <p className=" text-white font-Aboreto text-md sm:text-xxl">
          Antonio de Jesús Tabares Torres
        </p>
        <p className="text-white w-80 text-sm font-Dancing mt-8 font-thin md:w-96 md:text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales dolor sit amet velit vehicula, sagittis dapibus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales dolor sit amet velit vehicula, sagittis dapibus nam.
        </p>
        <div className="flex items-center justify-center mt-8">
          <button className="text-white bg-black p-2 rounded-3xl text-xs font-Raleway font-bold mr-2">
            Read more
          </button>
          <button className="text-black bg-white p-2 rounded-3xl text-xs font-Raleway font-extrabold ml-2">
            See repository
          </button>
        </div>
      </div>
    </section>
  );
}

export { Section1 };
