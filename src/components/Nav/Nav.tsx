import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './Nav.scss';

interface Props {
  navItems: any[];
  updateState: any;
}

const Nav: React.FC<Props> = ({ navItems, updateState }) => {

    return (
      <nav className="nav">
        <ul className="nav__list">
            <BrowserRouter>
                {
                  navItems.map(( item, index ) => (
                      <li className="nav__item" key={index}>
                          <NavLink
                              className="nav__link"
                              to={'/react-test/build/' + item.id}
                              activeClassName="nav__link--active"
                              onClick={() => updateState({ currentId: item.id })}
                          >{item.name}</NavLink>
                      </li>
                  ))
                }
            </BrowserRouter>
        </ul>
      </nav>
  );

};

export default Nav;