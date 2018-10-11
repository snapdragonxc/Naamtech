import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ location: { pathname } }) => {
  let heading = 'All Messages';
  if (pathname.match('add')) {
    heading = 'Add Message';
  } else if (pathname.match('edit')) {
    heading = 'Edit Message';
  }
  return (
    <header className="mb-3">
      <h2 className="mt-4 mb-4">{heading}</h2>
    </header>
  );
};
export default withRouter(Header);
