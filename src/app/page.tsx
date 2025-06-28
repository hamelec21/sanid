import TarjetaPresentacion from "@/app/components/TarjetaPresentacion";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <TarjetaPresentacion />
      </main>
      <Footer />
    </div>
  );
}
