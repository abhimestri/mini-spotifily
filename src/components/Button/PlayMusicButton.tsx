import React from 'react'

const PlayMusicButton = () => {
    return (
      <div className="w-[30px] h-[30px] rounded-full bg-[#66DB64] p-[11px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="31px"
          viewBox="0 0 24 24"
          width="31px"
          fill="#000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    );
}
export default PlayMusicButton