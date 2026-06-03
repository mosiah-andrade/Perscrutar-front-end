import React from "react";
import Moldura from "../componentes/Moldura";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Moldura>
      {children}
    </Moldura>
  );
}