import logo from "./logo.svg";
import "./App.css";
import img1 from "./images/desktop/image-header.jpg";
import img2 from "./images/icon-arrow-down.svg";
import img3 from "./images/desktop/image-transform.jpg";
import img4 from "./images/desktop/image-stand-out.jpg";
import img5 from "./images/desktop/image-graphic-design.jpg";
import img6 from "./images/desktop/image-photography.jpg";
function App() {
  return (
    <>
      <header>
        <h2>sunnyside</h2>
        <nav className="nav-bar">
          <ul className="nav-bar">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <button>contact</button>
        </nav>
      </header>
      <h1 className="yo">WE ARE CREATIVES</h1>
      <img className="yo1" src={img2} alt="" srcset="" />
      <img className="hii" src={img1} alt="" srcset="" />
      <section>
        <div className="container1">
          <h1>
            Transform your <br /> brand
          </h1>
          <p>
            We are full-service creative agency specializing in helping grow
            fast.Engage your clients through compelling visuals that do most of
            the marketing for you.
          </p>
          <h5>LEARN MORE</h5>
        </div>
        <div className="container2">
          <img className="container2-img" src={img3} alt="" />
        </div>
        <div className="container3">
          <img className="container3-img" src={img4} alt="" />
        </div>
        <div className="container4">
          <h1>
            Transform your <br /> brand
          </h1>
          <p>
            We are full-service creative agency specializing in helping grow
            fast.Engage your clients through compelling visuals that do most of
            the marketing for you.
          </p>
          <h5>LEARN MORE</h5>
        </div>
        <div className="container5">
          <div className="hii">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable.We deliver
              <br />
              artwork that underscores your brand message <br />
              and potential clients attention
            </p>
          </div>
          <img className="container5-img" src={img5} alt="" />
        </div>
        <div className="container6">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable.We deliver
            <br />
            artwork that underscores your brand message <br />
            and potential clients attention
          </p>
          <img className="container6-img" src={img6} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
