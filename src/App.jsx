import { useState } from "react";
import Star from "./assets/icon-star.svg";
import ThankIllustration from "./assets/illustration-thank-you.svg";
import { MdArrowBack } from "react-icons/md";

function App() {
  const [submit, setSubmit] = useState(false);
  const myArr = [1, 2, 3, 4, 5];
  const [numClicked, setNumClicked] = useState(null);

  function handleSubmit() {
    if (numClicked === null) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }

  return (
    // Principal card
    <div className="h-screen w-full flex flex-col justify-center items-center">
      {!submit ? (
        <div className=" bg-DarkBlue w-[400px] h-[400px] rounded-3xl flex flex-col p-5 gap-5">
          <div className="bg-VeryDarkBlue w-10 h-10 rounded-full flex justify-center items-center">
            <img src={Star} alt="star" className="w-5" />
          </div>
          <p className=" text-White text-xl mt-2">How did we do?</p>
          <p className=" text-MediumGrey">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve your offering!
          </p>
          <div className="flex flex-row gap-5 mx-auto mt-2">
            {myArr.map((num, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setNumClicked(num);
                  }}
                  className={`rating-btn ${numClicked == num && "btn-on"}`}>
                  {num}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => handleSubmit()}
            className="bg-Orange rounded-xl h-10 text-White hover:text-Orange hover:bg-White">
            Submit
          </button>
        </div>
      ) : (
        <div className=" bg-DarkBlue w-[400px] h-[400px] rounded-3xl flex flex-col items-center justify-center p-4 gap-5">
          <div className="w-full -mt-4">
            <MdArrowBack
              className="cursor-pointer text-Orange w-10 h-10 fixed p-2 bg-VeryDarkBlue rounded-full hover:bg-White active:bg-MediumGrey active:text-VeryDarkBlue"
              onClick={() => {
                setSubmit(!submit);
                setNumClicked(null);
              }}
            />
          </div>
          <div className="w-full flex justify-center">
            <img src={ThankIllustration} alt="star" className="w-36" />
          </div>
          <p className="text-Orange text-center bg-DarkBlue w-fit px-4 py-2 rounded-xl">
            You selected {numClicked} out 5
          </p>
          <p className=" text-White text-2xl mt-2">Thank you!</p>
          <p className=" text-MediumGrey text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don&apos;t hesitate to get in touch!
          </p>
        </div>
      )}
      <div className="text-White absolute bottom-2 flex flex-row">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
            className="text-Orange">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/marcogiu"
            target="_blank"
            rel="noreferrer"
            className="text-Orange">
            Marco Giuliani
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
