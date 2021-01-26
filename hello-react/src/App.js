import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table/>
      {/* <FragmentDemo/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <h1 className='error'>Error here </h1>
      <h1 className={styles.success}>Hurray success</h1>
      {/* <NameList/> */} 
      {/* <Inline/>  */}
      {/* <Stylesheet primary={true}/> */}
      {/* <UserGreeting/> */}
      {/* <Greet name="Bebana" hobby="eating">
        <p>I am almost two years old and i love to eat !</p>
       </Greet>
      <Greet name="Kitty" hobby="purring"/>
      <Greet name="Bubu" hobby="sleeping"/>
      <Welcome name="baby" hobby="eating"/> */}
      {/* <Message/> */}
      {/* < Counter/> */}
       {/* <FunctionClick />   */}
      {/* <ClassClick/> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent/> */}

     
    </div>
  );
}

export default App;
