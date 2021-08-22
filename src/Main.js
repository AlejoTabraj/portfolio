import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Yo from './Yo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Main() {
  const [transition, setTransition] = useState(false);
  const count = 20

  useEffect(() => {
    const div = document.querySelector('#main')

const count = 20
for(let i = 0; i < count; i++){
  var glitch = document.createElement('div')
      glitch.className = 'box'
      
      div.appendChild(glitch)
}

var gli_tch = document.querySelectorAll('.box')
setInterval(function(){
  
for(var i = 0; i < count; i++){
  gli_tch[i].style.width = Math.floor(Math.random() * 100) + 'px'
  gli_tch[i].style.height = Math.floor(Math.random() * 20) + 'px'
    gli_tch[i].style.left = Math.floor(Math.random() * 100) + '%'
    gli_tch[i].style.top = Math.floor(Math.random() * 100) + '%'

}
  
}, 900)

    const timer = setTimeout(() => {
      setTransition(true);
    }, 10);
    return () =>{ clearTimeout(timer); }
  }, []);
  return (
    <main id='main' className={`${transition ? 'main-left' : ''}`}>
      <Router>
        <Navbar transition={transition} />
        <Switch>
          <Route extact path={'/'}>
            <Yo />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
