import Parcel from "single-spa-react/parcel";
import { Suspense } from "react";
import { Layout } from "../components/Layout";

export function Router() {
  return (
    <>
      <Layout>
        <Parcel config={() => System.import("@eps/product-module")}></Parcel>

        <Parcel config={() => System.import("@eps/category-module")}></Parcel>
      </Layout>
    </>
  );
}
