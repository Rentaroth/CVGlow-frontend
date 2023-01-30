function Section5() {
  const content = (
    <div className="z-10 w-[200px] xl:w-[300px] md:w-[250px] h-fit p-4 box-border rounded-md flex flex-col items-center gap-2 bg-white scroll-smooth">
      <img
        className="w-[50%] rounded-[50%]"
        src="https://i.postimg.cc/gcSJxBHb/83bc8b88cf6bc4b4e04d153a418cde62.jpg"
        alt="Contact_photo"
      ></img>
      <div className="w-full text-max md:text-md">Complete name</div>
      <div className="text-xxl md:text-sm">Position</div>
      <img
        className="w-[15%] mt-4"
        src="https://i.postimg.cc/gJPKJpkV/38669.png"
        alt="linkedin_logo"
      ></img>
    </div>
  );

  const scrollBar = (direction) => {
    let bar = document.getElementById('reel');
    if (direction === 'left') {
      bar.scrollLeft -= 800;
    } else if (direction === 'right') {
      bar.scrollLeft += 800;
    }
  };

  return (
    <section className="w-full h-fit relative">
      <button
        onClick={() => scrollBar('left')}
        className="z-20 h-full w-[5%] left-0 top-0 absolute rotate-180 bg-gray-700 opacity-30 rounded-l-md"
      >
        <img
          className="hidden md:block"
          width={'120%'}
          src="https://i.postimg.cc/Zn8bCsxR/icons8-chebr-n-hacia-la-derecha-24.png"
          alt="Arrow"
        ></img>
      </button>
      <button
        onClick={() => scrollBar('right')}
        className="z-20 h-full w-[5%] right-0 top-0 absolute bg-gray-700 opacity-30 rounded-l-md"
      >
        <img
          className="hidden md:block"
          width={'120%'}
          src="https://i.postimg.cc/Zn8bCsxR/icons8-chebr-n-hacia-la-derecha-24.png"
          alt="Arrow"
        ></img>
      </button>
      <section
        id="reel"
        className="w-full h-fit py-5 bg-stone-900 overflow-x-scroll overscroll-x-auto flex items-center relative scroll-smooth scrollbar-hide"
      >
        <div id="tools" className="w-fit h-fit px-4 flex gap-4">
          {content}
          {content}
          {content}
          {content}
          {content}
          {content}
        </div>
      </section>
    </section>
  );
}

export { Section5 };
