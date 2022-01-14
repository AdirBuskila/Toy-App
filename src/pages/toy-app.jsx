import React from 'react'
import {connect} from 'react-redux'
import { loadToys, setFilterByStore } from '../store/toy.action.js'
import {ToyList} from '../cmps/toy-list'
import {ToyFilter} from '../cmps/toy-filter'
import {ToyAdd} from '../cmps/toy-add'


class _ToyApp extends React.Component {

    state = {
        addToy: false
    }

    onAddToy = (bol) => {
        this.setState({
            addToy:bol
        })
    }

    componentDidMount() {
        this.props.loadToys()
    }


    render() {
        const {toys, setFilterByStore, filterBy} = this.props
        const {addToy} = this.state
        return(
            <section>
                <ToyFilter onAddToy={this.onAddToy} setFilterByStore={setFilterByStore} filterByStore={filterBy}  />
                {addToy&& <ToyAdd onAddToy={this.onAddToy} />}
                <ToyList toys={toys} />
            </section>
        )
    }



}


function mapStateToProps({toyModule}) {
    return {
        toys: toyModule.toys,
        filterBy: toyModule.filterBy
    }
}

const mapDispatchToProps = {
    loadToys,
    setFilterByStore,
};


export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)
