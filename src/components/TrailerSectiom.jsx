
import React, { useState } from 'react'
import { CiPlay1 } from "react-icons/ci"

const TrailerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="mt-8">
      <h2 className="text-white font-bold text-lg mb-3">Official Trailer</h2>

      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
        {!isPlaying ? (
          <>
            <img
              src="/images/demon-slayer-trailer-thumb.jpg"
              alt="Demon Slayer trailer thumbnail"
              className="w-full h-full object-cover opacity-70"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play trailer"
            >
              <span className="w-16 h-16 rounded-full bg-[#C235EA] flex items-center justify-center group-hover:bg-[#9B5DE5] transition-colors shadow-[0_0_25px_#C235EA80]">
                <CiPlay1 size={28} className="text-white ml-1" />
              </span>
            </button>
            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
              2:14
            </span>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="Demon Slayer official trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}

export default TrailerSection