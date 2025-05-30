import Head from "next/head";

import Homepage from "./_components/home/home";
import Navbar from "./_components/layouts/Navbar/Navbar";
import Footer from "./_components/layouts/Footer/Footer";

export default function Home({ searchGlobal, setSearchGlobal }) {
  return (
    <>
      <Head>
        <title>شركة رواد الحكمة - الرئيسية</title>
        <style></style>
      </Head>
      <Navbar />
      {/* here is view-router */}
      {/* it shows home 
      about
      services
      blog
      consulting
      contact us
      auth/login
      auth/register */}
      <Homepage />
      <Footer />
    </>
  );
}
