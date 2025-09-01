import * as icons from "lucide-react";
import "./CustomInput.css";

function CustomInput({ left, right, placeholder, grayArea = true }) {
  const render = (value) => {
    if (typeof value === "string") {
      const IconComponent = icons[value];
      return IconComponent ? <IconComponent size={18} /> : value;
    }
    return value;
  };

  return (
    <div className="input-box">
      {left && (
        <div className={`input-addon${grayArea ? " gray right-border" : ""}`}>
          {render(left)}
        </div>
      )}
      <input className="custom-input" placeholder={placeholder} />
      {right && (
        <div className={`input-addon${grayArea ? " gray left-border" : ""}`}>
          {render(right)}
        </div>
      )}
    </div>
  );
}

export default CustomInput;