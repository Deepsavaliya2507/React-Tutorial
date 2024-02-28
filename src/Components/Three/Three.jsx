import React, { useEffect, useState } from "react";

function Three(props) {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  useEffect(() => {
    document.title = props.title;
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center">
          <div
            style={mystyle}
            className="text-3xl box-content h-44 w-44 p-4 border-4"
          >
            this is page number three
          </div>
        </div>
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </>
  );
}

export default Three;
