import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
       <h1>YouTube Shorts-like App</h1>
      <VideoPlayer
        src=""
        title="Sample Video 1"
      />
      <VideoPlayer
        src=""
        title="Sample Video 2"
      />
    </div>
  );
}

export default App;
