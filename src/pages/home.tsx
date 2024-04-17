import router from "next/router";
import React from "react";
import { AppRoutes } from "routes";

const HomePage = () => {
  return (
    <>
      <h1 className="font-bold underline">Home Page</h1>
      <button onClick={() => router.push(AppRoutes.products)}>Test</button>
    </>
  );
};

export default HomePage;
