import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>

      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">add presentation and repo </h1>

      {/* Embed Google Slides Presentation */}

      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRXN33DHZPofJc4I-KFA2kSLBscoQ957g5krb7D2P8e16nwUEDXWrWXmQuAtkuYuLtK5Z4T-BMso7zx/embed?start=false&loop=false&delayms=5000" frameBorder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>    </section>
  )
}
