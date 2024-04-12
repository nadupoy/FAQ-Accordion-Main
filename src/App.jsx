import { iconStar } from "./assets/images";
import Widget from "./components/Widget";
import { details } from "./constants";

const App = () => {
  return (
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
  );
};

export default App;
