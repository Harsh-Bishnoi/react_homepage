import React from 'react'
import Header from '../components/Home/Header'
import Consectetur from '../components/Home/Consectetur'
import LatestEvent from '../components/Home/LatestEvent'
import MakeSpecial from '../components/Home/MakeSpecial'
import JoinUs from '../components/Home/JoinUs'
import Footer from '../components/common/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Consectetur />
            <LatestEvent />
            <MakeSpecial />
            <JoinUs />
            <Footer/>
        </ >
    )
}

export default Home