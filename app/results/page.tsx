import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">this will act as results & challenges section from the rubric doc</h1>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Future Improvements</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Upgrade Camera Setup</h1>
      <p className='ml-8 mb-4'>
        In an attempt to build an entirely self-contained robotic arm that could sense and build without needing extra equipment (who would set up the tripod on Mars!?), we made the design choice to only rely on the Sawyer's wrist camera to detect the blocks.
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
      <p className='ml-8 mb-8'>
        The ChatGPT workflow was designed to only take in text input. 
      </p>


      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Non-Planar Layout</h1>
      <p className='ml-8 mb-8'>
        Our current implementation assumes the blocks are laying on the same Z-plane and are moderately separated from one another. In a real world scenario, this may not always be the case (who knows how organized our materials will be on Mars!) 
      </p>
      <p className='ml-8 mb-8'>
      To strengthen our system
      </p>





    </section>
  )
}
