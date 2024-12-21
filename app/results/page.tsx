import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Results</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Final Outcomes</h1>
      <p className='ml-8 mb-8'>
        Our system is able to build a 2x1 pyramid structure, with only tiny <span className='text-lilac'>(millimeters)</span> manual adjustments needing to be made in order for the blocks to placed correctly. 
      </p>




      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Future Improvements</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Upgrade Camera Setup</h1>
      <p className='ml-8 mb-4'>
        In an attempt to build an entirely self-contained robotic arm that could sense and build without needing extra equipment <span className='text-lilac'>(who would set up the tripod on Mars!?)</span>, we made the design choice to only rely on the Sawyer's wrist camera to detect the blocks.
      </p>

      <p className='ml-8 mb-4'>
        Due to the low resolution of this camera, we encountered many difficulties detecting the blocks. We narrowed the problem down to the camera resolution by testing the CV algorithm on our laptops, where the blocks were detected with much higher accuracy.
      </p>

      <p className='ml-8 mb-8'>
        In future iterations, we could choose a robotic arm with higher quality built-in cameras, or opt for a tripod setup that overlooks the workspace.
      </p>
      
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Ability to Deal with Variety of Block Designs</h1>
      <p className='ml-8 mb-4'>
        Our system currently accounts for one type/dimension of block (see Figure (INSERT) on the <a href="http://localhost:3000/implementation" className="text-blue-500">implementation page</a>).
      </p>

      <p className='ml-8 mb-4'>
      To build an ideal Mars habitat, we would print many different dimensions of blocks. To accomodate this, we would change our block detection algorithm to not only detect where blocks are in the workspace, but classify which block type it is as well.
      </p>

      <p className='ml-8 mb-8'>
         
      </p>

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Obscure Inputs</h1>
      <p className='ml-8 mb-4'>
        The ChatGPT workflow was designed to only take in text input. We believe allowing for obscure inputs such as CAD models (i.e. stl files) and even hand-drawn structures would expand the robot's use case considerably.
      </p>

      <p className='ml-8 mb-4'>
        To accomplish this, we need an algorithm to analyze the hand-drawn drawing and provide the best-fitting CAD model. We would also create an algorithm to deal with CAD model inputs by analyzing the .stl file and outputting a JSON with block coordinates.
      </p>

      <p className='ml-8 mb-8'>
        Having these two algorithms would allow us to handle text, hand-drawn pictures, and CAD models and convert them all to the same object type, a JSON file.
      </p>


      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Non-Planar Layout</h1>
      <p className='ml-8 mb-8'>
        Our current implementation assumes the blocks are laying on the same Z-plane and are moderately separated from one another. In a real world scenario, this may not always be the case (who knows how organized our materials will be on Mars!) 
      </p>
      <p className='ml-8 mb-8'>
      To account for this scenario, our wrist camera can scan the entire workspace by performing a serious of rotations and moving across the scene until it captures all angles of the workspace. As the camera sees new blocks, it approximates its location and saves it to the unplaced_blocks[n] list.
      </p>





    </section>
  )
}
