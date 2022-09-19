import React from 'react'
import "../css/home.css"
import {motion} from "framer-motion"
import Navabar from '../components/navbar/navabar'


function Home() {
  return (
    <div>
      <div className="home_hero-wrapper">
        <div className="home_hero-container">
          <Navabar/>
          <div className="home_conference-details-wrapper">
            <div className="home_conference-details-container">
              <div className="home_conference-name">
                <h2>International Conference on Smart Systems for applications in <span>Electrical Sciences</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_tracks-wrapper">
          <div className="track-heading">
            <h2>Tracks</h2>
          </div>
        <div className="home_tracks-containers">
          
          <div className="tracks-card-wrappers">

            <motion.div 
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="track-container track1"
              >
              <div className="track-name">
                <p>Track 1: Wireless Communication</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>5G, 6G and beyond communication systems</li>
                  <li>Software defined wireless networks</li>
                  <li>Cognitive radio energy harvesting and green communications</li>
                  <li>Satellite, Space and Optical Communication</li>
                  <li>Antenna and RF technologies</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}} 
              className="track-container track2">
              <div className="track-name">
                <p>Track 2: AI and ML applications </p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Machine learning and artificial intellegence</li>
                  <li>Big data networks</li>
                  <li>Data analytics for social impact</li>
                  <li>Data mining and management</li>
                  <li>Data Science</li>
                  <li>Data driven climate science</li>
                </ul>
              </div>
            </motion.div>

            <div className="track-container track3">
              <div className="track-name">
                <p>Track 3: Secure Communication</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Ad hoc networks</li>
                  <li>Mobile edge computing</li>
                  <li>Encryption and decryption</li>
                  <li>Wireless Sensor Networks</li>
                  <li>Self Organized networks</li>
                  <li>Security in cloud services </li>
                </ul>
              </div>
            </div>

            <div className="track-container track4">
              <div className="track-name">
                <p>Track 4: Signal Processing</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Signal Processing and Smart Systems</li>
                  <li>Machine Learning and Deep Learning in Signal Processing</li>
                  <li>Image and Biomedical Signal Processing</li>
                  <li>Satellite, Space and Optical Communication</li>
                  <li>Signal Processing for Communication</li>
                </ul>
              </div>
            </div>

            <div className="track-container track5">
              <div className="track-name">
                <p>Track 5: IoT/Industry 4.0</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Electronic Circuit Design</li>
                  <li>Software architecture design and development</li>
                  <li>Real Time operating system</li>
                  <li>Hardware-Software Co design</li>
                  <li>Embedded Security</li>
                  <li>Data center and cloud networks</li>
                  <li>Sensor and adhoc networks</li>
                  <li>Industry 4.0</li>
                </ul>
              </div>
            </div>

            <div className="track-container track6">
              <div className="track-name">
                <p>Track 6: Autonomous Vehicles</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Real time attack detection</li>
                  <li>Applications of cryptography  in autonomous vehicle driving systems</li>
                  <li>Socio-economic impact of self driving cars</li>
                  <li>Software and hardware and architecture of  self driving cars</li>
                  <li>Security in autonomous driving</li>
                  <li>Sign detection in self driving cars</li>
                </ul>
              </div>
            </div>

            <div className="track-container track7">
              <div className="track-name">
                <p>Track 7: Power Systems, Control and Electric Vehicles</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>AI applications to Power systems</li>
                  <li>Reliability, stability and protection</li>
                  <li>DC to DC converter design</li>
                  <li>MLS Design and analysis</li>
                  <li>Battery management system</li>
                </ul>
              </div>
            </div>

            <div className="track-container track8">
              <div className="track-name">
                <p>Track 8: Smart Sensors and Process Automation</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Safety in Automation using robotics</li>
                  <li>Intelligent Transportation technological & systems</li>
                  <li>Application of Automation-control & supervision systems.</li>
                  <li>Control application-Power systems, Agriculture, Energy</li>
                  <li>Robotics</li>
                  <li>Linear & Nonlinear control, optimal control, advanced process control.</li>
                  <li>PLC & DCS</li>
                </ul>
              </div>
            </div>

            <div className="track-container track9">
              <div className="track-name">
                <p>Track 9: VLSI Design</p>
              </div>
              <div className="track-details">
                <ul>
                  <li>Analog and Mixed signal Circuits & Systems</li>
                  <li>Digital Integrated Circuits & Systems</li>
                  <li>Nano electronics</li>
                  <li>RF Integrated Circuits & Systems</li>
                  <li>Analog & Digital Mixed VLSI Design</li>
                  <li>VLSI Design and testing</li>
                  <li>VLSI Devices & System</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home