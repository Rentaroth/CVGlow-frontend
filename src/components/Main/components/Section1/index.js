import React from 'react';

function Section1() {
  const [blurState, setBlurState] = React.useState('blur-sm');
  return (
    <section className="w-full h-fit bg-black relative flex justify-center items-center">
      <img
        className={blurState + " duration-300 z-0"}
        onMouseEnter={() => {
          setBlurState('blur-none');
        }}
        onMouseOut={() => {
          setBlurState('blur-sm')
        }}
        src="https://i.postimg.cc/fTR0gx2W/Nueva-imagen-de-mapa-de-bits.png"
        alt="Coding_background"
      ></img>
      <div className='z-10 absolute bottom-1/2 font-mono font-bold text-3xl'>
        <p className=' text-white'>Antonio de Jesús Tabares Torres</p>
      </div>
    </section>
  );
}

export { Section1 };
