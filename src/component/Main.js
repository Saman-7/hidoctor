import styled from "styled-components";
import imgTest from "../img/1.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  & .title {
    font-size: 30px;
    font-weight: 900;
    margin: 30px 0px;
  }

  & .boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    margin-bottom: 50px;

    & .category {
      text-align: center;
      color: #0a3380;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 450px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }

  & img {
    max-width: 100%;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.03);
  }

  & h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 15px 0px;
  }
  & p {
    font-size: 13px;
    line-height: normal;
  }

  & a {
    position: absolute;
    bottom: 15px;
    background-color: #fff000;
    padding: 10px 30px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: #ffd800;
    }
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <div className="boxes">
        <div className="category">
          <h1 className="title">زیبایی</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">تغذیه</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">جنسی</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">بیماری ها</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">داروها</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">روانشناسی</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">زنان و زایمان</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">حیوانات خانگی</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>

        <div className="category">
          <h1 className="title">سلامت اعضای خانواده</h1>
          <Box>
            <img src={imgTest} alt="test" />
            <h1>بهترین کرم های ضد آفتاب برای انواع پوست</h1>
            <p>
              زمانی که در راه‌روی داروخانه ها در حال قدم زدن هستید و در صف
              انتظار تحویل دارای خود قرار دارید، بدون شک با تعداد زیادی از
              کرم‌های ضد آفتاب از برندهای ...
            </p>
            <a>مطالب بیشتر</a>
          </Box>
        </div>
      </div>
    </ContentContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 70px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Content />
    </MainContainer>
  );
};

export default Main;
