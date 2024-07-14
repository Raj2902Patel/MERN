export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>RAJ PATEL</p>
              <h1>Welcome to MERN</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, illo. Facere asperiores deleniti, saepe eaque
                accusantium sapiente, quaerat aperiam eligendi atque tempore
                maiores. Modi magnam voluptatibus facere aliquid! Molestias,
                itaque?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, illo. Facere asperiores deleniti, saepe eaque
                accusantium sapiente, quaerat aperiam eligendi atque tempore
                maiores. Modi magnam voluptatibus facere aliquid! Molestias,
                itaque?
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, illo. Facere asperiores deleniti, saepe eaque
                accusantium sapiente, quaerat aperiam eligendi atque tempore
                maiores. Modi magnam voluptatibus facere aliquid! Molestias,
                itaque?
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="400"
              />
            </div>
          </div>
        </section>

        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>registered companies</p>
            </div>

            <div className="div1">
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="div1">
              <h2>500+</h2>
              <p>well known Developers</p>
            </div>

            <div className="div1">
              <h2>24/7</h2>
              <p>services</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
