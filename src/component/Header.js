import { useEffect, useRef, useState } from "react";
import Logo from "../img/logo.png";
import { HeaderContainer, Left, Right } from "../style/HeaderStyled";
import { ReactComponent as SearchLogo } from "../svg/search.svg";
import { ReactComponent as CloseLogo } from "../svg/close.svg";
import { ReactComponent as MenuLogo } from "../svg/menu.svg";

const Header = () => {
  const ref = useRef();
  const refRight = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        ref.current.classList.add("scroll");
      } else {
        ref.current.classList.remove("scroll");
      }
    });
  }, []);

  const handleMenu = () => {
    if (isOpen) {
      refRight.current.classList.remove("active");
    } else {
      refRight.current.classList.add("active");
    }
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <HeaderContainer ref={ref}>
      <img src={Logo} alt="logo" />

      <MenuLogo className="menu" onClick={handleMenu} />
      <Right ref={refRight}>
        <CloseLogo className="close" onClick={handleMenu} />
        <li>
          <a href="/">صفحه اصلی</a>
        </li>
        <li>
          <a href="/blog">مطالب</a>
        </li>
        <li>
          <a href="/cotact">تماس با ما</a>
        </li>
      </Right>

      <Left>
        <label>
          <SearchLogo className="search-logo" />
          <input type="text" />
        </label>
        <button>رژیم غذایی آنلاین</button>
      </Left>
    </HeaderContainer>
  );
};

export default Header;
