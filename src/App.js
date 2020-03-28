import React, { Component } from 'react';
// import Split from './composition/Split';
import './App.css';
/* import TheDate from './state/TheDate';
import Messages from './Messages';
import Counter from './state/Counter'; */
import Bomb from './state-drills/Bomb'
import HelloWorld from './state-drills/HelloWorld'
import RouletteGun from './state-drills/RouletteGun'

function App() {
  return (
    <main className='App'>
{/*       <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
      <TheDate />
      <Counter count={123} /> */}
      <HelloWorld />
      <Bomb />
      <RouletteGun />
{/*       <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split> */}
    </main>
  )
}

export default App;