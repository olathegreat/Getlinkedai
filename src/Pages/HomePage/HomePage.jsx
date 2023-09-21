import React from 'react'
import "./HomePage.css"
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home-page'>
        <Nav/>

        <main>
            <section className='hero'>

                <div className='left'>
                    <div className='header'>
                        <h1>getlinked Tech</h1>
                        <h1>Hackathon <span className='lightpurple'>1.0</span></h1>
                        <img src='/images/creative.png' alt='hero-img' className='creativeimg'/>
                        <img src='/images/boom.png' alt='hero-img' className='boomimg'/>
                        <img src='/images/chain.png' alt='hero-img' className='chainimg'/>
                    </div>

                    <p>
                        Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize
                    </p>

                    <Link to="/register">
                    <button>
                        Register
                    </button>
                    </Link>


                    <div className='countdown'>
                        <div className='time'>
                            00 <span className='unit'>H</span>
                        </div>

                        <div className='time'>
                            00 <span className='unit'>M</span>
                        </div>

                        <div className='time'>
                            00 <span className='unit'>S</span>
                        </div>

                    </div>
                    

                </div>

                <div className='right'>
                    <div className='header'>

                    <h3>Igniting a revolution in HR Innovation</h3>
                    <img src='/images/slantunderline.png' alt='hero-img'/>

                    </div>
                  

                    <img src='/images/personimg.png' alt='hero-img'/>

                </div>

            </section>
        </main>

    </div>
  )
}

export default HomePage