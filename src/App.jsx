import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {
  const [a, setA] = useState([])

  const [index, setIndex] = useState(1)

  const [search, setSearch] = useState("")

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)

    setA(response.data);
  }

  useEffect(function () {
    getData();
  }, [index])


  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2
   left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading....</h3>;
if (a.length > 0) {
  const filteredData = a.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredData.length === 0) {
    printUserData = (
      <h3 className="text-center w-full">No results found</h3>
    )
  } else {
    printUserData = filteredData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }
}

  
  return (
    <div className='bg-gray-900 overflow-auto text-white h-[82%]'>
      {/* <h1 className='font-bold text-white flex  fixed'> Page {index}</h1> */}
         <div className='w-80 px-4 py-2 rounded-full outline-none text-black bg-gray-200'><input
            type="text"
            placeholder="Search by author..."
            className="border px-3 py-2 rounded text-black mx-auto block mt-3"
            onChange={(e) => setSearch(e.target.value)}
          />
</div>
      <div className='flex flex-wrap gap-4 py-4 justify-center'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-5 py-4 '>
        <button className='bg-amber-400 px-5 py-2 rounded active:scale-95 text-sm font-semibold cursor-pointer active:bg-red-600'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setA([])
            }
          }
          }>prev</button>
        <button>Page {index}</button>
        <button
          className='bg-amber-400 px-5 py-2 rounded active:scale-95 text-sm font-semibold cursor-pointer active:bg-red-600'
          onClick={() =>
            setIndex(index + 1)
          } >Next</button>
      </div>
    </div>
  )
}

export default App