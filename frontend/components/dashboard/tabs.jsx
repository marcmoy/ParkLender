import React from 'react';

const Tabs = ({ router, pathname }) => {

  let goTo = (route) => {
    return () => {
      // check if already at that route
      if (!pathname.includes(route)) {
        router.push(route);
      }
    };
  };

  let active = route => pathname.includes(route) ? 'active' : null;

  return(
    <div className='tabs-container'>
      <div
        className={active('bookings')}
        onClick={goTo('/bookings')}>Your Bookings</div>
      <div
        className={active('listings')}
        onClick={goTo('/listings')}>Your Listings</div>
      <div
        className={active('settings')}
        onClick={goTo('/settings')}>Account Settings</div>
    </div>
  );
};

export default Tabs;
