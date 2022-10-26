import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </>
    )
}

export default Home



// import React, { useEffect, useState } from 'react'
// import Main from '../components/Main'
// import requests from '../Requests'
// import Row from '../components/Row'
// import axios from 'axios'
// import { async } from '@firebase/util'

// const Home = () => {
//     const [data, setData] = useState()

//     const getdata = async () => {
//         await axios.get('http://192.168.1.10:8000/api/test').then(response => {
//             // console.log(res)
//             setData(response.data)

//         })
//     }

//     // console.log(data)

//     useEffect(() => {
//         getdata();
//     }, [])

//     return (
//         <>
//             {/* <Main />
//             <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
//             <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
//             <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
//             <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
//             <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
//             { */}
//             {
//                 data.map((value, i) => (
//                     <Row rowID='1' className='text-white' key={i}>{value.movies}
//                     </Row>
//                 ))
//             }
//         </>
//     )
// }

// export default Home