import './Hero.css'
import portraitImg from '../../assets/portrait.png' // << import the asset

const Hero2 = () => (
  <section className="hero-section hero2-spacer container">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7 home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple">INTRODUCE</span> MYSELF
          </h1>

          <p className="home-about-body">
            I have always been a bit of a nerd, with a passion for technology and a love for learning. 
            My journey in the tech world is just getting started! But, I think I have learned a thing or two… 🤓
          </p>

          <p className="home-about-body">
            I am proficient in classics like
            <i>
              <b className="purple"> Java, Python, C#, and JavaScript </b>
            </i>
            <br />
            <br />
            Currently, I’m expanding my skill set by diving into
            <i>
              <b className="purple"> TypeScript, React, and most importantly </b>
            </i>
          </p>
          
          <h2 className="data-science">DATA SCIENCE</h2>
        </div>
        <div className="col-md-5 text-center">
          <img
            src={portraitImg}
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