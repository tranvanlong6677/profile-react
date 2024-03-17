/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes } from "react-router-dom";
import { userRoutes } from "./routes/routes";
import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment, } from "react";

function App() {

  const userRoute = userRoutes.map((route: any) => {
    const Page = route.component;
    let Layout: any = DefaultLayout;
    if (route.layout) {
      Layout = route.layout;
    } else if (route.layout === null) {
      Layout = Fragment;
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Layout>
            <Page />
          </Layout>
        }
      />
    );
  });


  return (
    <>

      <Routes>
        <Route>{userRoute}</Route>
      </Routes>
    </>
  );
}

export default App;
