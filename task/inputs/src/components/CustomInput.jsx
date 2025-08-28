import { CircleArrowUp } from "lucide-react";
import "./CustomInput.css";

function CustomInput({ left, right, placeholder, grayArea = true }) {
  return (
    <div className="input-box">
      {left && (
        <div className={`input-addon${grayArea ? " gray right-border" : ""}`}>
          {left === "icon" ? <CircleArrowUp size={18} /> : left}
        </div>
      )}
      <input className="custom-input" placeholder={placeholder} />
      {right && (
        <div className={`input-addon${grayArea ? " gray left-border" : ""}`}>
          {right === "icon" ? <CircleArrowUp size={18} /> : right}
        </div>
      )}
    </div>
  );
}

export default CustomInput;