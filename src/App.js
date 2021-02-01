import React from 'react'
      import Header from './Header';
      import './App.css';
import Stats from './Stats';
import Newsfeed from './Newsfeed';

      function App() {
  return (
    <div className='app'>
      <div className='app__header'>
<Header/>
      </div>
      <div className='app__body'>
<div className='app__container'>
<Newsfeed/>
<Stats/>
</div>
      </div>

    </div>
  )
}

export default App;
