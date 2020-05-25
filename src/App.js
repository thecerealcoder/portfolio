import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    var open = document.getElementsByClassName("open"),
      close = document.getElementById("close"),
      over = document.getElementById("overlay");

    for (var i = 0; i < open.length; i++) {
      open.item(i).addEventListener("click", function () {
        over.classList.add("show");
      });
    }
    close.addEventListener("click", function () {
      over.classList.remove("show");
    });
  }, []);

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
