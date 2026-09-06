// BlogPost.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CiHeart, CiBookmark, CiShare2 } from "react-icons/ci"
import LatestPosts from '../components/LatestPosts'
import TrailerSection from '../components/TrailerSectiom'
import { posts } from '../components/LatestPosts'
import PostCard from '../components/PostCard'

const BlogPost = () => {
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-2xl font-bold">Post not found</h1>
        <p className="text-gray-400 mt-2">This one might've been moved or doesn't exist.</p>
        <Link to="/" className="mt-6 px-6 py-2 rounded-xl bg-[#C235EA] text-white font-bold">
          Back home
        </Link>
      </div>
    )
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[url('./bg.avif')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F1A]/40 via-[#0F0F1A] to-[#0F0F1A]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="bg-[#1A1A2A]/95 border border-white/10 rounded-2xl p-8">
          <span className="inline-block bg-[#C235EA]/10 text-[#de9df0] text-xs font-bold px-3 py-1 rounded-lg mb-3">
            {post.category}
          </span>

          <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C235EA]/20 flex items-center justify-center text-[#de9df0] text-xs font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs">
                <p className="text-gray-300 font-bold">
                  {post.author} <span className="text-gray-500 font-normal">· {post.authorRole}</span>
                </p>
                <p className="text-gray-500">{post.date} · {post.readTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-[#de9df0] hover:bg-[#C235EA]/10 transition-colors">
                <CiHeart size={18} />
              </button>
              <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-[#de9df0] hover:bg-[#C235EA]/10 transition-colors">
                <CiBookmark size={18} />
              </button>
              <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-[#de9df0] hover:bg-[#C235EA]/10 transition-colors">
                <CiShare2 size={18} />
              </button>
            </div>
          </div>

          {post.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i} className="text-white font-bold text-lg mt-8">{block.text}</h2>
            ) : (
              <p key={i} className="text-gray-400 text-sm mt-4 leading-relaxed">{block.text}</p>
            )
          )}

          {post.trailerVideoId && (
            <TrailerSection videoId={post.trailerVideoId} thumbnail={post.trailerThumb} />
          )}

          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/10 flex-wrap">
            <span className="text-gray-500 text-xs">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/5 text-gray-400 text-xs px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-white text-lg font-bold mb-4">Related Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <PostCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost