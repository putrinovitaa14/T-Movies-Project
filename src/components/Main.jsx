import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    //   console.log(moviesssssssssss);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className='w-full h-[600px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h2 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h2>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                            Watch Trailer
                        </button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                            Get Ticket
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm'>
                        Released: {movie?.release_date}
                    </p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;








// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import requests from '../Requests';

// const Main = () => {
//     const [movies, setMovies] = useState([]);

//     const movie = movies[Math.floor(Math.random() * movies.length)];

//     useEffect(() => {
//         axios.get('http://192.168.1.10:8000/api/test').then((response) => {
//             setMovies(response.data.results);
//         });
//     }, []);
//       console.log(movieeeeeeeeeeeeeeeeeeee);

//     const truncateString = (str, num) => {
//         if (str?.length > num) {
//             return str.slice(0, num) + '...';
//         } else {
//             return str;
//         }
//     };

//     return (
//         <div className='w-full h-[600px] text-white'>
//             <div className='w-full h-full'>
//                 <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
//                 <img
//                     className='w-full h-full object-cover'
//                     src={`https://image.tmdb.org/t/p/original/${movie?.movies}`}
//                     alt={movie?.title}
//                 />
//                 <div className='absolute w-full top-[20%] p-4 md:p-8'>
//                     <h2 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h2>
//                     <div className='my-4'>
//                         <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
//                             Watch Trailer
//                         </button>
//                         <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
//                             Get Ticket
//                         </button>
//                     </div>
//                     <p className='text-gray-400 text-sm'>
//                         Released: {movie?.release_date}
//                     </p>
//                     <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
//                         {truncateString(movie?.overview, 150)}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Main;







