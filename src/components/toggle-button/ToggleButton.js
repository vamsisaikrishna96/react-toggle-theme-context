import "./ToggleButton.css";
import { useToggleContext } from "../../context/ThemeProvider";
export default function ToggleButton() {
  const toggleTheme = useToggleContext();
  return (
    <button className="toggle-button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
