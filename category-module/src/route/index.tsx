import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CategoryCreate } from "../pages/CategoryCreate";
import { CategoryList } from "../pages/CategoryList";
import { CategoryUpdate } from "../pages/CategoryUpdate";
import { CategoryView } from "../pages/CategoryView";

export function Router() {
  return (
    <>
      <BrowserRouter basename="category">
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/create" element={<CategoryCreate />} />
          <Route path="/update/:id" element={<CategoryUpdate />} />
          <Route path="/view/:id" element={<CategoryView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
