import React from 'react'
import Header from '../components/home/Header'
import Consectetur from '../components/home/Consectetur'
import LatestEvent from '../components/home/LatestEvent'
import MakeSpecial from '../components/home/MakeSpecial'
import JoinUs from '../components/home/JoinUs'
import Footer from '../components/common/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Consectetur />
            <LatestEvent />
            <MakeSpecial />
            <JoinUs />
            <Footer />
        </ >
    )
}

export default Home