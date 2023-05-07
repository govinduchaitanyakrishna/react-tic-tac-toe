import React from "react";
import "./index.css";

export const Body = function () {
  const wrpRef = React.useRef();
  const [result, setResult] = React.useState("In Progress");
  const [currentKey, setCurrentKey] = React.useState("X");
  const [counter, setCounter] = React.useState(0);
  const addKey = (event) => {
    event.currentTarget.setAttribute("data", currentKey);
    event.currentTarget.textContent = currentKey;
    if (currentKey === "X") {
      setCurrentKey("O");
    } else {
      setCurrentKey("X");
    }
    setCounter(counter + 1);
  };

  React.useEffect(checkForWin, [currentKey]);
  function checkForWin() {
    if (counter > 4) {
      let elArr = [...wrpRef.current.children];
      if (
        elArr[0].getAttribute("data") === elArr[1].getAttribute("data") &&
        elArr[1].getAttribute("data") === elArr[2].getAttribute("data")
      ) {
        setResult("win");
        elArr[0].classList.add("win");
        elArr[1].classList.add("win");
        elArr[2].classList.add("win");
      } else if (
        elArr[3].getAttribute("data") === elArr[4].getAttribute("data") &&
        elArr[4].getAttribute("data") === elArr[5].getAttribute("data")
      ) {
        setResult("win");
        elArr[3].classList.add("win");
        elArr[4].classList.add("win");
        elArr[5].classList.add("win");
      } else if (
        elArr[6].getAttribute("data") === elArr[7].getAttribute("data") &&
        elArr[7].getAttribute("data") === elArr[8].getAttribute("data")
      ) {
        setResult("win");
        elArr[6].classList.add("win");
        elArr[7].classList.add("win");
        elArr[8].classList.add("win");
      } else if (
        elArr[0].getAttribute("data") === elArr[3].getAttribute("data") &&
        elArr[3].getAttribute("data") === elArr[6].getAttribute("data")
      ) {
        setResult("win");
        elArr[0].classList.add("win");
        elArr[3].classList.add("win");
        elArr[6].classList.add("win");
      } else if (
        elArr[1].getAttribute("data") === elArr[4].getAttribute("data") &&
        elArr[4].getAttribute("data") === elArr[7].getAttribute("data")
      ) {
        setResult("win");
        elArr[1].classList.add("win");
        elArr[4].classList.add("win");
        elArr[7].classList.add("win");
      } else if (
        elArr[2].getAttribute("data") === elArr[5].getAttribute("data") &&
        elArr[5].getAttribute("data") === elArr[8].getAttribute("data")
      ) {
        setResult("win");
        elArr[2].classList.add("win");
        elArr[5].classList.add("win");
        elArr[8].classList.add("win");
      } else if (
        elArr[0].getAttribute("data") === elArr[4].getAttribute("data") &&
        elArr[4].getAttribute("data") === elArr[8].getAttribute("data")
      ) {
        setResult("win");
        elArr[0].classList.add("win");
        elArr[4].classList.add("win");
        elArr[8].classList.add("win");
      } else if (
        elArr[2].getAttribute("data") === elArr[4].getAttribute("data") &&
        elArr[4].getAttribute("data") === elArr[6].getAttribute("data")
      ) {
        setResult("win");
        elArr[2].classList.add("win");
        elArr[4].classList.add("win");
        elArr[6].classList.add("win");
      }
    }
  }

  return (
    <div>
      <h1 className="heading">Result :{result}</h1>
      <div className="container">
        <div ref={wrpRef} className="wrapper">
          {new Array(9).fill(0).map((item, index) => {
            return <div onClick={addKey} data={index}></div>;
          })}
        </div>
      </div>
    </div>
  );
};
