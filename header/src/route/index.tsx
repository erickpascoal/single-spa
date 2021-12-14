import Parcel from "single-spa-react/parcel";
import { Suspense } from "react";
import { Layout } from "../components/Layout";

export function Router() {
  return (
    <>
      <Layout>
        <Suspense fallback={"Carregando..."}>
          <Parcel config={() => System.import("@eps/product-module")}></Parcel>
        </Suspense>

        <Parcel config={() => System.import("@eps/category-module")}></Parcel>
      </Layout>
    </>
  );
}
