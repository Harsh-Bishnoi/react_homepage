import React from 'react'
import EventHeader from '../components/event-page/EventHeader'
import NextEvent from '../components/event-page/NextEvent'
import Footer from '../components/common/Footer'

const EventPage = () => {
  return (
      <div>
          <EventHeader />
          <NextEvent />
          <Footer />
    </div>
  )
}

export default EventPage