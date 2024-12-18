import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {/* Team Member 1 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image1.jpg" alt="Member 1" className="rounded-image" />
          <h3 className="text-2xl"> 
            <a href="https://www.linkedin.com/in/member1" target="_blank" rel="noopener noreferrer">Aarav Goel</a>
          </h3>
          <p>Aarav Goel is a Mechanical Engineering student who is proficient in CAD and 3D modeling and knowledgeable in programming and simulation. He is interested in robotics in the context of neurotechnology and is currently working on a mind-controlled wearable robotic arm.</p>
        </div>
        {/* Team Member 2 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image2.jpg" alt="Member 2" className="rounded-image" />
          <h3 className="text-2xl">            <a href="https://www.linkedin.com/in/member2" target="_blank" rel="noopener noreferrer">Rohil Kare</a>
          </h3>
          <p>Rohil Khare is an EECS major who works on professor Goldberg’s Autolab. There he works on cloud based robotics and computer vision applications. His interests lie in robotic processes and how to make it more efficient from a hardware and latency perspective.</p>
        </div>
        {/* Team Member 3 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image3.jpg" alt="Member 3" className="rounded-image" />
          <h3 className="text-2xl">            <a href="https://www.linkedin.com/in/member3" target="_blank" rel="noopener noreferrer">Nihal Boina</a>
          </h3>
          <p>Nihal Boina is an EECS and Business student in the M.E.T. program at UC Berkeley. He specializes in machine learning and cloud-based software development, having led several projects from ideation to execution, reaching thousands of end-users. He is deeply interested in using AI and scalable infrastructure to create impactful digital solutions, from healthcare to consumer tech.</p>
        </div>
        {/* Team Member 4 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image6.jpg" alt="Member 6" className="rounded-image" />
          <h3 className="text-2xl">            <a href="https://www.linkedin.com/in/member6" target="_blank" rel="noopener noreferrer">Parth Behani</a>
          </h3>
          <p>Parth Behani is a Mechanical Engineering student who is very interested in robotics and renewable energy. He is currently working on the Optimus Humanoid Robot at Tesla. He is proficient in system design and controls. He has also been very involved with the solar racing team at Cal.</p>
        </div>
        {/* Team Member 5 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image4.jpg" alt="Member 4" className="rounded-image" />
          <h3 className="text-2xl">            <a href="https://www.linkedin.com/in/member4" target="_blank" rel="noopener noreferrer">Sara Magaziotis-Ginori</a>
          </h3>
          <p>Sara Magaziotis-Ginori is an EECS major focused on aviation/space technologies. She has experience developing flight software and collision avoidance systems at Evitado Technologies. She has also developed the CV and path planning algorithms for an autonomous rover competing in the University Rover Challenge.</p>
        </div>
        {/* Team Member 6 */}
        <div className="team-member" style={{ marginBottom: '20px' }}>
          <img src="path/to/image5.jpg" alt="Member 5" className="rounded-image" />
          <h3 className="text-2xl">            <a href="https://www.linkedin.com/in/member5" target="_blank" rel="noopener noreferrer">Skyler Chan</a>
          </h3>
          <p>Skyler Chan is an EECS student passionate about robotics for space exploration purposes such as building off-world habitats. He has worked in backend systems validation previously at Tesla (Vehicle Software), and autonomous embedded systems for a space payload (SpaceCAL). Long term he hopes to build a generational space company that enables humanity to become interplanetary.</p>
        </div>
      </div>
    </section>
  )
}

