import React, { useState } from 'react'
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(false)
  const [activeTab, setIsActiveTab] = useState('Home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 border-b-2 border-gray-400/10 text-sm sticky top-0 z-30">

      <div className='flex justify-between items-center gap-6'>

        {/* Logo - always visible */}
        <div className="flex items-center font-bold gap-2 mx-2">
          <div className="w-7 h-7 text-white border-2 font-bold flex justify-center items-center border-[#6C028D] bg-[#C235EA] rounded-[28%]">
            <span className="text-white">AB</span>
          </div>
          <span className='text-2xl'>
            <span className="text-[#6C028D]">Anime</span>Blog
          </span>
        </div>

        {/* Nav tabs - hidden on mobile, visible from md up */}
        <div className='hidden md:flex justify-center items-center gap-4'>
          {['Home', 'Category', 'About'].map((tab) => (
            <button
              key={tab}
              onClick={() => setIsActiveTab(tab)}
              className={`rounded-xl px-3 py-1.5 font-bold ${activeTab === tab
                  ? 'bg-[#de9df0]/10 text-[#9B5DE5]'
                  : 'text-gray-500 hover:text-white hover:bg-gray-500/20'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      <div className='flex items-center justify-center gap-3 sm:gap-5'>
        <button
          onClick={() => setActiveButton(!activeButton)}
          className={`flex justify-center items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1A1A2A] overflow-hidden ${activeButton ? "border border-[#C235EA]/50" : ""
            }`}
        >
          <CiSearch className="text-white" />
          <input
            type="search"
            placeholder="Search anime"
            className={`bg-transparent outline-none text-white transition-all duration-200 md:w-28 md:opacity-100 md:ml-1 ${activeButton ? "w-28 opacity-100 ml-1" : "w-0 opacity-0"
              }`}
          />
        </button>

        <img src="./userimage.webp" alt="" className="rounded-full size-7" />

    
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="md:hidden text-white text-2xl"
          aria-label="Open menu"
        >
          <CiMenuBurger />
        </button>
      </div>


      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="fixed top-0 left-0 h-full w-64 bg-[#1A1A2A] p-6 flex flex-col gap-4 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className='text-xl font-bold text-white'>
                <span className="text-[#de9df0]">Anime</span>Blog
              </span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-white text-2xl"
                aria-label="Close menu"
              >
                <IoClose />
              </button>
            </div>

            {['Home', 'Category', 'About'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setIsActiveTab(tab);
                  setIsDrawerOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-xl font-bold ${activeTab === tab
                    ? 'bg-[#de9df0]/10 text-[#9B5DE5]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-500/20'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Navbar