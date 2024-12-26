"use client";
import { Counter } from "../components/counter/Counter";
import { StoreProvider } from "../StoreProvider";

export default function IndexPage() {
  return 
  <StoreProvider><Counter /></StoreProvider>;
}

/*
export const metadata: Metadata = {
  title: "Redux Toolkit(Test)",
};*/
