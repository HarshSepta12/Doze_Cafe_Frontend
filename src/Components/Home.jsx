import './home.css'
import { IoPerson } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti'
import { useState } from 'react'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Function to handle next slide
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Slides.length) // Loop back to 0 when reaching end
  }

  // Function to handle previous slide
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + Slides.length) % Slides.length,
    ) // Loop to last when going backward
  }

  const Slides = [
    {
      id: 1,
      image: 'public/images/banner-img.png',
      content: 'more-or-less normal distribution of letters, as opposed to using',
    },
    {
      id: 2,
      image: 'images/about-img.png',
      content: 'This is the second slide content',
    },
  ]

  return (
    <>
      <div className="container-fluid">
        <div className="bgc">
          {/* First Row - Navigation */}
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="left-section">
                  <img src="images/logo.png" alt="" height={35} />
                </div>
                <div className="right-section">
                  <li>Home</li>
                  <li>About</li>
                  <li>Coffees</li>
                  <li>Shope</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <IoPerson />
                  <CiSearch style={{ color: 'orange' }} />
                </div>
              </nav>
            </div>
          </div>

          {/* Second Row - Slider */}
          <div className="row marg">
            {/* First col - Navigation buttons */}
            <div className="col-md-2 child-marg">
              <button onClick={handlePrev}>
                <TiArrowLeftOutline />
              </button>
              <button onClick={handleNext}>
                <TiArrowRightOutline />
              </button>
            </div>

            <div className="col-md-4">
              <div className="mug">
                <img
                  src={Slides[activeIndex].image}
                  alt=""
                  width={370}
                  height={370}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="writen-content">
                <h1>coffee</h1>
                <p>Tasty Of DozeCafe</p>
                <span className="text-secondary">
                 {Slides[activeIndex].content}
                </span>
              </div>
              <div className="button">
                <button className="btn btn1">About Us</button>
                <button className="btn btn2 bg-dark text-light">
                  Call Now
                </button>
              </div>
            </div>

            {/* Second col - Displaying the active slide */}
          </div>
        </div>

        {/*---------------------------- After BGC -----------------------------*/}
        <div className="row">
          {/* --------COl First ------------- */}
          <div className="col-md-12 mt-5 text-center ">
            <h2>OUR COFFEE OFFER</h2>
            <img src="images/bulit-icon.png" alt="" />
          </div>

          {/* --------COl Second ------------- */}
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center gap-4 mt-5 mb-5">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="images/img-1.png"
                  className="card-img-top"
                  alt="img1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bolder">
                    TYPES OF COFFEE
                  </h5>
                  <p className="card-text text-center">
                    Looking at its layout. The point of
                  </p>
                </div>
                <button className="card-btn">READ MORE</button>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="images/img-2.png"
                  className="card-img-top"
                  alt="img1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bolder">
                    TYPES OF COFFEE
                  </h5>
                  <p className="card-text text-center">
                    Looking at its layout. The point of
                  </p>
                </div>
                <button className="card-btn">READ MORE</button>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="images/img-3.png"
                  className="card-img-top"
                  alt="img1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bolder">
                    TYPES OF COFFEE
                  </h5>
                  <p className="card-text text-center">
                    Looking at its layout. The point of
                  </p>
                </div>
                <button className="card-btn">READ MORE</button>
              </div>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="images/img-4.png"
                  className="card-img-top"
                  alt="img1"
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bolder">
                    TYPES OF COFFEE
                  </h5>
                  <p className="card-text text-center">
                    Looking at its layout. The point of
                  </p>
                </div>
                <button className="card-btn">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
