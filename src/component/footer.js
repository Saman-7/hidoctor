import winnerLogo from "../img/winner.png";
import {
  FooterContainer,
  LeftFooter,
  RightFooter,
} from "../style/FooterStyled";
import { ReactComponent as InstaLogo } from "../svg/instagram.svg";
import { ReactComponent as TelLogo } from "../svg/telegram.svg";

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
        loading="lazy"
      ></iframe>
      {/* کلیه حقوق محفوظ و متعلق به مجله پزشکی دکتر سلام است بازنشر مطالب فقط با ذکر لینک مستقیم مجاز است */}
    </FooterContainer>
  );
};

export default Footer;
