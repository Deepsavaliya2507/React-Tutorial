import React, { useEffect } from "react";

function Four(props) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <>
      <div className="text-3xl">this is page number four</div>
    </>
  );
}

export default Four;
