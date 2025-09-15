import './Hero.css'

const Hero2 = () => (
  <section className="hero-section container py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7">
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>
            I have always been a bit of a nerd, with a passion for technology and a love for learning. My journey in the tech world has been fueled by curiosity and a desire to create.
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img
            src="/src/assets/react.svg" // Replace with your own image
            alt="Marteinn"
            className="img-fluid rounded"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  </section>
)

export default Hero2