// In your App.tsx or equivalent file
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

const colors = {
  PrimaryColorScheme: {
    50: "#6cabe0",
    100: "#4293d7",
    200: "#2d87d2",
    300: "#2979bd",
    400: "#246ca8",
    500: "#1b517e",
    600: "#123654",
    700: "#0e283f",
    800: "#091b2a",
    900: "#000000",
  },
};

const theme = extendTheme({ colors });

const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
];

const componentRoute = (
  <Routes>
    {router.map((item: any) => {
      return <Route key={item.path} path={item.path} element={item.element} />;
    })}
  </Routes>
);

function App() {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <BrowserRouter>
        <>
          <Suspense fallback={<div>Mohon tunggu...</div>}>
            {componentRoute}
          </Suspense>
        </>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
