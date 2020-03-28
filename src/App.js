import React from 'react';
import './App.css';
// various playground bits block-commented out below this line
/* import Split from './composition/Split';
import TheDate from './state/TheDate';
import Messages from './Messages';
import Counter from './state/Counter';
import Bomb from './state-drills/Bomb'
import HelloWorld from './state-drills/HelloWorld'
import RouletteGun from './state-drills/RouletteGun'
import Tabs from './state/Tabs'; */
import Accordion from './Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
class App extends React.Component {
  render () {
    return <div>
      <Accordion sections={sections} />
    </div>
  }
}

/* it's react-playground, so there's lots of stuff below
this block comment that are things I've done in the past.
leaving it here for reference. */

/* const tabsProp = [
  {
      name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
  },
  {
      name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  { 
      name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
  },
]; */

/* class App extends React.Component {
  render () {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
} */

/* function App() {
  return (
    <main className='App'>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
      <TheDate />
      <Counter count={123} />
      <HelloWorld />
      <Bomb />
      <RouletteGun />

      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  )
} */

export default App;