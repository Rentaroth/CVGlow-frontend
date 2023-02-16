function Footer() {
  return (
    <section
      id="Footer"
      className="w-full h-[10vh] flex items-center justify-center bg-basic_black text-[#F2F2F2]"
    >
      <div className="flex flex-col items-center">
        <h4 className="text-xxs font-Roboto my-1">Created by Rentaroth</h4>
        <div className="mb-2 flex justify-center gap-2">
          <div className="w-[5vw] md:w-[3vw] h-[5vw] md:h-[3vw]">
            <a
              href="https://www.linkedin.com/in/antoniojtt/"
            >
              <img
                src="https://i.postimg.cc/Qd983Kpt/linkedin-icon-18-256.png"
                alt="creators_github"
              ></img>
            </a>
          </div>
          <div className="w-[5vw] md:w-[3vw] h-[5vw] md:h-[3vw]">
            <a
              href="https://github.com/Rentaroth"
            >
              <img
                src="https://i.postimg.cc/hjXKPWBn/github-icon-white-6.png"
                alt="creators_github"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Footer };
