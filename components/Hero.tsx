'use client'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AvatarLayout from '@/layouts/AvatarLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import TypedBios from './TypedBios'

export default function Hero() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="max-w-2xl pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I'm Le Minh Hung
        </h1>
        <TypedBios />
        <h2 className="prose mt-2 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my blog - let turn on lofi music & read blogs with a relaxed mind. I enjoy
          developing side projects and writing some tips & solutions for what i have encountered at
          work. Hope you enjoy your time here!
        </h2>
      </div>
      <AvatarLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AvatarLayout>
    </div>
  )
}
