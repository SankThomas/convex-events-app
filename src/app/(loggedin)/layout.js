import Header from "@/components/header";
import React from "react";

export default function LoggedInLayout({ children }) {
  return (
    <>
      <Header />
      <div className="pt-20">{children}</div>
    </>
  );
}
