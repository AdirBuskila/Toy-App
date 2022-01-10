import React from 'react'
import {connect} from 'react-redux'


class _ToyApp extends React.Component {
    state = {

    }

    render() {
        return(
            <section>
                Toyz
            </section>
        )
    }



}


function mapStateToProps() {
    return {
    
    }
}

const mapDispatchToProps = {
    
};


export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)
