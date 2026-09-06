// Hero.jsx
import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center px-6 md:px-12">
      <div className="absolute inset-0 bg-[url('./bg.avif')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/80 to-[#0F0F1A]/30" />

      <div className="relative z-10 flex items-center justify-between w-full flex-wrap gap-10">
        <div className="max-w-lg">
          <span className="inline-block bg-[#C235EA]/10 text-[#de9df0] text-xs font-bold px-3 py-1 rounded-xl mb-4">
            ✦ Featured Anime Bulletin
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Latest Anime <span className="text-[#C235EA]">News</span> &{' '}
            <span className="text-[#de9df0]">Reviews</span>
          </h1>

          <p className="text-gray-400 text-sm mt-4">
            In-depth reviews, breaking news, and sharp community analysis — all in one place. Swipe the cards to discover featured posts.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div className="bg-[#C235EA]/10 text-[#de9df0] text-xs font-bold px-3 py-2 rounded-xl">
              2.4M <span className="text-gray-400 font-normal">Posts</span>
            </div>
            <div className="bg-[#C235EA]/10 text-[#de9df0] text-xs font-bold px-3 py-2 rounded-xl">
              180K <span className="text-gray-400 font-normal">Readers</span>
            </div>
            <div className="bg-[#C235EA]/10 text-[#de9df0] text-xs font-bold px-3 py-2 rounded-xl">
              24 <span className="text-gray-400 font-normal">Writers</span>
            </div>
          </div>
        </div>

        {/* Featured card */}
        <div className="w-64 rounded-2xl overflow-hidden border border-white/10 bg-[#1A1A2A]">
          <img src="/jujustsu.jpg" alt="" className="w-full h-72 object-cover" />
          <div className="p-3">
            <p className="text-white text-sm font-bold leading-snug">
              Jujutsu Kaisen: Sage Akutami's Endgame Theory Breakdown
            </p>
            <div className="flex items-center gap-3 mt-3 text-gray-400 text-xs">
              <span>👁 12K</span>
              <span>💜 3.1K</span>
              <span>💬 240</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero