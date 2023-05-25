import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Carusel from '../Components/Swiper/Carusel'
import Sciences from '../Components/Sciences/Sciences'
import Elonlar from '../Components/Elon/Elonlar'
import Maincard from '../Components/Maincard/Maincard'
import Xizmatlar from '../Components/Xizmatlar/Xizmatlar'
import Sorovnoma from '../Components/Sorovnoma/Sorovnoma'
import Hamkorlar from '../Components/Hamkorlar/Hamkorlar'
import Footer from '../Components/Footer/Footer'

function Main() {
    return (
        <div>
            <Navbar />
            <Carusel />
            <Sciences />
            <Elonlar />
            <Maincard />
            <Xizmatlar />
            <Sorovnoma />
            <Hamkorlar />
            <Footer />
        </div>
    )
}

export default Main