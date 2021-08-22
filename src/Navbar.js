import React from 'react';
import { Link } from 'react-router-dom';
export default function({ transition }) {
  return (
    <nav>
      <ul>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'#'}>Yo</Link>
        </li>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'#'}>Projectos</Link>
        </li>
        <li className={`${transition ? 'link-rotate' : ''}`}>
          <Link to={'#'}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
