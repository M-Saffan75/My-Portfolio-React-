import { useState } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Services from './Services';
import Contact from './Contact';
import Typewriter from 'typewriter-effect';
import logomakr from '../src/images/simple.png'
import proper from '../src/images/perfect.jpg'
import me from '../src/images/profile.JPG'
import './App.css'

function App() {

  const [show, setShow] = useState(false)

  const [] = useState({
    title: "Hello",
    titleTwo: "Here",
    titleThree: "Hey",
  });

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  }


  /* Submit With Firebase Start */


  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, msg } = userData;
    if(name && email && msg)
    {
    const res = fetch()
    fetch("https://userrecord-ca202-default-rtdb.firebaseio.com/DataRecords.json",
      { method: "Post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, msg }), }
    );

    if (res) {
      setUserData({
        name:"",
        email:"",
        msg:"",
      })
      alert("Data Successfully Sumbit");
    } else {
      alert("Fill The Data");
    }
  } else {
    alert("Fill The Data");
  }
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg text-center" variant="dark" id='navbar'>
            <Container>
              <Navbar.Brand id="logo" as={Link} to={"/home"}> <img src={logomakr} alt="logo" className='logo' /> </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto align-items-center justify-content-evenly" id='nav' >
                  <a as={Link} to={"/home"} href='#home'>Home</a>
                  <a as={Link} to={"/about"} href='#about'>About</a>
                  <a as={Link} to={"/services"} href='#service'>Services</a>
                  <a as={Link} to={"/experience"} href='#experience'>Experience</a>
                  <a as={Link} to={"/contact"} href='#contact'>Contact us</a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <button className='btn bt-primary'></button>

        </div>
      </Router>
      <div id='bgsection'>
        <div className="introduction">
          <div className="data">
            <div className="social-icons" data-aos="fade-down" > <i className="fab fa-facebook"></i><i class="fab fa-google-plus"></i><i class="fab fa-instagram"></i><i class="fab fa-youtube-square"></i><i class="fab fa-github"></i></div>
            <div className='name' data-aos="slide-down">Hello I am <span> 𝐒𝐚𝐟𝐟𝐚𝐧</span></div>
            <div className="typewriter">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "I 'am a Developer.",
                    "I 'am Working on React.",
                    "I 'Done My Todo List.",
                  ],
                }}
              />
            </div>
            <div className="line" data-aos="fade-down">Knack Of building Application with front and back end operations.</div>
            <div className="btn-group">
              <button className='btn-1' data-aos="fade-down"><a href="#about">Hire Me</a></button>
              <button className='btn-2' data-aos="fade-down" onClick={() => setShow(true)}>My Resume </button>
            </div>
          </div>
          <div className="profile">
            {/* <img src={'https://assets.entrepreneur.com/content/3x2/2000/20171002173141-GettyImages-489029936.jpeg'} alt="something is here" /> */}
            <img src={me} alt="something is here" className='me' data-aos="fade-left" />
          </div>
        </div>
      </div>

      <h2 className='heading' id='about'>About Me</h2>
      <div className="why-choose">Why Choose Me ?</div>
      <div className="customline"><div className='linebar'></div><span className='orangeline'></span><span className='blackline'></span></div>

      <section id='about-area' data-aos="fade-up" >
        <div className="box-shadow">
          <div className="header-area">
            <div className="image-area">
              <img src={proper} alt="something is here" id='about-img' />
              {/* <img src={me} alt="something is here"  className='me' id='about-img' /> */}
            </div>
          </div>
          <div className='about-information'>
            <div className="paragraph">Front End developer and mobile developer with background knowledge of mern stock width redux along width a knock of application utmost efficiency. strong professional with a bsc willing
              to be an asset for an organization!</div>
            <div className="highlight">Here are a Few HighLight</div>
            <div className="list">
              <div><i class="fas fa-circle"></i> Interactive Front End as Per Design.</div>
              <div><i class="fas fa-circle"></i> React and React Native.</div>
              <div><i class="fas fa-circle"></i> Redux For State Management.</div>
              <div><i class="fas fa-circle"></i> Building Rest API.</div>
              <div><i class="fas fa-circle"></i> Managing Database.</div>
              <div><i class="fas fa-circle"></i> Web Developer and Mobile Development.</div>
            </div>
            <div className="btn-portion">
              <button className='about-btn-1'>Hire Me </button>
              <button className='about-btn-2'>get Resume</button>
            </div>
          </div>
        </div>
      </section>

      <h2 className='heading' id='service'>Services</h2>
      <div className="why-choose">My Formal Bio Details</div>
      <div className="customline"><div className='linebar'></div><span className='orangeline'></span><span className='blackline'></span></div>

      <section id='resume-area' data-aos="fade-right"  >
        <div className="resume-section">
          <div className="box-1">
            <div className="inside-icons"><i class="far fa-file-code custom-facebook" /></div>
            <div className="heading-1">Web Development</div>
            <div className="paragraph-1">Your Web Site Will Be Build with an New proven Technologies.</div>
            <div className="border-line"></div>
          </div>

          <div className="box-1">
            <div className="inside-icons"><i className="fab fa-react custom-facebook" /></div>
            <div className="heading-1">React web</div>
            <div className="paragraph-1">I approach each Project individually and always focus on the Results.</div>
            <div className="border-line"></div>
          </div>

          <div className="box-1">
            <div className="inside-icons"><i class="fab fa-reacteurope custom-facebook"></i></div>
            <div className="heading-1">React Native</div>
            <div className="paragraph-1">I will create appapplication as you concerned with professional worker.</div>
            <div className="border-line"></div>
          </div>

          <div className="box-1">
            <div className="inside-icons"><i className="fab fa-github custom-facebook" /></div>
            <div className="heading-1"><a href="https://github.com/M-Saffan75" id='github'>Github Account </a></div>
            <div className="paragraph-1">If You want more Detail About me so You can visit MY Github Account.</div>
            <div className="border-line"></div>
          </div>
        </div>
      </section>


      <h2 className='heading'>Experience</h2>
      <div className="why-choose">What My Clients Say About Me</div>
      <div className="customline"><div className='linebar'></div><span className='orangeline'></span><span className='blackline'></span></div>

      <div id="experience"  /* data-aos="fade-left" */>
        <div className="experience-section" data-aos="fade-left">
          <div className="image-section">
            <div className="dark-image">

              <div className="testinomial-1" >
                <i class="fal fa-quote-left quote"></i>When He Delivered my job , my  head spinned, it was so nice and he implemented every functionality he is indeed guy and he delivers on time i requested for,a Thank You.
                <i class="fal fa-quote-right quote"></i>
                <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                <div className="short-section">
                  <img src={'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'} alt="here" className='round-img' />
                  <div className="name-here">john Doe</div>
                  <div className="working">CEO of MakeTech</div>
                </div>
              </div>

            </div>
          </div>

          <div className="image-section">
            <div className="dark-image">

              <div className="testinomial-1">
                <i class="fal fa-quote-left quote"></i>I patrionized ehizeex and he delivered i honestly fell in love with the project he is a very honest guy and he delivers on time as well as he is incredible guy i hired him.
                <i class="fal fa-quote-right quote"></i>
                <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <div className="short-section">
                  <img src={'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'} alt="here" className='round-img' />
                  <div className="name-here">Daisy Dominic</div>
                  <div className="working">CEO inansGlobal</div>
                </div>
              </div>

            </div>
          </div>

          <div className="image-section">
            <div className="dark-image">

              <div className="testinomial-1">
                <i class="fal fa-quote-left quote"></i>Client service is amazing. it was nice hiring this guy for my E-commerce projects .He deliveredeven more than i can imagine i recommend him for you.
                <i class="fal fa-quote-right quote"></i>
                <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                <div className="short-section">
                  <img src={'https://images.unsplash.com/photo-1642957323739-5632d8a2ff3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60'} alt="here" className='round-img' />
                  <div className="name-here">john smith</div>
                  <div className="working">Broker</div>
                </div>
              </div>

            </div>
          </div>

          <div className="image-section">
            <div className="dark-image">

              <div className="testinomial-1">
                <i class="fal fa-quote-left quote"></i>Startup is really great template  to get start with with in awesome features and customized with unbounce. His work is made my day... very recommended.
                <i class="fal fa-quote-right quote"></i>
                <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                <div className="short-section">
                  <img src={'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'} alt="here" className='round-img' />
                  <div className="name-here">Benjamin</div>
                  <div className="working">Product manager</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      {/*  Contact Section Start */}



      <h2 className='heading' id='contact'>Contact</h2>
      <div className="why-choose">Get In Touch</div>
      <div className="customline"><div className='linebar'></div><span className='orangeline'></span><span className='blackline'></span></div>

      <div id="contact-area" data-aos="zoom-in-down">
        <div className="contact-section">
          <div className="in-touch">
            <div className="typewriter">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Get In Touch.",
                    "For Contact us.",
                    "How To Find us.",
                  ],
                }}
              />
            </div>
            <div className="contact-icons"> <i className="fab fa-facebook"></i><i class="fab fa-google-plus"></i><i class="fab fa-instagram"></i><i class="fab fa-youtube-square"></i><i class="fab fa-github"></i></div>
            <div className='email-name'>Send Your Email</div>

            <div className="number"><span>Contact : </span> 03178976348</div>
            <div className="address"><span>Address :</span>  Hyderabad Pakistan</div>
          </div>

          <div className="form">

            <div className="inpt-Name">Name</div>
            <input type="text" className='name-field' name='name' value={userData.name} onChange={postUserData} />

            <div className="inpt-email">Email</div>
            <input type="text" className='email-field' name='email' value={userData.email} onChange={postUserData} />

            <div className="inpt-msg">Message</div>
            <textarea cols="10" rows="0" className='msg-field' name='msg' value={userData.msg} onChange={postUserData}></textarea>
            <div className="inpt-btn"><button onClick={submitData}>Send <i className='fas fa-paper-plane'></i></button></div>
          </div>
        </div>
      </div>

      <footer> © 𝕔𝕠𝕡𝕪𝕣𝕚𝕘𝕙𝕥 𝟚𝟘𝟙𝟡-𝟚𝟘𝟚𝟚 </footer>

      {show ?
        <div id="resume-center">
          <div id='resume' data-aos="fade-up">
            <div className="inside-resume">
              <i class="far fa-times cros" onClick={() => setShow(false)}></i>
              <div className="resume-area"><img src={me} alt="logo" className='resume-pic' /></div>
              <h1 className="resume-name-1">M-Saffan<span className="resume-name-2"> Khan</span></h1>
              <div className="faculty">Web Developer</div>
            </div>

            <div id="resume-white">
              <div id="contact-section">
                <h3 className="headz">Contact</h3>
                <div className='get-in-touch'><i class="fas fa-phone-alt small-icons"></i> 03478583853</div>
                <div className='get-in-touch'><i class="fas fa-envelope small-icons"></i> Dummy.gmail.com</div>
                <div className='get-in-touch'><i class="fas fa-home small-icons"></i> Hyderabad Pakistan</div>
                <h3 className="headz">My Skills</h3>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> Web & App Developing</div>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> Javascript</div>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> React js</div>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> Html-5</div>

                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> Css-3</div>
                <h3 className="headz">Languages</h3>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> English</div>
                <div className='get-in-touch'><i class="far fa-circle small-icons"></i> Urdu</div>
              </div>

              <div id="profile-section">
                <h3 className='side-headz'>Profile</h3>
                <div className='paragraph'> Minima ex odio nesciunt illum neque ut libero et, quia molestiae, quae officiis dolorem eos a! Harum sequi est, odit mollitia nisi officiis fuga eligendi consectetur cum? Sapiente, quod deserunt.</div>
                <h3 className='side-headz'>Experience</h3>
                <div>Ui Designer For both (2018 - Now)</div>
                <div className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam eligendi impedit, illum, aspernatur adipisci recusandae exercitationem blanditiis nostrum animi quidem corrupti totam eos eveniet placeat minus accusantium consequatur magni autem eum. Laboriosam consequuntur deserunt adipisci eos. Officia, fugit quae.</div>
                <h3 className='side-headz'>Education</h3>
                <div className='school'>Innocent Public Hight School (2009 - 2019)</div>
                <div className='school'>Pre-Engineering From Degree College Hyderabad Pakistan (2019 - 2021)</div>
                <div className='uni-line'>Bachelores in computer science from GC university (2022 - 2025)</div>
              </div>

            </div>
          </div>
        </div> : null
      }
    </>
  );
}

export default App;
