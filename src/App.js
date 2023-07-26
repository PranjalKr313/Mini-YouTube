import './App.css';
import SearchBar from "./MyComponents/SearchBar";
import { SearchResult } from './MyComponents/SearchResult';
import { Video } from "./MyComponents/Video";

function App() {
  return (
    <div className="App">
      <p className='Heading'>YouTube Search</p>
      <p className='text'>Enter the topic you want to search and we will present you with the Youtube links to the 9 most viewed videos on that topic.</p>
      <SearchBar/>
      <p className='Subheading'>Videos related to nature</p>
      <SearchResult/>
      <p className='Subheading'>Latest Videos from T-Series</p>
      <Video/>
    </div>
  );
}

export default App;