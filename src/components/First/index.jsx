import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';

import { Button, DatePicker, version } from 'antd';

export default function First(props) {
  const url = 'https://cleaner.dadata.ru/api/v1/clean/address';
  const token = 'd87c5245042b464e3ed4e009e8cd85d645b20c1a';
  const secret = '214e50973f9398b2e3396384b90ee53573070fb5';
  const query = 'мск сухонска 11/-89';

  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token,
      'X-Secret': secret,
    },
    body: JSON.stringify([query]),
  };

  const [inputEmail, setInputEmail] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const map = useMap();
  console.log('map center:', map.getCenter());

  const changeInputEmail = (e) => {
    setInputEmail(e.target.value);
    searchAddress();
  };
  const changeInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const searchAddress = () => {
    axios
      .post(
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
        { query: inputEmail, bounds: 'city' },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token d87c5245042b464e3ed4e009e8cd85d645b20c1a',
          },
        },
      )
      .then((res) => {
        console.log(res.data.suggestions);
      });
    // axios(options)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // axios
    //   .get('https://desolate-refuge-88053.herokuapp.com/api/profile')
    //   .then((response) => {
    //     console.log(response);
    //   });
  };
  return (
    <div>
      {/* <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type='primary' style={{ marginLeft: 8 }}>
        Primary Button
      </Button> */}
      <h1>Авторизация</h1>
      <input
        placeholder='Введите E-mail'
        value={inputEmail}
        onChange={(e) => changeInputEmail(e)}
      />
      <br />
      <input
        placeholder='Введите пароль'
        value={inputPassword}
        onChange={(e) => changeInputPassword(e)}
      />
      <p>Нажмите кнопку</p>
      <button type='' className=''>
        Войти!
      </button>
    </div>
  );
}
