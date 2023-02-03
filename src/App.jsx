import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "././pages/single/Single";
import { productInputs, userInputs } from "./inputsSource";
import New from "./pages/new/New";
import "./style/dark.scss";
import { useDarkMode } from "./reducer/ModeContext";

function App() {
  const [{ darkMode }] = useDarkMode();

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="add"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="add"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
