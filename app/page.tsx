import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="work">
          <div className="section-placeholder">
            <p>THE WORK</p>
            <h2>Gallery coming next.</h2>
          </div>
        </section>
      </main>
    </>
  );
}