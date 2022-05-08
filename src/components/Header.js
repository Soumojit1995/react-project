import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
      <div className = 'container-fluid'>
          <header className="row center">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid header-con">
                    <a className="navbar-brand" href="#/">{props.pageName}</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" >Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/bmi-calculator" exact="true" >BMI</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gallery" exact="true" >Gallery</NavLink>
                        </li>
                    </ul>
                    {props.project==='2'? 
                    <a href = "#/cart" className = "cart_icon_link cou_a " > <i className="fa fa-shopping-cart"></i>
                        <span className="cou_cart">
                            {props.countCartItems ? props.countCartItems: 0 }
                        </span>
                    </a> :'' }
                    
                </div>
            </nav>
            
            
        </header>
      </div>
    
  );
}