import "./ThemeArea.css";
import { useThemeContext } from "../../context/ThemeProvider";
export default function ThemeArea() {
  const theme = useThemeContext();
  const styles = {
    backgroundColor: theme ? "#FFF" : "#000",
    color: theme ? "#000" : "#FFF",
  };
  return (
    <div className="theme-area" style={styles}>
      {theme ? "Light" : "Dark"} Theme
    </div>
  );
}
