import React from 'react';

function Section1() {
  const [blurState, setBlurState] = React.useState('blur-sm');
  return (
    <section className=" w-full h-fit bg-black relative flex justify-center items-center">
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
      <div className="z-10 w-full font-mono flex flex-col absolute top-26 items-center pointer-events-none">
        <p className=" text-white font-Aboreto font-bold text-xl md:text-xxl">
          Antonio de Jesús Tabares Torres
        </p>
        <p className="text-white p-4 w-full text-md md:text-sm font-Dancing mt-3 md:mt-16 font-thin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales dolor sit amet velit vehicula, sagittis dapibus nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales dolor sit amet velit vehicula, sagittis dapibus nam.
        </p>
        <div className="flex items-center justify-center mt-2 md:mt-16">
          <button className="text-white bg-black rounded-md p-1 md:p-4 text-xxs md:text-xs font-Raleway font-bold mr-2 pointer-events-auto">            Read more
          </button>
          <button className="text-black bg-white rounded-md p-1 md:p-4 text-xxs md:text-xs font-Raleway font-extrabold ml-2 pointer-events-auto">
            See repository
          </button>
        </div>
      </div>
    </section>
  );
}

export { Section1 };
