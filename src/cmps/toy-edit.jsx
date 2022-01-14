
import React from "react";
import { updateToy } from '../store/toy.action.js'
import {toyService} from '../services/toy.service.js'
import {connect} from 'react-redux'


class _ToyEdit extends React.Component {

    state = {
            name: '',
            price: ''
    }
    

    componentDidMount() {
        const {toy} = this.props
        this.setState({
            name: this.props.toy.name,
            price: this.props.toy.price
        })
    }

    onSaveToy = (ev) => {
      ev.preventDefault()
      let {toy} = this.props
      const {name,price} = this.state
      toy = {...toy, name, price}
        this.props.updateToy(toy)
        this.props.onCloseModal()
        this.props.onGoBack()
  
    }
    

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState(
          (prevState) => ({  ...prevState, [field]: value } ),
          () => {}
        );
      };


    render() {
        const {bol,onCloseModal,toy} = this.props
        const {name, price} = this.state
        if (!bol) return <span></span>
        return (
            <div className="toy-edit">
            <button onClick={onCloseModal} >X</button>
            <form  className='toy-edit-form' onSubmit={this.onSaveToy}>
            <label htmlFor='toy-name'>Name:</label>
            <input
              placeholder='Enter Name...'
              onChange={this.handleChange}
              type='text'
              value={name}
              name='name'
              id='toy-name'
              />
            <label htmlFor='toy-price'>Price:</label>
            <input
              placeholder='Enter Price..'
              onChange={this.handleChange}
              type='number'
              value={price}
              name='price'
              id='toy-price'
              />
              <button>Save</button>
              </form>
            </div>

        )
    }
}

function mapStateToProps() {
  return {
    
  }
}

const mapDispatchToProps = {
  updateToy,
};


export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)
