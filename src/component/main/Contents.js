import { Box, ContentContainer } from "../../style/main/ContantsStyled";
import zibayi from "../../img/zibayi.jpg";
import taghzie from "../../img/taghzie.jpg";
import jensi from "../../img/jensi.jpg";
import daro from "../../img/daro.jpg";
import ravanshenasi from "../../img/ravanshenasi.jpg";
import tebsonati from "../../img/tebsonati.jpg";

const data = [
  {
    type: "زیبایی",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: zibayi,
  },
  {
    type: "تغذیه",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: taghzie,
  },
  {
    type: "جنسی",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: jensi,
  },
  {
    type: "داروها",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: daro,
  },
  {
    type: "روانشناسی",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: ravanshenasi,
  },
  {
    type: "طب سنتی",
    title: "بهترین کرم های ضد آفتاب برای انواع پوست",
    caption:
      "زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از کرم‌های ضد آفتاب از برندهای ...",
    image: tebsonati,
  },
];

const Content = () => {
  return (
    <ContentContainer>
      <div className="boxes">
        {data.map(({ type, title, caption, image }) => (
          <div className="category">
            <h1 className="title">{type}</h1>
            <Box>
              <img src={image} alt="test" />
              <h1>{title}</h1>
              <p>{caption}</p>
              <a href="/more">مطالب بیشتر</a>
            </Box>
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default Content;
