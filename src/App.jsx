import { iconStar } from "./assets/images";
import Widget from "./components/Widget";
import { details } from "./constants";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="bg-white rounded-xl flex flex-col items-center w-xs mx-auto pt-8 pb-8 shadow-xl lg:w-[560px]">
        <section className="w-xs lg:w-[480px]">
          <div className="flex items-center">
            <img src={iconStar} alt="icon-star" width={32} height={32} />
            <h1 className="text-3xl text-dark-purple font-bold ml-[16px]">
              FAQs
            </h1>
          </div>
          <div className="">
            {details.map((detail) => (
              <Widget
                key={detail.key}
                summary={detail.summary}
                content={detail.content}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
