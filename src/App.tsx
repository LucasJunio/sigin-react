import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          {routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
