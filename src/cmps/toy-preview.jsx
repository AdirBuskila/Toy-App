import React from 'react';
import { Link } from 'react-router-dom';
// import productImg from `assets/img/${this.props.toy.img}`;

export class ToyPreview extends React.Component {
  render() {
    const { toy } = this.props;
    return (
      <Link className='clean-link' to={`/toy/${toy._id}`}>
        <div className='toy-preview'>
          <h3>
            {toy.name}
          </h3>
          {toy.img&&<img src={require(`../assets/img/${toy.img}`)}  />}
          <h3>
            <span>Price:</span> {toy.price}$
          </h3>
        </div>
      </Link>
    );
  }
}
