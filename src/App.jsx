import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(1)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)
      setImages(response.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  const filteredData = images.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-amber-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            ✦ Pixel Gallery
          </h1>

          <div className="relative w-full sm:w-80">
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z" />
            </svg>
            <input
              type="text"
              value={search}
              placeholder="Search by author..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder-gray-400 outline-none transition focus:bg-white/15 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>
      </header>

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-6 py-8 min-h-[60vh]">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-400">
            <div className="w-10 h-10 rounded-full border-4 border-gray-700 border-t-amber-400 animate-spin" />
            <p className="text-sm font-medium">Loading photos…</p>
          </div>
        ) : filteredData.length === 0 ? (
          <p className="text-center text-gray-400 py-32 text-lg">No results found 🙁</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredData.map((elem) => (
              <Card key={elem.id} elem={elem} />
            ))}
          </div>
        )}
      </main>

      {/* Pagination */}
      <footer className="flex items-center justify-center gap-4 py-8">
        <button
          onClick={() => index > 1 && setIndex(index - 1)}
          disabled={index === 1}
          className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 border border-white/15 transition hover:bg-white/20 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10"
        >
          ← Prev
        </button>

        <span className="px-5 py-2.5 rounded-full text-sm font-bold bg-linear-to-r from-amber-400 to-orange-500 text-gray-900 shadow-lg shadow-amber-500/20">
          Page {index}
        </span>

        <button
          onClick={() => setIndex(index + 1)}
          className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 border border-white/15 transition hover:bg-white/20 active:scale-95"
        >
          Next →
        </button>
      </footer>
    </div>
  )
}

export default App
