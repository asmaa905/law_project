// src/app/page.js
import Homepage from "./_components/home/home";


export const metadata = {
  title: "شركة رواد الحكمة - الرئيسية",
  description: "Your description here", // Add your description
}

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}