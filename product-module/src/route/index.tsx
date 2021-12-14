import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCreate } from "../pages/ProductCreate";
import { ProductList } from "../pages/ProductList";
import { ProductUpdate } from "../pages/ProductUpdate";
import { ProductView } from "../pages/ProductView";

export function Router() {
  return (
    <>
      <BrowserRouter basename="product">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/create" element={<ProductCreate />} />
          <Route path="/update/:id" element={<ProductUpdate />} />
          <Route path="/view/:id" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
