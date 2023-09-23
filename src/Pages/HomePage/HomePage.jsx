import React from "react";
import "./HomePage.css";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
         <img src="/images/centrelensflare.png" alt="lensflare" className="main-top-lens-flare"/>
      {/* <div className="lenz-flare  main-top-lens-flare"></div> */}

      <div className="navdiv">
        <Nav />
      </div>

    

      <main>
        <section className="hero">
          <div className="left">
         
            <img
              src="/images/whitestar.png"
              alt="hero-img"
              className="whitestar"
            />
            <img
              src="/images/greystar.png"
              alt="hero-img"
              className="greystar1"
            />
            <img
              src="/images/greystar.png"
              alt="hero-img"
              className="greystar2"
            />

            <div className="small-header-wrapper">
              <div className="small-header-only">
                <h3>Igniting a revolution in HR Innovation</h3>
                <img
                  className="stroke-img"
                  src="/images/slantunderline.png"
                  alt="hero-img"
                />
              </div>
            </div>

            <img
              src="/images/headerimg.png"
              alt="header-img"
              className="header-image"
            />

            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <Link to="/register">
              <button>Register</button>
            </Link>

            <div className="countdown">
              <div className="time">
                <span className="value">00</span>
                <span className="unit">H</span>
              </div>

              <div className="time">
                <span className="value">00</span>
                <span className="unit">M</span>
              </div>

              <div className="time">
                <span className="value">00</span>
                <span className="unit">S</span>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="header">
              <h3>Igniting a revolution in HR Innovation</h3>
              <img
                className="stroke-img"
                src="/images/slantunderline.png"
                alt="hero-img"
              />
            </div>

            <img
              className="hero-img"
              src="/images/personimg.png"
              alt="hero-img"
            />

            <img
              src="/images/centrelensflare.png"
              alt="lensflare"
              className="lens-flare"
            />
          </div>
        </section>

        {/* introduction section */}

        <section className="introduction">
          <div className="left">
            <img
              src="/images/globe.png"
              alt="character-image"
              className="character-img"
            />
            <img
              src="/images/lailacstar.png"
              alt="star-image"
              className="star-img"
            />
            <img
              src="/images/arrow.png"
              alt="arrow-image"
              className="arrow-img"
            />
          </div>

          <div className="right">
            <img
              src="/images/lightpurplestar.png"
              alt="star-image"
              className="star-img"
            />

            <h2>Introduction to getlinked</h2>

            <h4>techHackathon 1.0</h4>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </section>

        {/* rules and guideline section */}

        <section className="introduction introduction-reverse">
          <div className="left">
            <img
              src="/images/centrelensflare.png"
              alt="star-image"
              className="toplensflare"
            />
            <img
              src="/images/greystar.png"
              alt="star-image"
              className="greystar-img"
            />
            <img
              src="/images/whitestar.png"
              alt="whitestar-image"
              className="whitestar-img"
            />

            <h2>Rules and</h2>

            <h4>Guidelines</h4>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="right">
            <img
              src="/images/centrelensflare.png"
              alt="star-image"
              className="bottomlensflare"
            />
            <img
              src="/images/reading.png"
              alt="character-image"
              className="character-img"
            />
          </div>
        </section>

        {/* judging section */}

        <section className="introduction">
          <div className="left">
            <img
              src="/images/centrelensflare.png"
              alt="star-image"
              className="bottomlensflare"
            />
            <img
              src="/images/people.png"
              alt="character-image"
              className="character-img"
            />
            <img
              src="/images/lightpurplestar.png"
              alt="star-image"
              className="judgelightpurplestar-img"
            />
            <img
              src="/images/greystar.png"
              alt="star-image"
              className="judgegreystar-img"
            />
            <img
              src="/images/whitestar.png"
              alt="star-image"
              className="judgewhitestar-img"
            />
          </div>

          <div className="right">
            <img
              src="/images/centrelensflare.png"
              alt="star-image"
              className="bottomlensflare"
            />

            <h2>Judging Criteria</h2>

            <h4>Key attributes</h4>

            <p>
              <span className="lailac">Innovation and Creativity: </span>
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>

            <p>
              <span className="lailac">Functionality: </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>

            <p>
              <span className="lailac">Impact and Relevance: </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>

            <p>
              <span className="lailac">Technical Complexity: </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>

            <p>
              <span className="lailac">Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>

            <button className="Read-more">Read More</button>
          </div>
        </section>

        <section className="introduction ">
          <div className="left">
            <h2>Frequently Ask</h2>
            <h4>Question</h4>

            <img
              src="/images/lightpurplestar.png"
              alt="star"
              className="frequentlystar"
            />

            <div className="questions">
              <div className="question-card">
                <div>
                  Can i work on a project i started before the hackathon?
                </div>

                <div className="plus-icon">+</div>
              </div>

              <div className="question-card">
                <div>What happens if i need help during the hackathon?</div>

                <div className="plus-icon">+</div>
              </div>

              <div className="question-card">
                <div>What happens if i dont have an idea for a project?</div>

                <div className="plus-icon">+</div>
              </div>

              <div className="question-card">
                <div>Can i join a team or do i have to come with one?</div>

                <div className="plus-icon">+</div>
              </div>

              <div className="question-card">
                <div>What happens after the hackathon end?</div>

                <div className="plus icon">+</div>
              </div>

              <div className="question-card">
                <div>
                  Can i work on a project i satrted before the hackathon?
                </div>

                <div className="plus icon">+</div>
              </div>
            </div>
          </div>

          <div className="right">
            <img
              className="character-img"
              alt="character-img"
              src="/images/think.png"
            />
          </div>
        </section>

        {/* another section */}

        <section className="timeline">

          <img src="/images/lailacstar.png" alt="star" className="lailacstar" />
          <img src="/images/greystar.png" alt="star" className="greystar" />
          <img src="/images/whitestar.png" alt="star" className="whitestar" />

          <div className="header">
            <h2>Timeline</h2>
            <p>Here is the breakdown of the time we anticipate 
using for the upcoming event.</p>

          </div>


          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">1</div>
            </div>

            <div className="right">
              <h3 className="mobile-only">Hackathon Announcement</h3>
              <p className="mobile-only">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <h3>November 18, 2023</h3>
            </div>
          </div>

          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>November 18, 2023</h3>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">2</div>
            </div>

            <div className="right">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <h3 className="mobile-only">November 18, 2023</h3>
            </div>
          </div>

          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>Teams Registration ends</h3>

              <p>Interested Participants are no longer Allowed to register</p>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">3</div>
            </div>

            <div className="right">
              <h3 className="mobile-only">Teams Registration ends</h3>
              <p className="mobile-only">
                Interested Participants are no longer Allowed to register
              </p>
              <h3 className="">November 18, 2023</h3>
            </div>
          </div>

          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>November 18, 2023</h3>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">4</div>
            </div>

            <div className="right">
              <h3>Announcement of the accepted teams and ideas</h3>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <h3 className="mobile-only">November 18, 2023</h3>
            </div>
          </div>

          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>Getlinked Hackathon 1.0 Offically Begins</h3>

              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">5</div>
            </div>

            <div className="right">
              <h3 className="mobile-only">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="mobile-only">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <h3 className="">November 18, 2023</h3>
            </div>
          </div>

          <div className="timeline-row">
            <div className="left large-screen-only">
              <h3>November 18, 2023</h3>
            </div>

            <div className="center">
              <div className="stroke"></div>
              <div className="circle">6</div>
            </div>

            <div className="right">
              <h3>Demo Day</h3>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <h3 className="mobile-only">November 18, 2023</h3>
            </div>
          </div>
        </section>

        <section className="introduction prizes-section">
          <img
            src="/images/centrelensflare.png"
            className="cuplensflare"
            alt="lensflare"
          />
          <img
            src="/images/centrelensflare.png"
            className="lensflaremedal"
            alt="lensfalre"
          />

          <div className="left">
            <div className="cup-header">
              <h2>Prizes and</h2>
              <h4>Rewards</h4>

              <p>
                Highlight of the prizes or rewards for winners and<br></br>for
                participant
              </p>
              <img
                src="/images/lailacstar.png"
                className="cuplailacstar"
                alt="star"
              />
            </div>

            <img src="/images/cup.png" className="character-img" alt="cup" />

            {/* <img src="/images/cup.png" className="character-img" alt="cup"/> */}

            <img
              src="/images/lailacstar.png"
              className="cuplailacstar"
              alt="star"
            />
            <img
              src="/images/whitestar.png"
              className="cupwhitestar"
              alt="star"
            />
          </div>

          <div className="right">
            <div className="cup-header">
              <h2>Prizes and</h2>
              <h4>Rewards</h4>

              <p>
                Highlight of the prizes or rewards for winners and<br></br>for
                participant
              </p>
              <img
                src="/images/lailacstar.png"
                className="cuplailacstar"
                alt="star"
              />
            </div>

            <div className="medal-collection">
              <img
                src="/images/prizes.png"
                className="prizesimg"
                alt="whitestarmedalfirst"
              />

              <img
                src="/images/whitestar.png"
                className="whitestarmedalfirst"
                alt="whitestarmedalfirst"
              />
              <img
                src="/images/whitestar.png"
                className="whitestarmedalsecond"
                alt="whitestarmedalfirst"
              />
              <img
                src="/images/greystar.png"
                className="greystarmedalfirst"
                alt="whitestarmedalfirst"
              />
            </div>
          </div>
        </section>

        {/* partners section */}

        <section className=" introduction partners">
          <img
            src="/images/centrelensflare.png"
            className="cuplensflare"
            alt="lensflare"
          />
          <img
            src="/images/centrelensflare.png"
            className="lensflaremedal"
            alt="lensfalre"
          />

          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major{" "}
            <br></br>
            companies as its partners and sponsors
          </p>

          <div className="sponsors-wrapper">
            <img
              src="/images/sponsorslist.png"
              className="sponsors"
              alt="sponsor"
            />
          </div>
        </section>

        <section className="introduction privacy">
          <img src="/images/greystar.png" alt="star" className="greystar" />
          <img src="/images/lailacstar.png" alt="star" className="lailacstar" />
          <img
            src="/images/lightpurplestar.png"
            alt="star"
            className="lightpurplestar"
          />
          <img
            src="/images/centrelensflare.png"
            alt="star"
            className="centrelensflare"
          />
          <div className="left">
            <h2>Privacy Policy and</h2>
            <h4>Terms</h4>

            <p>Last updated on September 12, 2023</p>
            <p>
              Below are our privacy & policy, which outline a lot of goodies.{" "}
              <br></br>
              it’s our aim to always take of our participant
            </p>

            <div className="details-wrapper">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <p className="lailac header">Licensing Policy</p>

              <p>Here are terms of our Standard License:</p>

              <div className="listing">
                <img
                  src="/images/greentick.png"
                  alt="greentick"
                  className="greentick"
                />

                <p>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>

              <div className="listing">
                <img
                  src="/images/greentick.png"
                  alt="greentick"
                  className="greentick"
                />

                <p>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>

              <div className="button-wrapper">
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="right">
            <img
              src="/images/privacyimg.png"
              alt="privacyimg"
              className="privacyimg"
            />
          </div>
        </section>

        <section className="introduction footer">
          <div className="left">
            <img
              src="/images/lailacstar.png"
              alt="logo"
              className="lailacstar"
            />

            <img
              src="/images/getlinked.png"
              alt="logo"
              className="footer-logo"
            />
            <img src="/images/whitestar.png" alt="whitestar" className="footerwhitestar"/>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>

            <div className="termsofuse">
              <Link to="/"> Terms of Use</Link>
              <div className="lailacstroke"></div>
              <Link to="/"> Privacy Policy</Link>
            </div>
          </div>

          <div className="right">
            <img src="/images/greystar.png" alt="logo" className="greystar" />
            <p className="lailac">Useful Links</p>
            <p className="links">
              <Link to="/">Overview</Link>
            </p>
            <p className="links">
              <Link to="/">Timeline</Link>
            </p>
            <p className="links">
              <Link to="/">FAQs</Link>
            </p>
            <p className="links">
              <Link to="/">Register</Link>
            </p>

            <div className="follow">
              <p className="lailac">Follow us</p>
              <div className="logos">
                <Link>
                  {" "}
                  <img
                    src="/images/instagram.png"
                    className="logo"
                    alt="instagram"
                  />
                </Link>
                <Link>
                  {" "}
                  <img
                    src="/images/twitter.png"
                    className="logo"
                    alt="instagram"
                  />
                </Link>
                <Link>
                  {" "}
                  <img
                    src="/images/facebook.png"
                    className="logo"
                    alt="instagram"
                  />
                </Link>
                <Link>
                  {" "}
                  <img
                    src="/images/linkedin.png"
                    className="logo"
                    alt="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/images/whitestar.png" alt="logo" className="whitestar" />
            <p className="lailac"> Contact Us</p>

            <p className="links">
              <Link to="/">
                <img
                  src="/images/phone.png"
                  alt="phone-icon"
                  className="phone-icon"
                />
                <span>+234 6707653444</span>
              </Link>
            </p>
            <p className="links">
              <Link to="/">
                <img
                  src="/images/location.png"
                  alt="phone-icon"
                  className="phone-icon"
                />
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </Link>
            </p>
          </div>
        </section>

        <section className="allright">
          <p>All rights reserved &copy; getlinked Ltd. </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
