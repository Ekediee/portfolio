import ProfileInfo from "../components/ProfileInfo";
import ContentArea from "../components/ContentArea";

export default function Home() {
  return (
    <main className="flex relative min-h-screen bg-main-bg pb-6 flex-wrap">
      <ProfileInfo />
      <ContentArea />
    </main>
  );
}
