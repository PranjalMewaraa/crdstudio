import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    var crsr = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + -20 + "px";
      crsr.style.top = dets.y + -20 + "px";
    });
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
