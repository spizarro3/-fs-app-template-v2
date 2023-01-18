import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const NavbarOUTDATED = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin === true)
  console.log("IS ADMIN IN NAVBAR: ", isAdmin)
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <h1 className="text-white bg-gray-900 flex justify-center text-4xl p-7 brightness-50 italic">Grace Shopper</h1>
      <nav>
        {isLoggedIn && !isAdmin ? (
          <div className='flex justify-evenly'>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : isAdmin ? 
        <div>
        <Link to="/admin/products">Admin Products</Link>
        <Link to="admin/signupAdmin">Sign Up New Admin</Link> 
        <Link to="admin/users">Users</Link> 
        <button type="button" onClick={logoutAndRedirectHome}>
          Logout
        </button>
      </div>
    :
    (
      <div></div>
    )
    }</nav>
    </div>
  );
};

export default NavbarOUTDATED;
