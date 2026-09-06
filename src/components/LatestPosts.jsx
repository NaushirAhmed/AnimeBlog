// LatestPosts.jsx
import React, { useState } from 'react'
import PostCard from './PostCard'


export const posts = [
  {
    id: 'demon-slayer-hashira-arc',
    image: 'DemonSlayer.jpg',
    category: 'Review',
    title: "Demon Slayer: Hashira Training Arc — Ufotable's Visual Triumph",
    excerpt: 'Ufotable raises the animation bar once again with breathtaking sakuga sequences.',
    author: 'Yuki Tanaka',
    authorRole: 'Senior Editor',
    date: 'Aug 29, 2026',
    readTime: '6 min read',
    tags: ['Anime', 'Demon Slayer', 'Ufotable', 'Sakuga'],
    trailerVideoId: 'https://www.youtube.com/watch?v=x7uLutVRBfI',
    trailerThumb: '/images/demon-slayer-trailer-thumb.jpg',
    body: [
      { type: 'p', text: "Ufotable raises the animation bar once again with breathtaking sakuga sequences and emotional storytelling that transcends the shounen genre." },
      { type: 'p', text: "The studio has demonstrated once again why it stands apart from every other animation house in Japan. Frame after frame carries an emotional weight that comes not just from the voice acting, but from the deliberate way every panel is placed. This is craft in the truest sense — intentional, obsessive, and absolutely uncompromising." },
      { type: 'h2', text: 'Why This Arc Changes Everything' },
      { type: 'p', text: "What makes this particular arc so significant isn't just the spectacle. It's the decision to slow down and let characters breathe. Previous seasons prioritized momentum — and rightly so, given the frenetic pacing of the source material. But here, the creative team makes room for silence." },
      { type: 'p', text: "These are choices that elevate a good anime into a great one. They distinguish studios who are merely technically proficient from those who are genuinely artful." },
      { type: 'h2', text: 'The Soundtrack Is Quietly Masterful' },
      { type: 'p', text: "The musical composition feels more restrained this season — and paradoxically more powerful for it. Where previous entries leaned on dramatic swells, this arc uses negative space." },
      { type: 'p', text: "This is the rare animated production that rewards careful listening as much as careful watching." },
    ],
  },
  {
    id: 'attack-on-titan-final-symbols',
    image: 'AOT.jpg',
    category: 'Analysis',
    title: 'Attack on Titan: Every Hidden Symbol in the Final Episode',
    excerpt: 'Revisiting the finale frame by frame to catch what you missed.',
    author: 'Sara Kim',
    authorRole: 'Staff Writer',
    date: 'Aug 24, 2026',
    readTime: '8 min read',
    tags: ['Anime', 'Attack on Titan', 'Analysis'],
    trailerVideoId: '',
    trailerThumb: '',
    body: [
      { type: 'p', text: 'Revisiting the finale frame by frame to catch what you missed.' },
    ],
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
        {filtered.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  )
}

export default LatestPosts