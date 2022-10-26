import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ item }) => {
    const [like, setLike] = useState(false)

    return (
        <div className='w-[160] sm:w-[200px] md:w-[240] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-20 text-center'>
                    {item?.title}
                </p>
                {/* <p>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p> */}
                <div>
                    <Link to='/detail'>
                        <button className='absolute top-20 md:text-sm border left-6 text-white border-gray-300 py-0 px-5 ml-4'>Detail</button>
                    </Link>
                    <Link to='/ticket'>
                        <button className='absolute top-20 md:text-sm border right-9 border-radius text-white border-gray-300 py-0 px-6 ml-10'>  Buy  </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie




// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// // import { FaHeart, FaRegHeart } from 'react-icons/fa';
// // import { TbDiscount2 } from 'react-icons/tb';

// // const Movie = ({ item }) => {
// const Movie = ({ value }) => {
//     const [movies, setMovies] = useState(false)

//     return (
//         <div className='w-[160] sm:w-[200px] md:w-[240] lg:w-[280px] inline-block cursor-pointer relative p-2'>
//             {/* <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} /> */}
//             <img className='w-full h-auto block' src={`http://192.168.1.10:8000/api/test/${value?.movies}`} alt={value?.title} />
//             <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
//                 {/* <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-20 text-center'>
//                     {item?.title}
//                 </p> */}
//                 <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-20 text-center'>
//                     {value?.title}
//                 </p>
//                 <div>
//                     <Link to='/detail'>
//                         <button className='absolute top-20 md:text-sm border left-6 text-white border-gray-300 py-0 px-5 ml-4'>Detail</button>
//                     </Link>
//                     <Link to='/ticket'>
//                         <button className='absolute top-20 md:text-sm border right-9 text-white border-gray-300 py-0 px-6 ml-10'>  Buy  </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Movie







