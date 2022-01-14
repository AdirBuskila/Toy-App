import React from 'react';
import { connect } from 'react-redux';
import { toyService } from '../services/toy.service.js';
import { ToyEdit} from '../cmps/toy-edit'
import { removeToy } from '../store/toy.action.js';


class _ToyDetails extends React.Component {
  state = {
    toy: null,
    editToy: false,
  };

  componentDidMount() {
    this.loadToy();
  }

  loadToy = async () => {
    const { toyId } = this.props.match.params;
    try {
      const toy = await toyService.getById(toyId)
      if (!toy) return this.props.history.push('/');
      this.setState({ toy });
    } catch (err) {
      console.log('cant load toy',err);
    }
 
  };

  toyLabel = (labels) => {
    return labels.map((label) => {
      return <p key={label}> {label},</p>;
    });
  };

 onCloseModal = () => {
     this.setState({editToy:false})
 }

  onGoBack = () => {
    this.props.history.push('/toy');
  };

  changeEditMode = (bol) => {
    this.setState({ OnEdit: bol });
  };

  render() {
    const { toy, editToy } = this.state;
    if (!this.state.toy) return <div className=''>Loading...</div>;
    return (
       <div className='toy-details'>   
        <div className='info'>
          <h2>
            <span>Toy:</span> {toy.name}
          </h2>
          <h2>
            <span>Id:</span> {toy._id}
          </h2>
          <h2>
            <span>Status:</span>{' '}
            {toy.inStock ? (
              <span style={{ color: '#56b621' }}>In Stock</span>
            ) : (
              <span style={{ color: '#f11837' }}>Out Of Stock</span>
            )}
          </h2>
          <h2>
            <span>Price:</span> {toy.price}$
          </h2>
          <h2>
            <span>Labels:</span> {this.toyLabel(toy.labels)}
          </h2>
          <div className='toy-reviews'>
            <h2>Reviews:</h2>
            {toy.reviews}
          </div>
          <div className='btn-container'>
            <button
              onClick={() => {
                this.setState({ editToy: true });
              }}
            >
              Edit
            </button>
            <button
            onClick={()=> {
              this.props.removeToy(toy._id)
              this.onGoBack()
            }}
            >Delete</button>
          </div>
        </div>
        <div className='img-container'>
        {toy.img&&<img src={require(`../assets/img/${toy.img}`)}  />}
        </div>
        <ToyEdit toy={toy} bol={editToy} onGoBack={this.onGoBack} onCloseModal={this.onCloseModal} />
      </div>
    )
  } 
}

function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {

  removeToy

};

export const ToyDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ToyDetails);
