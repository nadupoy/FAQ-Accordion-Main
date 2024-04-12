import { useState } from "react";
import { iconPlus, iconMinus } from "../assets/images";

const Widget = ({ summary, content }) => {
  const [icon, openDialog] = useState(iconPlus);

  return (
    <details>
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
