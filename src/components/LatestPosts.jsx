// LatestPosts.jsx
import React, { useState } from 'react'
import PostCard from './PostCard'

const posts = [
  {
    image: '/DemonSlayer.jpg',
    category: 'Review',
    title: "Demon Slayer: Hashira Training Arc — Ufotable's Visual Triumph",
    excerpt: 'Breaking down the standout sequences and what makes this arc hit different.',
    author: 'Yuki Tanaka',
    date: 'Aug 29, 2026'
  },
  {
    image: '/AOT.jpg',
    category: 'Analysis',
    title: 'Attack on Titan: Every Hidden Symbol in the Final Episode',
    excerpt: 'Revisiting the finale frame by frame to catch what you missed.',
    author: 'Sara Kim',
    date: 'Aug 24, 2026'
  },
  {
    image: '/jujustsu.jpg',
    category: 'Theory',
    title: "Jujutsu Kaisen: Sage Akutami's Endgame Theory Breakdown",
    excerpt: 'Piecing together the clues scattered across the latest chapters.',
    author: 'Ren Fujiwara',
    date: 'Aug 18, 2026'
  },
  {
    image: '/Vindland saga.jpg',
    category: 'Opinion',
    title: 'Why Vinland Saga Is the Best Historical Anime Ever Made',
    excerpt: 'An unpopular take that deserves way more discussion than it gets.',
    author: 'Yuki Tanaka',
    date: 'Aug 12, 2026'
  },
]

const tabs = ['All', 'Review', 'News', 'Analysis', 'Opinion']

const LatestPosts = () => {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? posts
    : posts.filter(p => p.category === activeTag)

  return (
    <section className="px-6 md:px-12 py-10">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-white text-xl font-bold">Latest Posts</h2>
          <p className="text-gray-500 text-sm">Fresh takes, sharp analysis, no filler</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {tabs.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                activeTag === tag
                  ? 'bg-[#C235EA] text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}
      </div>
    </section>
  )
}

export default LatestPosts