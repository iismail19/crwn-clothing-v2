import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

// An Outlet is to be used in a parent route to render their child route elements
// If we have more than one element they must be in a parent div or a react Fragment
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>Logo</div>
        </Link>
        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
