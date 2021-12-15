import Parcel from "single-spa-react/parcel";
import { Layout } from "../components/Layout";
import { useAuthContext } from "../contexts/Auth";
import { SignIn } from "../pages/SigIn";

export function Router() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return (
    <>
      <Layout>
        <Parcel config={() => System.import("@eps/product-module")}></Parcel>
        <Parcel config={() => System.import("@eps/category-module")}></Parcel>
      </Layout>
    </>
  );
}
