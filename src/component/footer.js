import styled from "styled-components";
import winnerLogo from "../img/winner.png";
import { ReactComponent as InstaLogo } from "../svg/instagram.svg";
import { ReactComponent as TelLogo } from "../svg/telegram.svg";

const FooterContainer = styled.footer`
  background-color: #e7feff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
`;

const RightFooter = styled.ul`
  line-height: 30px;
  font-size: 14px;

  & li:first-child {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    border-right: 5px solid #35ebff;
    padding-right: 10px;
  }
`;

const LeftFooter = styled.ul`
  position: relative;
  line-height: 50px;
  margin-bottom: 30px;

  & li {
    font-weight: 600;
  }

  & li.logo {
    display: flex;
    justify-content: start;
    align-items: center;

    & svg {
      width: 40px;
    }

    & span {
      font-size: 20px;
    }
  }

  & li span {
    font-size: 14px;
    margin-right: 10px;
    font-weight: normal;
  }
  & img {
    max-width: 100px;
    position: absolute;
    bottom: -50px;
    left: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <RightFooter>
        <li>دسته بندی ها</li>
        <li>- اخبار پزشکی</li>
        <li>- بیماری ها</li>
        <li>- داروها</li>
        <li>- دانرو راهنمای شهر</li>
        <li>- وبلاگ دانرو</li>
      </RightFooter>
      <LeftFooter>
        <li>
          ادرس:
          <span>
            تهران - پاسداران - خيابان نيستان ۸ -تقاطع خيابان رام و نيستان ٩ -
            پلاك ٥
          </span>
        </li>
        <li className="logo">
          <InstaLogo />
          اینستاگرام: <span>ec.iau.ir</span>
        </li>
        <li className="logo">
          <TelLogo />
          تلگرام: <span>ec.iau.ir</span>
        </li>
        <img src={winnerLogo} alt="winner" />
      </LeftFooter>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.310019348087!2d51.45711883475021!3d35.7694786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06e9342d6f27%3A0x5b9f16707661c339!2sIslamic%20Azad%20Univesity%20E-Campus!5e0!3m2!1sen!2snl!4v1657963334320!5m2!1sen!2snl"
        width="300"
        height="300"
        style={{
          border: "none",
          borderRadius: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* کلیه حقوق محفوظ و متعلق به مجله پزشکی دکتر سلام است بازنشر مطالب فقط با ذکر لینک مستقیم مجاز است */}
    </FooterContainer>
  );
};

export default Footer;
