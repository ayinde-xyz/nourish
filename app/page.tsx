import Footer from "@/components/footer";
import Header from "@/components/header";
import MainSection from "@/components/mainSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full  relative">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
