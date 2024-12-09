import './home.css';
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";


const Home = () => {

  return (
    <>
      <div className='container-fluid'>
        <div className='bgc'>

          {/* first row */}
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="left-section">
                  <img src="/public/images/logo.png" alt="" height={35} />
                </div>
                <div className="right-section">
                  <li>Home</li>
                  <li>About</li>
                  <li>Coffees</li>
                  <li>Shope</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <IoPerson />
                  <CiSearch style={{ color: "orange" }} />
                </div>

              </nav>
            </div>
          </div>

          {/* second row */}
          <div className="row slider">
            <div className="col-md-6 mar-1 d-flex justify-content-center align-items-center">
              <div className="arrow-button">
                <div className="arrow-icon mar-2">
                  <h1><TiArrowLeftOutline /></h1>
                  <h1><TiArrowRightOutline /></h1>
                </div>

              </div>
              <div className="mug">
                <img src="/public/images/banner-img.png" alt="" width={440} height={440} />
              </div>

            </div>
            <div className="col-md-6">
              <div className="writen-content">
                <h1>coffee</h1>
                <p>Tasty Of DozeCafe</p>
                <span className='text-secondary'>more-or-less normal distribution of letters, as opposed to using</span>
              </div>
              <div className="button">
                <button className='btn btn1'>About Us</button>
                <button className='btn btn2 bg-dark text-light'>Call Now</button>
              </div>
            </div>

          </div>


        </div>


        {/*----------------------------After BGC -----------------------------*/}
        <div className="row ">
          {/* --------COl First ------------- */}
          <div className="col-md-12 mt-5 text-center ">
            <h2>OUR COFFEE OFFER</h2>
            <img src="/public/images/bulit-icon.png" alt="" />
          </div>

          {/* --------COl Second ------------- */}
          <div className="row">
          <div className="col-md-12 d-flex justify-content-center align-items-center gap-4 mt-5 mb-5">
          <div className="card" style={{width: "18rem"}}>
            <img src="/public/images/img-1.png" className="card-img-top" alt="img1" />
            <div className="card-body ">
              <h5 className="card-title text-center fw-bolder">TYPES OF COFFEE</h5>
              <p className="card-text text-center">looking at its layout. The point of</p>
            </div>
            <button className='card-btn'>READ MORE</button>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/public/images/img-2.png" className="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">TYPES OF COFFEE</h5>
              <p className="card-text text-center">looking at its layout. The point of</p>
            </div>
            <button className='card-btn'>READ MORE</button>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/public/images/img-3.png" className="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">TYPES OF COFFEE</h5>
              <p className="card-text text-center">looking at its layout. The point of</p>
            </div>
            <button className='card-btn'>READ MORE</button>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src="/public/images/img-4.png" className="card-img-top" alt="img1" />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">TYPES OF COFFEE</h5>
              <p className="card-text text-center">looking at its layout. The point of</p>
            </div>
            <button className='card-btn'>READ MORE</button>
          </div>
         
          </div>
          </div>
         
        </div>
      </div>



    </>
  );
}

export default Home;
