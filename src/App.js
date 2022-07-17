import './App.css';
import First from './components/First';
import Second from './components/Second';
import MapComponent from './components/MapComponent';
import { createContext } from 'react';
import axios from 'axios';
import React from 'react';
import Regist from './components/Regist';
export const AppContext = createContext({});

function App() {
  const [firstText, setFirstText] = React.useState('First Text');
  const [secondText, setSecondText] = React.useState('Second Text');
  const [data, setData] = React.useState([]);
  React.useEffect(() => async () => fetchData(), []);

  const fetchData = async () => {
    axios
      .get('https://desolate-refuge-88053.herokuapp.com/hellow')
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setData(response.data);
      });
  };

  const updateText = (text) => {
    setFirstText(text);
  };
  const secondUpdate = (text) => {
    setSecondText(text);
  };
  return (
    <div className='App'>
      <AppContext.Provider
        value={{ firstText, secondText, updateText, secondUpdate }}>
        <Third />
      </AppContext.Provider>
    </div>
  );
}

export default App;
