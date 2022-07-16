import { useEffect, useRef } from "react";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { ScrollTop } from "./style/AppStyled";
import { ReactComponent as ArrowUp } from "./svg/arrow-up.svg";

const App = () => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
      }
    });
  }, []);

  const scrollY = (e) => {
    e.target.classList.add("clicked");
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      e.target.classList.remove("clicked");
    }, 1000);
  };

  return (
    <div>
      <Header />
      <Main />
      <Footer />

      <ScrollTop onClick={scrollY} ref={ref}>
        <ArrowUp />
      </ScrollTop>
    </div>
  );
};

export default App;
