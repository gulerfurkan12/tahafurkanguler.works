import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Logo, Wave, Wave2 } from "./components/icons/index";
import { BsBehance, BsInstagram, BsPlus } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {CircleProgress} from 'react-gradient-progress'
import { useInView } from 'react-intersection-observer';
import {getTable} from '../lib/airtable'



function Home({works}) {
  if(works){
    console.log(works[0].Image);
  }
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [percentage, setPercentege] = useState(0);
  const header = useRef(null);
  const toggleButton = useRef(null);
  const menu = useRef(null);

  const {ref, inView, entry} = useInView()
  

  if (typeof window !== "undefined") {
    const handleScroll = () => {
      let headerCurrent = header.current;
      let offset = window.scrollY;
      if (offset > 125) {
        headerCurrent?.classList.add("sticky");
      } else {
        headerCurrent?.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }

  const handleClick = () => {
    let menuCurrent = menu.current;
    menuCurrent?.classList.toggle("online");
  };

  return (
    <>
      <header className="main-header header" ref={header}>
        <nav
          id="Menu"
          className="navbar navbar-expand-lg navbar-light justify-content-between"
          ref={menu}
        >
          <div className="container">
            <a href="#" className="logo d-flex align-items-center">
              <Logo fill="#fff" />
            </a>
            <div className="nav-menus d-none d-lg-block" id="navbarNavDropdown">
              <ul className="navbar-nav align-items-center justify-content-between ml-5">
                <li className="nav-item">
                  <a className="nav-link" href="#about-me">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#works">
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="mailto:gulertahafurkan@hotmail.com"
                  >
                    <button className="btnn" type="button">
                      Say Hi !
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mobile-menu">
              <div className="mobile-menu-wrap">
                <a className="mobile-menu-item" href="#">
                  About Me
                </a>
                <a className="mobile-menu-item" href="#">
                  Services
                </a>
                <a className="mobile-menu-item" href="#">
                  Works
                </a>
                <a className="mobile-menu-item" href="#">
                  Say Hi !
                </a>
              </div>

              <button
                id="ToggleButton"
                className="hamburger js-hover"
                ref={toggleButton}
                onClick={handleClick}
              >
                <div className="hamburger__line hamburger__line--01"></div>
                <div className="hamburger__line hamburger__line--02"></div>
                <div className="hamburger__line hamburger__line--03"></div>
                <div className="hamburger__line hamburger__line--cross01"></div>
                <div className="hamburger__line hamburger__line--cross02"></div>
              </button>
              <div className="splash"></div>
            </div>
          </div>
        </nav>
      </header>
      <main className="">
        <section className="slide" id="about-me">
          <img className="shape cone" src="/images/Cone.png" />
          <img className="shape cylin" src="/images/Cylinder.png" />
          <div className="container">
            <div className="row align-items-center pt-5">
              <div className="col-lg-7">
                <div className="text-box">
                  <Fade
                    direction="left"
                    cascade={true}
                    duration={750}
                    delay={200}
                    damping={0.25}
                  >
                    <div
                      data-aos="fade-right"
                      className="head-line d-flex align-items-center"
                    >
                      <h1>Hi, I’m Taha Furkan Güler</h1>
                      <img src="/images/hello.png" />
                    </div>
                    <p className="mt-3">
                      Hi, I'm Furkan, I'm 22 years old and I live in Istanbul. I
                      am a designer who likes to get away from the ordinary with
                      creative thoughts and expand these thoughts with my
                      curiosity. I always keep my sense of curiosity awake to
                      nurture my artistic side. In my opinion, design should be
                      a solution to problems. That's why I'm here for you
                    </p>
                    <a
                      href="https://www.linkedin.com/in/taha-furkan-güler-a11261145/?ref=tahafurkanguler.works"
                      // rel="noopener"
                      className="btnn mt-3"
                    >
                      About Me
                    </a>
                  </Fade>
                  <img className="cube" src="/images/Cube.png" />
                </div>
              </div>
              <div className="col-lg-5">
                <Fade direction="right" duration={750}>
                  <div className="image-box" data-aos="fade-left">
                    <img className="pp" src="/images/taha-furkan-guler.png" />
                    <img className="shape thor" src="/images/Thorus.png" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 mt-3">
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.behance.net/tahafurkangler/?ref=tahafurkanguler.works"
                      // ref="noopener"
                      target="_blank"
                    >
                      <BsBehance size={39} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/taha-furkan-güler-a11261145/?ref=tahafurkanguler.works"
                      // ref="noopener"
                      target="_blank"
                    >
                      <FaLinkedinIn size={34} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/furkanguuler/?ref=tahafurkanguler.works"
                      // ref="noopener"
                      target="_blank"
                    >
                      <BsInstagram size={32} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="wave">
          <Wave2 id="wave-2" />
          <Wave id="wave" />
        </div>
        <section className="services area" id="services">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="head">
                <Fade
                  direction="up"
                  cascade={true}
                  duration={650}
                  delay={50}
                  damping={0.25}
                >
                  <h2 className="heading">MY EXPERTISE</h2>
                  <p>Innovative Solution</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">

              <Fade direction="up" delay={100} className="col-lg-4 col-md-12">
                  <div data-aos="zoom-in" className="services-box">
                    <div className="img">
                      <img src="/images/web-design-service.png" />
                    </div>
                    <div className="s-text-box">
                      
                      <h3>Web Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
              </Fade>

              <Fade direction="up" delay={150} className="col-lg-4 col-md-12">
                  <div data-aos="zoom-in" className="services-box">
                    <div className="img">
                      <img src="/images/branding.png" />
                    </div>
                    <div className="s-text-box">
                      <h3>Branding</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
              </Fade>

              <Fade direction="up" delay={200} className="col-lg-4 col-md-12">
                  <div data-aos="zoom-in" className="services-box">
                    <div className="img">
                      <img src="/images/market.png" />
                    </div>
                    <div className="s-text-box">
                      <h3>Marketing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="skills area pt-6 pb-6">
          <div className="container">
            <div className="row">
              <div className="head">
              <Fade
                  direction="up"
                  cascade={true}
                  duration={650}
                  delay={50}
                  damping={0.25}
                >
                <h2 className="heading">MY SKILLS</h2>
                <p>Modern and unique designs experiences</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="container mt-6" ref={ref}>
            <div className="row align-items-center justify-content-center">
              <Fade direction="up" delay={100}  className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7"
              >
                <div className="donut">
                    <CircleProgress percentage={inView ? 80 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px" primaryColor={['#f1b50f','#fec11a']}  />
                    <p>Photoshop</p>
                  </div>
              </Fade>


              <Fade direction="up" delay={150} className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7">
                <div className="donut">
                <CircleProgress percentage={inView ? 85 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px" primaryColor={['#f1b50f','#fec11a']}  />
                  <p>Illustrator</p>
                </div>
              </Fade>

              <Fade direction="up" delay={200} className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7">
                <div className="donut">
                <CircleProgress percentage={inView ? 85 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px" primaryColor={['#f1b50f','#fec11a']}  />
                  <p>Adobe XD</p>
                </div>
              </Fade>

              <Fade direction="up" delay={250} className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7">
                <div className="donut" >
                <CircleProgress percentage={inView ? 85 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px" primaryColor={['#f1b50f','#fec11a']}  />
                  <p>Figma</p>
                </div>
              </Fade>

              <Fade direction="up" delay={300} className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7">
                <div className="donut">
                <CircleProgress percentage={inView ? 80 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px"  primaryColor={['#f1b50f','#fec11a']}  />
                  <p>HTML</p>
                </div>
              </Fade>

              <Fade direction="up" delay={350} className="col-xl-2 col-lg-4 col-md-4 col-sm-5 col-7">
                <div className="donut">
                <CircleProgress percentage={inView ? 75 : 0} width={120} strokeWidth={9} fontColor="#333" fontSize="25px" primaryColor={['#f1b50f','#fec11a']}  />
                  <p>CSS</p>
                </div>
              </Fade>

            </div>
          </div>
        </section>
        <section className="works area pt-0 pb-6" id="works">
          <div className="container">
            <div className="row justify-content-center">
              <div className="head text-center">
              <Fade
                  direction="up"
                  cascade={true}
                  duration={650}
                  delay={50}
                  damping={0.25}
                >
                <h2 className="heading">PORTFOLIO</h2>
                <p>Featured Works</p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <Fade direction="left" duration={1000} delay={200} className="col-12">
                <article className="work-post">
                  <a href={works[0]?.Link}>
                    <img src={works[0]?.Image[0].thumbnails.large.url} alt={works[0]?.Name} />
                    <div className="box-content">
                      <div className="cat-view">
                      {works[0]?.Tags.map((tag, i) => (
                            <span className="btnn-2 me-4" key={i}>{tag}</span>
                        ))}         
                      </div>
                      <div className="post-text-box">
                        <div className="swiper-heading mt-3">
                          <h3>{works[0]?.Name}</h3>
                        </div>
                        <div className="swipe-little mt-3">
                          <p>
                            {works[0]?.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </Fade>
              <Fade direction="left" duration={1000} delay={100} className="col-lg-8 mt-3">
                <article data-aos="fade-left" className="work-post">
                  <a href={works[1]?.Link}>
                    <img src={works[1]?.Image[0].thumbnails.large.url} alt={works[1]?.Name} />
                    <div className="box-content">
                      <div className="cat-view-2">
                        {works[1]?.Tags.map((tag, i) => (
                            <span className="btnn-2 me-4" key={i}>{tag}</span>
                        ))}                       
                      </div>
                      <div className="post-text-box">
                        <div className="swiper-heading">
                          <h3>{works[1]?.Name}</h3>
                        </div>
                        <div className="swipe-little swipe-little-2 mt-2">
                          <p>
                            {works[1]?.Description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              </Fade>
              <Fade direction="right" duration={1000} delay={150} className="col-lg-4">
                <div className="logo-boxs">
                  <div className="col-lg-12 mt-3">
                    <article data-aos="fade-right" className="work-post-2">
                      <a href={works[2]?.Link}>
                        <img src={works[2]?.Image[0].thumbnails.large.url} alt={works[2]?.Name} />
                        <div className="box-content">
                          <div className="cat-view-2 c-cat-view">
                          {works[2]?.Tags.map((tag, i) => (
                            <span className="btnn-2 me-4" key={i}>{tag}</span>
                        ))}  
                          </div>
                          <div className="post-text-box post-text-box-2">
                            <div className="swiper-heading">
                              <h3>{works[2]?.Name}</h3>
                            </div>
                           
                          </div>
                        </div>
                      </a>
                    </article>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <article data-aos="fade-left" className="work-post-2">
                      <a href={works[3]?.Link}>
                        <img src={works[3]?.Image[0].thumbnails.large.url} alt={works[3]?.Name} />
                        <div className="box-content">
                          <div className="cat-view-2 c-cat-view">
                          {works[3]?.Tags.map((tag, i) => (
                            <span className="btnn-2 me-4" key={i}>{tag}</span>
                          ))}  
                          </div>
                          <div className="post-text-box post-text-box-2">
                            <div className="swiper-heading">
                              <h3>{works[3]?.Name}</h3>
                            </div>
                            
                          </div>
                        </div>
                      </a>
                    </article>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="review-btn text-center mt-5">
              <a
                href="https://www.behance.net/tahafurkangler?ref=tahafurkanguler.works"
                // ref="noopener"
                className="btnn-3"
              >
                See More <BsPlus />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-5">
        <div className="footer-inner-wrap">
          <img className="ft-shape cube-2" src="/images/Cube.png" />
          <img className="ft-shape sphere" src="/images/Sphere.png" />
          <img className="ft-shape helix" src="/images/Helix.png" />
          <img className="ft-shape pyramid" src="/images/Pyramid.png" />
          <div className="wave-block animation-wave"></div>
          <div className="text-box text-center pt-5-5">
           <Fade direction="up" cascade={true} duration={650} delay={50} damping={0.25}>
           <h1>Let's work together</h1>
            <span className="mt-3">
              I can help you <b>boost</b> your project
            </span>
            <a href="#" className="btnn mt-5">
              Let’s Talk
            </a>
           </Fade>
           <Fade duration={1000} delay={600}>
              <ul
              className="
                f-social-links
                mt-5
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <li>
                <a
                  href="https://www.behance.net/tahafurkangler/?ref=tahafurkanguler.works"
                  // ref="noopener"
                >
                  <BsBehance size={39} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/taha-furkan-güler-a11261145/?ref=tahafurkanguler.works"
                  // ref="noopener"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/furkanguuler/?ref=tahafurkanguler.works"
                  // ref="noopener"
                >
                  <BsInstagram size={33} />
                </a>
              </li>
            </ul>
           </Fade>
          </div>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const works = await getTable("Works");
  return {
    props: {
      works,
    },
    revalidate: 600,
  };
}

export default Home