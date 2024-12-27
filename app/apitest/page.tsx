"use client";
import { TestRequest } from "../components/testRequest/TestRequest";
import { StoreProvider } from "../StoreProvider";

export default function IndexPage() {
  return (
  <StoreProvider>
    <main><TestRequest /></main>
  </StoreProvider>
  )
}

/*
export const metadata: Metadata = {
  title: "Redux Toolkit(Test)",
};*/
