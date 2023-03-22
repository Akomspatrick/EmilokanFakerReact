
import './App.css';

import Message from './Message';
import MyCard from './MyCard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <MyCard header={"Header: Using faker"}>
          <Message service={"Hello"} message="Faker Somebody"></Message>
        </MyCard>
        
        <MyCard header={"Header: Emilokan"}>
             <div>It is well...</div>
        </MyCard>
      </header>
    </div>
  );
}

export default App;
