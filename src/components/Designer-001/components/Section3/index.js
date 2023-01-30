function Section3() {
  return (
    <section className="w-full h-fit text-stone-200">
      <div className="w-full h-full py-8 text-middle bg-[#161719]">
        <h1 className="text-xxl md:text-xl my-4 md:my-8">What I Do</h1>
        <p className="p-4 text-sm md:text-xs mb-6 md:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
          consequat urna. Mauris dignissim in eros sit amet semper. Proin
          scelerisque tempus libero, eu malesuada enim lacinia in.
        </p>
        <div className="w-full h-fit flex justify-around">
          <div className=" w-[45%] h-fit">
            <img className="w-full h-full object-fill" src="https://i.postimg.cc/xjLLrQvT/js-grey.png" alt="coding_image"></img>
          </div>
          <div className="p-6 flex flex-col items-center justify-center w-[45%] h-fit text-start bg-slate-800 text-stone-200">
            <div className="flex justify-center">
              <img width={'65%'} src="https://i.postimg.cc/0jzRhn4L/coding.jpg" alt="coding_image_2"></img>
            </div>
            <h3 className="text-max md:text-xxl">Build API's</h3>
            <p className="text-xxs md:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae consequat urna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Section3 };
