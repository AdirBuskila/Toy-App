
import React from "react";
import { addToy } from '../store/toy.action.js'
import {toyService} from '../services/toy.service.js'
import {connect} from 'react-redux'


class _ToyAdd extends React.Component {

    state = {
            name: '',
            price: '',
            labels: '',
            inStock: '',
    }
    
    onSaveToy = (ev) => {
      ev.preventDefault()
      let newToy = toyService.getEmptyToy()
      let labels = this.state.labels
      labels = labels.split(",")
      const {name,price} = this.state
      newToy = {...newToy, name, price, labels}
      this.props.addToy(newToy)
      this.props.onAddToy(false)
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
        const {name, price,labels} = this.state
        return (
            <div className="toy-add">
            <form  className='toy-add-form' onSubmit={this.onSaveToy}>
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
            <label htmlFor='toy-labels'>Labels:</label>
            <input
              placeholder='Enter Comma Separated Labels'
              onChange={this.handleChange}
              type='text'
              value={labels}
              name='labels'
              id='toy-labels'
              />
            {/* <label htmlFor='toy-inStock'>In Stock:</label>
            <input
              onChange={this.handleChange}
              type=''
              value={inStock}
              name='inStock'
              id='toy-inStock'
              /> */}
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
    addToy,
};


export const ToyAdd = connect(mapStateToProps, mapDispatchToProps)(_ToyAdd)
