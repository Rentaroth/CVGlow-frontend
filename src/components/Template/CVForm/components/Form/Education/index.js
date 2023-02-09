import { useState } from 'react';

function Education() {
  const [hiddenState, setHiddenState] = useState({
    utility: 'hidden',
    aditional: 'hidden',
  });
  const [showingState, setShowingState] = useState({
    utility: '',
    aditional: '',
  });

  const toggleUtilityState = (customState, setCustomState) => {
    if (customState.utility === 'hidden') {
      setCustomState({
        ...customState,
        utility: '',
      });
    } else {
      setCustomState({
        ...customState,
        utility: 'hidden'
      });
    }
  };
  const toggleAditionalState = (customState, setCustomState) => {
    if (customState.aditional === 'hidden') {
      setCustomState({
        ...customState,
        aditional: '',
      });
    } else {
      setCustomState({
        ...customState,
        aditional: 'hidden'
      });
    }
  };

  return (
    <div className="w-[80%] h-fit flex flex-col font-Raleway">
      <h3 className="my-1 text-max font-Raleway font-bold md:text-md md:my-12">
        Education
      </h3>
      <div className="mb-4">
        <div className="w-full h-fit mb-1">
          <h4 className="text-xs mb-1 md:mb-0">Title</h4>
          <input className="w-full h-[4vh] md:h-[6vh] rounded-md md:w-[70%]"></input>
        </div>
        <div className="w-full h-fit mb-2">
          <h4 className="text-xs mb-1 md:mb-0">Enphasis</h4>
          <input className="w-full h-[4vh] md:h-[6vh] rounded-md md:w-[70%]"></input>
        </div>
        <div className="my-4">
          <h3 className="text-max font-Raleway font-bold md:text-md md:my-8">
            Utilities
          </h3>
          <div className="p-2 rounded-md bg-basic_white flex justify-between md:p-3">
            <h3 className={showingState.utility + ' text-xxl md:text-sm'}>
              New Utility
            </h3>
            <div className={hiddenState.utility + ' w-full'}>
              <div className="w-full h-fit mb-2">
                <h4 className="text-xs mb-1 md:mb-0 md:text-md">Name</h4>
                <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md text-xl p-1 md:text-sm"></input>
              </div>
              <div className="w-full h-fit mb-2">
                <h4 className="text-xs mb-1 md:mb-0 md:text-md">Description</h4>
                <textarea
                  rows={5}
                  cols={25}
                  className="md:h-[32vh] md:w-[50vw] rounded-md resize-none p-1 text-md md:text-sm"
                ></textarea>
              </div>
              <div className="w-full flex justify-end">
                <button className="w-[16vw] h-[8vw] bg-dark_green rounded-md text-basic_white md:w-[10vw] md:h-[4vw] md:text-md">
                  Send
                </button>
              </div>
            </div>
            <div
              onClick={() => {
                toggleUtilityState(hiddenState, setHiddenState);
                toggleUtilityState(showingState, setShowingState);
              }}
              className="w-[5vw] right-4 duration-300 md:w-[3vw]"
            >
              <img
                src="https://i.postimg.cc/0yn5X7J5/expand-arrow.png"
                alt="expand_arrow"
              ></img>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-max font-Raleway font-bold md:text-md md:my-8">
            Aditionals
          </h3>
          <div className=" p-2 rounded-md bg-basic_white flex justify-between md:p-3">
            <h3 className={showingState.aditional + ' text-xxl md:text-sm'}>
              New Aditional
            </h3>
            <div className={hiddenState.aditional + ' w-full'}>
              <div className="w-full h-fit mb-2">
                <h4 className="text-xs mb-1 md:mb-0">Name</h4>
                <input className="w-[60%] h-[4vh] md:h-[6vh] rounded-md text-xl p-1"></input>
              </div>
              <div className="w-full h-fit mb-2">
                <h4 className="text-xs mb-1 md:mb-0">Description</h4>
                <textarea
                  rows={5}
                  cols={25}
                  className="md:h-[16vh] rounded-md resize-none p-1 text-md"
                ></textarea>
              </div>
              <div className="w-full flex justify-end">
                <button className="w-[16vw] h-[8vw] bg-dark_green rounded-md text-basic_white md:w-[10vw] md:h-[4vw] md:text-md">
                  Send
                </button>
              </div>
            </div>
            <div
              onClick={() => {
                toggleAditionalState(hiddenState, setHiddenState);
                toggleAditionalState(showingState, setShowingState);
              }}
              className="w-[5vw] right-4 duration-300 md:w-[3vw]"
            >
              <img
                src="https://i.postimg.cc/0yn5X7J5/expand-arrow.png"
                alt="expand_arrow"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Education };
