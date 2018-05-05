import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/vidieo_list';
import VideoDetail from './components/vidieo_details';
const API_KEY='AIzaSyBUulXF-DLCEnsE8dyiEYAYeFyRV-p7B_I';


//create a new component
//some html
class App extends Component{
  constructor(props){
    super(props);
      this.state={
        videos :[],
        selectedvideo:null
      };

      this.videoSearch('surfboard');



  }

  videoSearch(term){
    YTSearch ({key: API_KEY, term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedvideo: videos[0]

      });

    });
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
  return (
    <div>
    <SearchBar OnSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedvideo}/>
    <VideoList
    OnVideoSelect={selectedvideo=>this.setState({selectedvideo})}
    videos={this.state.videos}/>
    </div>
  );
}
}
//takes this component generated html and put it
//on the page (in the dom)
ReactDOM.render(<App />,document.querySelector('.container'));
