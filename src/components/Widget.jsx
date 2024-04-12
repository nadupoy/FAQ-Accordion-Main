import { useState } from "react";
import { iconPlus, iconMinus } from "../assets/images";

const Widget = ({ summary, content }) => {
  const [icon, changeIcon] = useState(iconPlus);

  function toggleDetails(event) {
    if (event.target.open === true) {
      changeIcon(iconMinus);
    } else {
      changeIcon(iconPlus);
    }
  }

  return (
    <details onToggle={toggleDetails} className="text-base mt-4 break-words">
      <summary className="list-none">
        <div className="flex items-center justify-between">
          <p className="max-w-56 text-dark-purple font-semibold">{summary}</p>
          <img src={icon} alt="icon" width={24} height={24} />
        </div>        
      <hr className="border-light-pink mt-4" />
      </summary>
      <p className="max-w-64 mt-4 text-sm text-grayish-purple">{content}</p>
    </details>
  );
};

export default Widget;
