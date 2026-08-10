import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import EventFeature from "@/components/sections/EventFeature";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="work" className="work-section">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">
                SELECTED WORK
              </p>

              <h2>
                Made with
                <span>sunlight.</span>
              </h2>
            </div>

            <p className="section-introduction">
              Cyanotype prints created through sunlight,
              natural materials and experimentation.
            </p>
          </div>

          <GalleryGrid />

        </section>
        
        <EventFeature />
      </main>
    </>
  );
}