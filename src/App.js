// import logo from './logo.svg';
import './App.css';
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import Header from './header/Header';
import Button from './button/Button';



function App() {
  const name ="Pratibha";

  return (
    <div className='App'>
      Hello {name}
      <AddTask/>
      <ViewTask/>
      <Header/>
      <Button/>

    </div>
  );
}

export default App;
