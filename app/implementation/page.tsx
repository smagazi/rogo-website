import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Hardware</h1>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">ChatGPT</h1>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Computer Vision</h1>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">PID/Controls</h1>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">this page has majority/all of technial stuff. </h1>

    </section>
  )
}
