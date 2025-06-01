// src/app/page.js
import Homepage from "./_components/home/home";
import Navbar from "./_components/layouts/Navbar/Navbar";
import Footer from "./_components/layouts/Footer/Footer";

export const metadata = {
  title: "شركة رواد الحكمة - الرئيسية",
  description: "Your description here", // Add your description
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}