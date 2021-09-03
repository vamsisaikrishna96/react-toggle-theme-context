import "./App.css";
import ToggleButton from "./components/toggle-button/ToggleButton";
import ThemeArea from "./components/theme-area/ThemeArea";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ToggleButton />
        <ThemeArea />
      </ThemeProvider>
    </div>
  );
}

export default App;
