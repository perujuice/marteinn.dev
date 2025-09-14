import './Hero.css'

function Hero() {
  return (
    <section className="hero-section container py-5">
      <div className="row align-items-center"> {/* add align-items-center */}
        <div className="home-header col-md-7">
          <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
          </h1>
          <h2>I'M <strong>MARTEINN</strong></h2>
          <p>Aspiring Software Engineer | M.Sc Data Science Student</p>
        </div>
        <div className="col-md-5 text-center" style={{ paddingBottom: '20px' }}>
          <img src="/src/assets/home-main.svg" alt="Hero" className="img-fluid w-75" />
        </div>
      </div>
    </section>
  )
}


export default Hero
