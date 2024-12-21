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
        The blocks interlocking mechanism was similar to Lego's, but optimized and simplified for the robotic arm. 
        We accomplished an easier interlocking by tapering the prongs.
      </p>

      <img src="/images/block-diagram.png" alt="Block Diagram" className="rounded-full mb-8" />

      




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">ChatGPT</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Block Position Output</h1>
      <p className='ml-8 mb-8'>
        After the user inputs their structure instructions (i.e. "build a tower", "design the Taj Mahal"), ChatGPT 
      </p>


      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Transforming Coordinates From: GPT to Camera to Base Frame</h1>
      <p className='ml-8 mb-8'>
        Start Here
      </p>
      




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Computer Vision</h1>
      
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Detecting Blocks</h1>
      <p className='ml-8 mb-8'>
        Start Here
      </p>

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Distinguishing Blocks From Baseplate</h1>
      <p className='ml-8 mb-8'>
        Start Here
      </p>

      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Detecting Blocks</h1>
      <p className='ml-8 mb-8'>
        Start Here
      </p>




      
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">PID/Controls</h1>







      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">this page has majority/all of technial stuff. </h1>

    </section>
  )
}
