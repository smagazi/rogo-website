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
            src="https://www.youtube.com/embed/HLr-Sg3szzk?autoplay=1&loop=1" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            className="rounded-lg mx-auto mb-8"
          ></iframe>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/HLr-Sg3szzk?si=wadi9DC2onGzHHet" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
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
              src="/images/blocks_habitat.jpg" // Adjust this path to where you store your image
              alt="Project goals diagram showing three steps: 1. Does software process CAD model to instructions? 2. Robot capable of pick and place without AR tags? 3. Robot independently builds structure?"
              width={800} // Adjust based on your needs
              height={250} // Adjust based on your needs
              className="mx-auto rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Real-World Applications</h2>
          <p className="text-lg mb-8">
            The applications for this system are not limited to Mars, it is useful on Earth. In dangerous environments (such as deep underground construction or mining) where it is unsafe for humans to operate equipment, our robotic system can be used to identify objects to construct or excavate. The key here is most robotic systems require a baseline understanding of how robots work, but not everybody has a technical background. As our system is a full-stack solution, needing only a natural language input, we enable more end users to use our product.
          </p>
          <p className="text-lg mb-8">
            Moreover, consumer robotics is a growing market, and the robotic system can act as a housekeeper. With improvements on the natural language processing side, and rigourous testing on the controls side from a safety standpoint, the robotic arm system can help pick up objects (like trash) or sort objects on tables or hard to reach spcaes.
          </p>
        </div>
      </section>

      {/* System Architecture Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">System Architecture</h2>
        
        {/* Main System Diagram */}
        <div className="mb-8">
          <Image
            src="/images/Workflow.png"
            alt="System architecture diagram showing the flow from Block to Block Metadata to ChatGPT to GPT Placement"
            width={1200}
            height={400}
            className="mx-auto rounded-lg"
          />
          <p className="text-center text-gray-400 mt-2">
            Overview of the Mars Habitat Builder system architecture
          </p>
        </div>

        {/* Grid of Detail Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <div className="space-y-2">
            <Image
              src="/images/1x1-w-metadata.png"
              alt="Block input stage"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-gray-400">
              Initial block processing and metadata extraction
            </p>
          </div>

          {/* Screenshot 2 */}
          <div className="space-y-2">
            <Image
              src="/images/gpt-processing.png"
              alt="GPT processing stage"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-gray-400">
              ChatGPT processing and structure planning
            </p>
          </div>

          {/* Screenshot 3 */}
          <div className="space-y-2">
            <Image
              src="/images/placement-output.png"
              alt="Placement output stage"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-gray-400">
              GPT placement and coordination system
            </p>
          </div>

          {/* Screenshot 4 */}
          <div className="space-y-2">
            <Image
              src="/images/final-rendering.png"
              alt="Final rendering stage"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center text-gray-400">
              Custom rendering and visualization output
            </p>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Design</h2>
        
        {/* Design Criteria */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Success Criteria & Testing Approach</h3>
          <img src="images/projectgoals.png" alt="Member 1" className="rounded-image" />
          <p className="text-lg mb-4">
            Our project success is measured across three parallel testing areas:
          </p>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Software Processing: Verify accurate conversion of CAD models into robot instructions</li>
            <li>Vision System: Demonstrate block recognition and pickup without ARUCO codes</li>
            <li>Autonomous Construction: Validate independent structure building with correct block placement</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">Success Levels</h3>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Base Success: Fully functional system with square blocks and single-level structures</li>
            <li>Advanced Success: Extended functionality supporting multi-level structural depth</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6">Reach Goals</h3>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Lego block compatibility for complex structures with hanging edges</li>
            <li>Support for non-square block geometries</li>
            <li>Alternative input methods (e.g., hand-drawn sketches)</li>
            <li>Handling of smaller-scale blocks</li>
            <li>Multi-rotational block placement capabilities</li>
            <li>Support for increased block weights</li>
            <li>Dynamic block selection from non-fixed layouts</li>
          </ul>
        </div>

        {/* Design Choices */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Design Approach</h3>
          <p className="text-lg mb-4">
            We chose a modular system architecture that separates concerns between vision processing, 
            LLM integration, and robotic control. This design allows for independent testing and 
            optimization of each component while maintaining system cohesion.
          </p>
        </div>

        {/* Design Trade-offs */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Design Trade-offs</h3>
          <p className="text-lg mb-4">
            Key trade-offs in our design process included:
          </p>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Choosing computer vision over AR tags for more realistic deployment scenarios, 
                despite increased complexity</li>
            <li>Implementing PID control for reliability over more complex control systems</li>
            <li>Using standardized block shapes to simplify manipulation while limiting structural variety</li>
          </ul>
        </div>

        {/* Real-world Impact */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Engineering Application Impact</h3>
          <p className="text-lg mb-4">
            Our design choices significantly impact the system's real-world applicability:
          </p>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Robustness: Vision-based detection allows operation in varying lighting conditions</li>
            <li>Durability: Modular block design enables easy component replacement and maintenance</li>
            <li>Efficiency: Optimized movement patterns reduce construction time and energy usage</li>
            <li>Adaptability: LLM integration allows for flexible structure specifications</li>
          </ul>
        </div>

        {/* Optional: Add Design Diagrams */}

  
        <div className="mb-8">
          <Image
            src="/images/design-diagram.png"
            alt="Detailed design diagram showing system components and interactions"
            width={800}
            height={400}
            className="mx-auto rounded-lg"
          />
          <p className="text-center text-gray-400 mt-2">
            Detailed system design and component interaction diagram
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
