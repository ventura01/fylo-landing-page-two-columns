import Image from "next/image";
import { openSans, raleway } from "../data";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTAsection from "@/components/CTAsection";
import AccessSection from "@/components/AccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main >
    <Navbar />
    <HeroSection />
    <CTAsection />
    <AccessSection />
    <Footer />
    </main>
  );
}
