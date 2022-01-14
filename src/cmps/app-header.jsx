import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import logo from '../assets/img/logo.png';

class _AppHeader extends React.Component {
  state = {};

  render() {
    return (
      <header className='app-header'>
        <Link className='clean-link' to='/'>
          <div className='logo-container'>
            <h3>
              <span style={{ color: '#f11837' }}>T</span>
              <span style={{ color: '#1a8de6' }}>O</span>
              <span style={{ color: '#56b621' }}>Y</span>
              <span style={{ color: '#fcae01' }}>Z</span> R U
            </h3>
            <img src={logo} alt='logo' />
          </div>
        </Link>
        <nav>
          <NavLink to='/'>Home</NavLink> |<NavLink to='/login'>Login</NavLink> | <NavLink to='/toy'>Toys</NavLink> |{' '}
          <NavLink to='/dashboard'>DashBoard</NavLink> | <NavLink to='/about'>About Us</NavLink>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {};

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppHeader);
