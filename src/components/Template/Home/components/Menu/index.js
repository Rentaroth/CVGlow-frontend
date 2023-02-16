import { useState } from 'react';

function Menu() {
  const [hiddenState, setHiddenState] = useState('left-[-60vw] md:left-[-20vw]');
  const [arrowDirection, setArrowDirection] = useState('');
  const [bgState, setBgState] = useState({
    home: '',
    mycv: '',
    themes: '',
    account: '',
    aboutus: '',
    logout: '',
  });

  const showActionState = () => {
    return setHiddenState('left-[0vw]');
  };
  const hideActionState = () => {
    return setHiddenState('left-[-60vw] md:left-[-20vw]');
  };
  const setDarkBg = (item) => {
    return setBgState({
      ...bgState,
      ...item,
    });
  };
  const setLightBg = () => {
    return setBgState('');
  };
  const changeArrowDirection = () => {
    if(arrowDirection === '') {
      return setArrowDirection('rotate-180');
    } else {
      return setArrowDirection('');
    }
  }

  return (
    <section
      onMouseLeave={() => {
        if(window.innerWidth >= 768) {
          hideActionState();
          changeArrowDirection();
        }
      }}
      className={
        hiddenState +
        ' h-[100vh] w-[60vw] md:w-[20vw] z-50 fixed bg-basic_white duration-500'
      }
    >
      <div className="w-full h-full relative">
        <div
          onMouseEnter={() => {
            if (window.innerWidth >= 768) {
              showActionState();
              if(hiddenState !== 'left-[0vw]') {
                changeArrowDirection();
              }
            }
          }}
          onClick={() => {
            if (window.innerWidth < 768) {
              hiddenState === 'left-[0vw]'
              ? hideActionState() : showActionState();
              changeArrowDirection();
            }
          }}
          className="h-16 xl:h-24 xxl:h-32 absolute right-[-5vw] md:right-[-2.5vw] lg:right-[-2vw] xl:right-[-1.5vw] xxl:right-[-1vw] top-[calc(50vh-2rem)] flex items-center bg-basic_white rounded-tr-xl rounded-br-xl"
        >
          <img
            className={arrowDirection}
            src="https://i.postimg.cc/Zn8bCsxR/icons8-chebr-n-hacia-la-derecha-24.png"
            alt="Arrow"
          ></img>
        </div>
        <div className="w-full h-full font-Kanit relative">
          <nav className="navbar h-12 w-full px-4 flex justify-between bg-white">
            <img
              src="https://i.postimg.cc/3rXJM0MV/Logo-removebg-preview.png"
              alt="Corporative logo"
            ></img>
          </nav>
          <ul className="w-full h-full p-3 flex flex-col gap-[3%]">
            <li
              onMouseEnter={() => {
                setDarkBg({ home: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.home + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">Home</a>
            </li>
            <li
              onMouseEnter={() => {
                setDarkBg({ mycv: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.mycv + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">My CV's</a>
            </li>
            <li
              onMouseEnter={() => {
                setDarkBg({ themes: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.themes + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">Themes</a>
            </li>
            <li
              onMouseEnter={() => {
                setDarkBg({ account: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.account + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">Account</a>
            </li>
          </ul>
        </div>
        <div className="w-full h-fit p-3 absolute bottom-0 font-Kanit text-basic_black">
          <ul className="w-full h-fit flex gap-2 text-center">
            <li
              onMouseEnter={() => {
                setDarkBg({ aboutus: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.aboutus + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">About us</a>
            </li>
            <li
              onMouseEnter={() => {
                setDarkBg({ logout: 'bg-basic_black text-basic_white opacity-70' });
              }}
              onMouseLeave={() => {
                setLightBg();
              }}
              className={bgState.logout + ' w-full h-fit rounded-md md:text-xs'}
            >
              <a href="./">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export { Menu };
