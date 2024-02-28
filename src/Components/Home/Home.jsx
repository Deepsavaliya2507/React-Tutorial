import React, { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <>
      <div className="text-3xl">this is home page</div>
    </>
  );
}

export default Home;
