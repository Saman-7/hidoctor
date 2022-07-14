import Logo from "../img/logo.png";
import { HeaderContainer, Left, Right } from "../style/HeaderStyled";
import { ReactComponent as SearchLogo } from "../svg/search.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <Right>
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
