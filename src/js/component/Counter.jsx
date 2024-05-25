import React, { useState } from "react";

let interval;

const Counter = () => {
  const [theVariable1, setTheVariable1] = useState(0);

  const seconder = () => {
    setTheVariable1((prev) => prev + 1);
  };

  if (!interval) {
    interval = setInterval(seconder, 1000);
  }

  const formattedCount = theVariable1.toString().padStart(6, "0");

  const displayformattedCount = formattedCount.split("");

  return (
    <div>
      <div className="card text-center">
        <div className="card-header text-white">
          <h1>Seconds Counter</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title text-white fs-1 d-flex justify-content-center">
            <span className="boxNumber clock">
              <i className="far fa-clock"></i>
            </span>

            {displayformattedCount.map((element) => {
              return (
                <div>
                  <span className="boxNumber">{element}</span>
                </div>
              );
            })}
          </h5>
        </div>
        <div className="card-footer text-body-secondary text-white">|</div>
      </div>
    </div>
  );
};

export default Counter;
