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
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Ability to Deal with Variety of Block Designs</h1>
      <p className='ml-8 mb-8'>
        text
      </p>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Obscure Inputs</h1>
      <h1 className="font-semibold text-xl mb-8 tracking-tighter ml-4">Non-Planar Layout</h1>
      <p className='ml-8 mb-8'>
        Our current implementation assumes the blocks are laying on the same Z-plane and are moderately separated from one another. In a real world scenario, this may not always be the case (who knows how organized our materials will be on Mars!) To strengthen our system
      </p>

      



    </section>
  )
}
