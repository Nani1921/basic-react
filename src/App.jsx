
import './App.css'

// import Header from './components/layout/Header';
// import Counter from './components/state/Counter';
import MultiCounter from './components/state/MultiCounter';

function App() {
 

  return (
    <>
      {/* <Header /> */}
      
      {/* <Counter initialvalue={0} /> */}
   
    <MultiCounter inc={5}/>
    <MultiCounter inc={10}/>
   




    </>

  );
}

export default App
