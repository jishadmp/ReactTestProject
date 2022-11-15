
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import {Greet} from './components/Greet'
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import {Person} from './components/Person'
import { PersonList } from './components/PersonList';
import {Status} from './components/Status'

function App() {
  const personName={
    first:'Chatrapati',
    last:'Shivaji'
  }
  const nameList=[
    {
      first:'Chatrapathi',
      last:'Shivaji'
    },
    {
      first:'Maveli',
      last:'Thampuran'
    },
    {
      first:'CholaRaja',
      last:'Simham'
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='Test' messageCount={20} isLoggedin={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to me</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id)=>console.log('Button clicked',event,id)} /> */}
      <input value='' />
      <Container styles={{border: '1px solid black', padding:'1rem'}}/>
    </div>
  );
}

export default App;
