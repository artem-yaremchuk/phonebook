import React from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: "10px",
          },
        }}
      />
    </>
  );
};
