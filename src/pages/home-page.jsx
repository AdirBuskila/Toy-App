import React from 'react'
import {connect} from 'react-redux'
import home from '../assets/img/home.jpg'

class _HomePage extends React.Component {
    state = {

    }

    render() {
        return (
            <section className='home-page'>
                <h1>Welcome To The Best Toy Store Ever!</h1>
                <img src={home} alt='home' className='home-img' />
        </section>
             )
    }

}

function mapStateToProps(state) {
    return {
 
    }
}
const mapDispatchToProps = {

}



export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
