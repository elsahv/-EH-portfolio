import styled from "styled-components";
import GlobalStyles from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
