import React from 'react'

import { Component } from 'react'

import { MyMap } from '../cmps/map.jsx'

export class About extends Component {

    state = {
        currLat: null,
        currLng: null,
        selectedShop: 'Ashkelon'
    }

    setMapCenter = ({ lat, lng }) => {
        this.setState({ currLat: lat, currLng: lng })
    }

    setSelectedShop = (shopName) => { 
        this.setState({ selectedShop: shopName })
    }

    render() {
        const { selectedShop } = this.state
        const { currLat, currLng } = this.state
        

        return (
            <section className='about-page'>
                <div className='map-container'>
                    <MyMap coords={{ Lat: currLat, Lng: currLng }} />
                </div>
                <div className='map-navigate-btns-container'>
                    <button className={('Ashkelon' === selectedShop) ? 'active' : ''} onClick={() => {
                        this.setMapCenter({lat: 31.6817849, lng: 34.5860601 })
                        this.setSelectedShop('Ashkelon')
                    }}>Ashkelon</button>

                    <button className={('Los Angeles' === selectedShop) ? 'active' : ''} onClick={() => {
                        this.setMapCenter({lat: 34.0392321, lng: -118.2137171 })
                        this.setSelectedShop('Los Angeles')
                    }}>Los Angeles</button>

                    <button className={('San Pedro La Laguna' === selectedShop) ? 'active' : ''} onClick={() => {
                        this.setMapCenter({lat: 14.690483, lng: -91.2592005 })
                        this.setSelectedShop('San Pedro La Laguna')
                    }}>San Pedro</button>

                </div>
            </section>
        )
    }
}
