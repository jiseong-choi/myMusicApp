import React from 'react';
import axios from 'axios';
import Music from './Music';

class App extends React.Component {
  state = {
    isLoading: true,
    musics: []
  }
  getMusics = async() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://ko28melonapi.herokuapp.com/chart/live"
    const {data} = await axios.get(proxyUrl + url)
    this.setState({musics:Object.entries(data).sort(([a], [b]) => a - b).map(([key, value]) => value), isLoading:false})
  }
  componentDidMount(){
    this.getMusics();
  }
  render() {
    const {isLoading} = this.state
    const {musics} = this.state
    return (
      <div>
        {isLoading ?"Loading...": musics.map(music =>{
          console.log(music)
          return <Music key ={music.key} name={music.name} albumId={music.albumId} artist={music.artists} ranking={music.ranking} />
        })}
      </div>
    )
  }
}

export default App;
