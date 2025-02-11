import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import UploadVideo from "./components/uploadVideo";
import View from "./components/View";

const HandleRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route index element={<h1>Home Page</h1>} /> */}
        <Route path="upload" element={<UploadVideo />} />
        <Route path="view" element={<View />} />
        <Route path="*" element={<h1>404 No page found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default HandleRoutes;
