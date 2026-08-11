import Image from "next/image";


export default function AboutPage() {
  return (
    <main className="about-page">


      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="about-intro">

        <div className="about-intro-label">
          <p className="section-eyebrow">
            ABOUT KILBURN IN BLUE
          </p>
        </div>

        <div className="about-intro-content">

          <h1>
            Making
            <span>blue.</span>
          </h1>

          <p className="about-intro-lead">
            Cyanotype workshops and creative
            experiences built around sunlight,
            nature and community in Kilburn.
          </p>

          <div className="about-image about-image--building">
            <Image
              src="/images/about/kilburn-building.png"
              alt="Cyanotype print of a building surrounded by plants"
              fill
              sizes="(max-width: 800px) 100vw, 65vw"
              className="about-image-element"
            />
          </div>

        </div>

      </section>



      {/* =====================================================
          THE IDEA
          ===================================================== */}

      <section className="about-idea">

        <div className="about-section-label">
          <p className="section-eyebrow">
            THE IDEA
          </p>
        </div>

        <div className="about-idea-content">

          <h2>
            Making images
            <span>together.</span>
          </h2>

          <div className="about-copy">

            <p>
              Kilburn in Blue brings people together
              to make images with sunlight, natural
              materials and imagination.
            </p>

            <p>
              Our workshops explore the cyanotype
              process through hands-on making,
              experimentation and time spent
              outdoors.
            </p>

            <p>
              The result is something simple but
              distinctive: rich blue images made
              from the world around us.
            </p>

          </div>

          <div className="about-image about-image--plants">
            <Image
              src="/images/about/botanical-frame.png"
              alt="Botanical cyanotype print showing plants and natural forms"
              fill
              sizes="(max-width: 800px) 100vw, 70vw"
              className="about-image-element"
            />
          </div>

        </div>

      </section>



      {/* =====================================================
          WHAT WE OFFER
          ===================================================== */}

      <section className="about-offerings">

        <div className="about-offerings-heading">

          <div>

            <p className="section-eyebrow">
              WHAT WE OFFER
            </p>

            <h2>
              Three ways
              <span>to make blue.</span>
            </h2>

          </div>

          <p className="about-offerings-intro">
            Different ways to bring cyanotype,
            creativity and colour into your
            community.
          </p>

        </div>


        {/* MAP IMAGE */}

        <div className="about-image about-image--map">
          <Image
            src="/images/about/london-map.png"
            alt="Cyanotype map of London"
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
            className="about-image-element"
          />
        </div>


        <div className="about-offerings-grid">


          {/* 01 */}

          <article className="about-offering">

            <div className="about-offering-top">
              <span>01</span>
            </div>

            <div>

              <h3>
                Community
                <span>workshops.</span>
              </h3>

              <p>
                Community workshops in Kilburn,
                bringing people together to
                experiment with cyanotype and
                create something by hand.
              </p>

            </div>

          </article>



          {/* 02 */}

          <article className="about-offering">

            <div className="about-offering-top">
              <span>02</span>
            </div>

            <div>

              <h3>
                Personalised
                <span>posters.</span>
              </h3>

              <p>
                Want something made for your
                neighbourhood? Share your postcode
                with us and we can create a
                personalised poster for your
                location in London.
              </p>

            </div>

          </article>



          {/* 03 */}

          <article className="about-offering">

            <div className="about-offering-top">
              <span>03</span>
            </div>

            <div>

              <h3>
                Boring to Blue
                <span>Clothing™.</span>
              </h3>

              <p>
                Upcycling old, boring pieces of
                clothing from your wardrobe and
                making them blue and beautiful.
              </p>

            </div>

          </article>


        </div>

      </section>



      {/* =====================================================
          BORING TO BLUE
          ===================================================== */}

      <section className="about-clothing">

        <div className="about-clothing-label">

          <p className="section-eyebrow">
            BORING TO BLUE™
          </p>

        </div>

        <div className="about-clothing-content">

          <h2>
            Blue
            <span>&amp; beautiful.</span>
          </h2>

          <p className="about-clothing-lead">
            Old clothes don't have to stay
            boring.
          </p>

          <p className="about-clothing-text">
            Boring to Blue™ focuses on
            upcycling pieces already in your
            wardrobe and giving them a new
            life through cyanotype-inspired
            making.
          </p>

        </div>

      </section>



      {/* =====================================================
          COMMUNITY
          ===================================================== */}

      <section className="about-contact">

        <p className="section-eyebrow">
          COMMUNITY
        </p>

        <h2>
          Bring it
          <span>to your neighbourhood.</span>
        </h2>

        <div className="about-contact-content">

          <p>
            Looking to do a community event
            in your local neighbourhood?
          </p>

          <p>
            Reach out to us and let's make
            something blue.
          </p>

          <a
            href="#"
            className="about-contact-link"
          >
            <span>Contact us on WhatsApp</span>

            <span aria-hidden="true">
              ↗
            </span>

          </a>

        </div>

      </section>


    </main>
  );
}