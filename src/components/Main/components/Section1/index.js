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
      <div className="z-10 font-mono flex flex-col absolute top-26">
        <p className=" text-white font-Sofia text-3xl">
          Antonio de Jesús Tabares Torres
        </p>
        <p className="text-white text-md font-Explora mt-8 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          ex ac nisi rutrum rutrum. Morbi accumsan nunc ipsum, vitae mattis nisl
          pellentesque non. Nunc hendrerit accumsan posuere. Nunc tristique
          pharetra tellus nec rutrum. In vitae vehicula odio. Sed egestas, nibh
          eu convallis aliquam, neque neque convallis neque, sed rutrum.
        </p>
        <div className="flex items-center justify-center mt-8">
          <button className="text-white bg-black p-2 rounded-3xl text-xs font-Raleway font-bold mr-2 h-8">
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
