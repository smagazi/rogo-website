"use client"
import { BlogPosts } from 'app/components/posts';
import STLViewer from 'app/components/STLViewer';
import { StlViewer } from 'react-stl-viewer';

export default function Page() {
  const stlFileUrl = "public/STL/Blockv4.stl"; // Corrected path

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

      <div className="flex mx-auto flex-col items-center mb-2" style={{ maxWidth: '500px', position: 'relative' }}>
        <img src="/images/block-diagram.png" alt="Block Diagram" className="rounded-lg mb-2" style={{ width: '100%' }} />
        <div className="flex justify-center" style={{ width: '100%' }}>
          <img src="/images/block-cad.png" alt="Block CAD" className="rounded-lg mx-1" style={{ width: '50%' }} />
          <img src="/images/base-cad.png" alt="Base CAD" className="rounded-lg mx-1" style={{ width: '50%' }} />
        </div>
      </div>

      {/* <StlViewer
        style={{ width: '100%', height: '500px' }}
        orbitControls
        shadows
        url={stlFileUrl}
      /> */}

      <h1 className="font-semibold text-2xl mb-8 mt-8 tracking-tighter">ChatGPT</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Block Position Output</h1>
      <p className='ml-8 mb-4'>
        After the user inputs their structure instructions (i.e. "build a tower", "design the Taj Mahal"), ChatGPT takes the constraints into consideration <span className='text-lilac'>(block dimensions, prongs don't add to structure height since they insert into the block above)</span> and outputs coordinates based on those constraints and the user input. 
      </p> 

      <p className='ml-8 mb-4'>
      ChatGPT also outputs information on what order to place the blocks <span className='text-lilac'>(i.e. in a pyramid structure, you must place the blocks with lower Z-values first)</span>.
      </p>

      <p className='ml-8 mb-4'>
        Below is an example of the JSON ChatGPT outputs:
      </p>

      <img src="/images/ex_gpt_output.png" alt="ChatGPT Output" className="mx-auto rounded-lg mb-8" width="500"/>

      <p className='ml-8 mb-8'>
      Furthermore, we use a script to render ChatGPT's output JSON into an image:
      </p>

      <img src="/images/2x1-digital.png" alt="2x1 Digital" className="mx-auto rounded-lg mb-8" width="500"/>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Computer Vision</h1>
      
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Detecting Blocks</h1>
      <p className='ml-8 mb-8'>
        Using Canny edge detection, we were able to distinguish objects from background, even with the grayscale image that the robot wrist hand camera gave us:
      </p>

      <img src="/images/cv_running.png" alt="Block Diagram" className="mx-auto rounded-lg mb-8" width="500" />

      <p className='ml-8 mb-8'>
        We then used said block center coordinates, and transformed from u,v to real world x,y,z using camera intrinsic properties
      </p>

      <img src="/images/cv_output.png" alt="Block Diagram" className="mx-auto rounded-lg mb-8"/>

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Distinguishing Blocks From Baseplate</h1>
      <p className='ml-8 mb-8'>
        We distinguished the base plate from the blocks using a surface area calculator, by taking all four edge corners in the real world (transformed) and figuring out the quadrilateral area and setting a certain threshold to determine baseplate vs. blocks vs. noise
      </p>

      <img src="/images/cv_base_plate.png" alt="Block Diagram" className="mx-auto rounded-lg mb-8" />

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Generating placement instructions</h1>
      <p className='ml-8 mb-8'>
        Given real world projected locations of baseplate + various building blocks, we were able to generate placing instructions for which blocks went where
      </p>
      <img src="/images/cv_place_coords.png" alt="Block Diagram" className="mx-auto rounded-lg mb-8" />

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">PID/Controls</h1>
      <p className='ml-8 mb-8'>
        We used PID to move to said predicted real-world locations from CV. We used K/gain values that are known to work with the Sawyer arm and allow it to move smoothly and correct its trajectory.
      </p>

      <img src="/images/planning_pid_control.png" alt="Block Diagram" className="mx-auto rounded-lg" />

    </section>
  )
}
