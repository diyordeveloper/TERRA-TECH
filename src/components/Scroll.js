import React, { useEffect, useState } from "react";

function Scroll() {
  const [scrollTop, setScrollTop] = useState(false);
  function BtnClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  function Fixed(){
    if (window.scrollY > 100) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  } 
    window.addEventListener("scroll", Fixed); 

  
  }
  return (
    <>
      {scrollTop && (
        <button className="btn_fixed" onClick={BtnClick}>
          ^
        </button>
       )}  
    </>
  );
}

export default Scroll;
