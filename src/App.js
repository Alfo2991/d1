import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        My buttons:
        <ButtonComponent text="Click Me!" />
        <ButtonComponent text="Click Me!"/>
        <ButtonComponent text="Click Me!"/>

        My Images:
        
          <ImageComponent src="https://img.freepik.com/premium-photo/cute-easter-bunny-rabbit-inside-cracked-egg-generative-ai_601748-44450.jpg?w=996" alt="Image 1"/>
          <ImageComponent src="" alt="Image 2"/>
          <ImageComponent src="" alt="Image 3"/>
       
      </header>
    </div>
  );
}

export default App;
