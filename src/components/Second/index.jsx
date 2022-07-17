import React from 'react';
import { AppContext } from '../../App';
import Regist from '../Regist';
import axios from 'axios';
export default function Second() {
  const { updateText, secondText } = React.useContext(AppContext);
  const onClickBtn = (num) => {
    axios
      .get('https://desolate-refuge-88053.herokuapp.com/hellow')
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className='wrapper'>
      <div className='registerContent'>
        <Regist />;
      </div>
    </div>
  );
}
