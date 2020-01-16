import React from "react";

function Loader(props) {
  return props.isLoading ? <div className="lds-ripple" /> : null;
}

export default Loader;
