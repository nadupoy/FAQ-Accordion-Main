import { useState } from "react";
import { iconPlus, iconMinus } from "../assets/images";

const Widget = ({ summary, content }) => {
  const [icon, changeIcon] = useState(iconPlus);

  function toggleDetails(event) {
    if (event.target.open !== false) {
      changeIcon(iconMinus);
    } else {
      changeIcon(iconPlus);
    }
  }

  return (
    <details onToggle={toggleDetails}>
      <summary>
        <div>
          <p>{summary}</p>
          <img src={icon} alt="icon" />
        </div>
      </summary>
      <p>{content}</p>
    </details>
  );
};

export default Widget;
