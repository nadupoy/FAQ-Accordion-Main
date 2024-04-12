import { iconStar } from "./assets/images";
import Widget from "./components/Widget";
import { details } from "./constants";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <section>
        <div>
          <img src={iconStar} alt="icon-star" />
          <h1>FAQs</h1>
        </div>
        <div>
          {details.map((detail) => (
            <Widget
              key={detail.key}
              summary={detail.summary}
              content={detail.content}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
