// PostCard.jsx
import React from 'react'

const PostCard = ({ image, category, title, excerpt, author, date }) => {
  return (
    <div className="bg-[#1A1A2A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C235EA]/40 transition-colors group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full  object-fill group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-[#C235EA] text-white text-xs font-bold px-2 py-1 rounded-lg">
          {category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-xs mt-2 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-[#C235EA]/20 flex items-center justify-center text-[#de9df0] text-[10px] font-bold">
            {author.charAt(0)}
          </div>
          <div className="text-xs">
            <p className="text-gray-300">{author}</p>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard