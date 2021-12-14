import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryList } from "../pages/CategoryList";

export function Router() {
  return (
    <>
      <BrowserRouter basename="category">
        <Routes>
          <Route caseSensitive path="/" element={<CategoryList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
