import './Hero.css'
import Type from './Typer'

function Hero() {
  return (
    <section className="hero-section container py-5">
      <div className="row align-items-center mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="home-header col-md-7 text-start">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-label="wave">
              👋🏻
            </span>
          </h1>
          <h2>
            I'M <strong>MARTEINN HJALTASON</strong>
          </h2>

          {/* Typewriter in its own block */}
          <div className="typewriter-container">
            <Type />
          </div>
        </div>

        <div className="col-md-5 text-center" style={{ paddingBottom: '20px' }}>
          <img src="/src/assets/home-main.svg" alt="Hero" className="img-fluid w-100" />
        </div>
      </div>
    </section>
  )
}

export default Hero
