"use client";
import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace("/pt-BR/");
  }, []);
  return <main className="min-h-dvh grid place-items-center"></main>;
}
