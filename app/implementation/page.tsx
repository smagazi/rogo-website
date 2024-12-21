import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Hardware</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Block Design</h1>
      <p className='ml-8 mb-8'>
        We designed and 3D printed two (2) main components: the block base plate and the block.
        The blocks interlocking mechanism was similar to Lego's, but optimized for the robotic arm.
        It features side grooves for guiding the gripper to the correct spot.
        We also tapered the prongs so the blocks will catch and interlock even if there is some small positional error.
      </p>

      <img src="/images/block-diagram.png" alt="Block Diagram" className="rounded-full mb-8" />
      <img src="/images/block-cad.png" alt="Block Diagram" className="rounded-full mb-8" />
      <img src="/images/base-cad.png" alt="Block Diagram" className="rounded-full mb-8" />

      




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">ChatGPT</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Block Position Output</h1>
      <p className='ml-8 mb-8'>
        After the user inputs their structure instructions (i.e. "build a tower", "design the Taj Mahal"), ChatGPT 
      </p>


      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Transforming Coordinates From: GPT to Camera to Base Frame</h1>
      <p className='ml-8 mb-8'>
        Simple prompting, to get from user inquiry to output structural coords, example output:
      </p>
      <img src="/images/ex_gpt_output.png" alt="Block Diagram" className="rounded-full mb-8" />
      




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Computer Vision</h1>
      
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Detecting Blocks</h1>
      <p className='ml-8 mb-8'>
        Using canny edge detection, we were able to distinguish objects from background, even with the grayscale image that the robot wrist hand camera gave us
      </p>

      <img src="/images/cv_running.png" alt="Block Diagram" className="rounded-full mb-8" />

      <p className='ml-8 mb-8'>
        We then used said block center coordinates, and transformed from u,v to real world x,y,z using camera intrinsic properties
      </p>

      <img src="/images/cv_output.png" alt="Block Diagram" className="rounded-full mb-8" />

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Distinguishing Blocks From Baseplate</h1>
      <p className='ml-8 mb-8'>
        We distinguished the base plate from the blocks using a surface area calculator, by taking all four edge corners in the real world (transformed) and figuring out the quadrilateral area and setting a certain threshold to determine baseplate vs. blocks vs. noise
      </p>

      <img src="/images/cv_base_plate.png" alt="Block Diagram" className="rounded-full mb-8" />

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Generating placement instructions</h1>
      <p className='ml-8 mb-8'>
        Given real world projected locations of baseplate + various building blocks, we were able to generate placing instructions for which blocks went where
      </p>
      <img src="/images/cv_place_coords.png" alt="Block Diagram" className="rounded-full mb-8" />




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">PID/Controls</h1>
      <p className='ml-8 mb-8'>
        We used PID to move to said predicted real-world locations from CV. We used K/gain values that are known to work with the Sawyer arm and allow it to move smoothly and correct its trajectory.
      </p>

      <img src="/images/planning_pid_control.png" alt="Block Diagram" className="rounded-full mb-8" />








      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">this page has majority/all of technial stuff. </h1> */}

    </section>
  )
}
