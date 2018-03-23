import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGame: defaultGame,
      games: []
    }
  }

  componentDidMount() {
    this.loadTonightsGames();
  }

  loadTonightsGames() {
    axios({
      method: 'get',
      url: REST_SERVER_URL,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
   return (
      <div>
        Hellow from the otherside
      </div>
    )
  }
}

export default App;

const defaultGame = {
  "id": "2",
  "scheduleStatus": "Normal",
  "originalDate": null,
  "originalTime": null,
  "delayedOrPostponedReason": null,
  "date": "2018-03-11",
  "time": "3:30PM",
  "awayTeam": {
    "ID": "89",
    "City": "Chicago",
    "Name": "Bulls",
    "Abbreviation": "CHI"
  },
  "homeTeam": {
    "ID": "91",
    "City": "Atlanta",
    "Name": "Hawks",
    "Abbreviation": "ATL"
  },
  "location": "Philips Arena"
};

const REST_SERVER_URL = 'http://localhost:3000/gameentry/';