function Footer() {
  return (
    <section id="Footer" className="w-full bg-black text-[#F2F2F2]">
      <div className="flex flex-col items-center">
        <h4 className="text-xxs font-Roboto my-1">Created by Rentaroth</h4>
        <div className="flex justify-center gap-2">
          <a href="https://www.linkedin.com/in/antoniojtt/" className="w-[10%] md:w-[3%]"><img src="https://i.postimg.cc/Qd983Kpt/linkedin-icon-18-256.png" alt="creators_github"></img></a>
          <a href="https://github.com/Rentaroth" className="w-[10%] md:w-[3%]"><img src="https://i.postimg.cc/hjXKPWBn/github-icon-white-6.png" alt="creators_github"></img></a>
        </div>
      </div>
    </section>
  );
}

export { Footer };