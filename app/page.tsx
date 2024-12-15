import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      {/* Introduction Section */}
      <section className="mb-16">
        <h1 className="mb-1 text-4xl font-semibold tracking-tighter text-center">
          Mars Habitat Builder
        </h1>
        <p className="text-xl text-center text-white-500 mb-8">
          An LLM Powered Construction Robotic-Arm
        </p>
        
        {/* Demo Video */}
        <div className="text-center">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/xQhCtnd-jgk?autoplay=1&loop=1&playlist=xQhCtnd-jgk" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            className="rounded-lg mx-auto mb-8"
          ></iframe>
        </div>

        {/* Project Goals */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="text-lg mb-4">
            We live in a world where we can put humanity on Mars in our generation. Everybody is solving the transportation problem; off-world habitation remains an unsolved problem.
          </p>
          <p className="text-lg mb-8">
            We can solve this by building an AI robotic system that constructs habitats with blocks. The reason why we take an AI-based approach is due to the latency of communication between Earth and Mars, the system must operate autonomously.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Project Goal</h2>
          <p className="text-lg mb-4">
            We demonstrate a robotic system that can autonomously build a Mars habitat outer shell structure, with purely vision inputs and no human in the loop. We do this by representing the outer shell to be built with custom 3D-printed blocks.
          </p>

          <p className="text-lg mb-4">
            Our workflow consists of inputting a text description of the desired structure (ex: 'build a tower'), as well as the available blocks' dimensions, into an LLM like ChatGPT. The LLM outputs an array of block positions and other metadata. We then use the LLM to determine the order of which to place the blocks.
          </p>

          <p className="text-lg mb-8">
            Then, our system takes in this LLM output, and combines it with our vision system to begin moving the gripper end effector to construct the structure. The vision system is unique as we do not use AR tags to determine where individual blocks or the base frame are - we use various edge detection models instead. This was done to simulate the Martian environment, where we realistically won't have AR tags lying around.
          </p>

          <p className="text-lg mb-8">
            Combining our GPT and vision outputs into our PID-based control system, we are able to pick and place blocks.
          </p>

          <p className="text-lg mb-8">
            The end goal is to demonstrate that our system is able to repeatedly pick and place objects over time to construct the Mars habitat.
          </p>

          {/* Add Goals Diagram */}
          <div className="mb-8">
            <Image
              src="/images/block-diagram.png" // Adjust this path to where you store your image
              alt="Project goals diagram showing three steps: 1. Does software process CAD model to instructions? 2. Robot capable of pick and place without AR tags? 3. Robot independently builds structure?"
              width={800} // Adjust based on your needs
              height={250} // Adjust based on your needs
              className="mx-auto rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
          <p className="text-lg mb-8">
            [Explain why this project is interesting and what problems you're solving]
          </p>

          <h2 className="text-2xl font-semibold mb-4">Real-World Applications</h2>
          <p className="text-lg mb-8">
            The applications for this system are not limited to Mars, it is useful on Earth. In dangerous environments (such as deep underground construction or mining) where it is unsafe for humans to operate equipment, our robotic system can be used to identify objects to construct or excavate. The key here is most robotic systems require a baseline understanding of how robots work, but not everybody has a technical background. As our system is a full-stack solution, needing only a natural language input, we enable more end users to use our product.
          </p>
        </div>
      </section>

      {/* You'll want to create separate components or sections for: */}
      {/* - Design */}
      {/* - Implementation */}
      {/* - Results */}
      {/* - Conclusion */}
      {/* - Team */}
      {/* - Additional Materials */}
    </div>
  )
}
