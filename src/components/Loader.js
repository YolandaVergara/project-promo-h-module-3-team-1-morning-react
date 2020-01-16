import React from "react";

function Loader(props) {
  console.log(props);

  return props.isLoading ? (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  ) : null;
}

export default Loader;
