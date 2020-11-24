import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    musics: []
  }
  getMusics = async() => {
    const musics = await axios.get("https://ko28melonapi.herokuapp.com/chart/live")
    console.log(musics)
    this.setState({musics});
  }
  componentDidMount(){
    this.getMusics();
  }
  render() {
    return (
      <div>
        {console.log(this.musics)}
      </div>
    )
  }
}

export default App;
