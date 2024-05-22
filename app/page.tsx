import ProfileInfo from "../components/ProfileInfo";
import ContentArea from "../components/ContentArea";
import NavBar from "../components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative min-h-screen bg-main-bg pb-6 flex-wrap">
      <NavBar />
      <ProfileInfo />
      <ContentArea />
    </main>
  );
}
