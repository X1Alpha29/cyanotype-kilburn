import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <Image
          src="/images/Hero.png"
          alt="Artist working on a cyanotype-inspired artwork"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />

        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          CYANOTYPE WORKSHOPS · KILBURN · LONDON
        </p>

        <h1 className="hero-title">
          Kilburn
          <span>in Blue</span>
        </h1>

        <p className="hero-description">
          Making images with sunlight, nature and imagination.
        </p>

        <a href="#work" className="hero-cta">
          Explore the work
          <span>↓</span>
        </a>
      </div>

      <div className="hero-scroll">
        <span />
        Scroll to explore
      </div>
    </section>
  );
}