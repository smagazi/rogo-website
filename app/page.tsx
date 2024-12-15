import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-1 text-4xl font-semibold tracking-tighter text-center">
        Mars Habitat Builder
      </h1>
      
      <p className="text-xl text-center text-white-500">
        An LLM Powered 
      </p>
      <div className="text-center">
        {/* <a href="https://www.linkedin.com/in/your-profile" className="text-blue-500 hover:underline">Aarav Goel</a>,
        <a href="https://www.linkedin.com/in/your-profile" className="text-blue-500 hover:underline">Your Name</a>,
        <br /> */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/xQhCtnd-jgk?autoplay=1&loop=1&playlist=xQhCtnd-jgk" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen 
          style={{ marginTop: '20px' }}
          className="rounded-lg"
        ></iframe>
        <p className="text-xl text-center text-white-500">
        This page will have the Mars stuff + usecases of this robot. more of a "passion/hook page". this covers the "introduction" section from the rubric doc 
      </p>
      </div>



    </section>
  )
}
