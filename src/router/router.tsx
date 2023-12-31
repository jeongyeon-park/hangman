import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../pages/main";
import Game from "../pages/game";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
