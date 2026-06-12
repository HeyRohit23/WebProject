import React from 'react'

const Card = (props) => {
  const { url, download_url, author } = props.elem

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:ring-amber-400/50 hover:shadow-amber-500/10"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={download_url}
          alt={author}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay + author */}
      <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="p-3 w-full">
          <p className="text-xs text-gray-300">Photo by</p>
          <h2 className="text-sm font-semibold truncate">{author}</h2>
        </div>
      </div>
    </a>
  )
}

export default Card
