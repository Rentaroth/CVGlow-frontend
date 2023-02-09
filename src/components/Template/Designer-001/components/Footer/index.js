function Footer() {
  return (
    <section className="w-full h-fit bg-stone-800 flex flex-col">
      <div className="flex w-full">
        <div className="bg-stone-400 p-6 w-1/2 flex flex-col justify-around text-start gap-4">
          <div className="text-left text-sm flex flex-col gap-4">
            <h3 className=" font-Aboreto font-bold">Contact me</h3>
            <p className=" font-Kanit">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-sm flex flex-col gap-4">
            <h3 className="font-Aboreto font-bold">My socials</h3>
            <div className="flex">
              <ul className="flex w-[70%] justify-evenly box-border">
                <li className="w-[10%]">
                  <a className="flex justify-center" href="./">
                    <img src="https://i.postimg.cc/Nfc3K13h/38669.png" alt=""></img>
                  </a>
                </li>
                <li className="w-[10%]">
                  <a className="flex justify-center" href="./">
                    <img src="https://i.postimg.cc/Nfc3K13h/38669.png" alt=""></img>
                  </a>
                </li>
                <li className="w-[10%]">
                  <a className="flex justify-center" href="./">
                    <img src="https://i.postimg.cc/Nfc3K13h/38669.png" alt=""></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-start text-sm flex flex-col justify-around items-center">
          <h3 className="mt-3 mb-1 pl-6 w-full font-Aboreto text-stone-300 font-bold">Email me</h3>
          <input className="w-[80%] h-[20%] rounded-xl mb-4 placeholder:px-2" placeholder="Type your name."></input>
          <input className="w-[80%] h-[20%] rounded-xl mb-4 placeholder:px-2" placeholder="Type your email"></input>
          <textarea className="w-[80%] h-[80px] md:h-[120px] xl:h-[230px] rounded-xl mb-4 text-start placeholder:p-2" placeholder="Type your message."></textarea>
        </div>
      </div>
      <div className="bg-black text-white">
        <h3 className="text-xxs">Made by Rentaroth</h3>
        <h4 className="text-xxs">2023</h4>
      </div>
    </section>
  );
}

export { Footer };
