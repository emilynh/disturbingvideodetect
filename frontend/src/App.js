// import React, { useState } from 'react';
// import axios from 'axios';
// import VideoInfo from './components/VideoInfo';


// function App() {
//   const [videoId, setVideoId] = useState('');
//   const [videoData, setVideoData] = useState(null);
//   const [detectResult, setDetectResult] = useState('');

//   const handleInputChange = (event) => {
//     setVideoId(event.target.value);
//   };

//   const handleCheckVideo = async () => {
//     try {
//       const apiKey = 'AIzaSyC52OPvWyvZGfPoBBkN1dYixK1EJY6C5HY';
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`);
//       const video = response.data.items[0];

//       const videoData = {
//         videoId: video.id,
//         title: video.snippet.title,
//         description: video.snippet.description,
//         thumbnails: video.snippet.thumbnails.high.url, // Sử dụng thumbnail có độ phân giải cao
//         viewCount: video.statistics.viewCount,
//         likeCount: video.statistics.likeCount,
//         dislikeCount: video.statistics.dislikeCount,
//         videoTags: video.snippet.tags || []
//       };

//       setVideoData(videoData);
      
//       // Call your detect function (mocked here)
//       const detectResult = await detectVideo(videoData);
//       setDetectResult(detectResult);
//     } catch (error) {
//       console.error('Error fetching video data', error);
//     }
//   };

//   // Mock detect function
//   const detectVideo = async (videoData) => {
//     // Replace with actual detection logic
//     return videoData.viewCount > 1000 ? 'suitable' : 'disturbing';
//   };

//   return (
//     <div className="App">
//       <h1>YouTube Kids Video Detection</h1>
//       <input
//         type="text"
//         value={videoId}
//         onChange={handleInputChange}
//         placeholder="Enter YouTube Video ID"
//       />
//       <button onClick={handleCheckVideo}>Kiểm tra</button>
//       {videoData && <VideoInfo videoData={videoData} />}
//       {detectResult && (
//         <div className="DetectionResult">
//           <h2>Detection Result</h2>
//           <p>{detectResult}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import VideoInfo from './components/VideoInfo';

function App() {
  const [videoId, setVideoId] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [detectResult, setDetectResult] = useState('');

  const handleInputChange = (event) => {
    setVideoId(event.target.value);
  };

  const handleCheckVideo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-video', { videoId });
      const { videoData, detectResult } = response.data;

      setVideoData(videoData);
      setDetectResult(detectResult);
    } catch (error) {
      console.error('Error fetching video data', error);
    }
  };

  return (
    <div className="App">
      <h1>YouTube Kids Video Detection</h1>
      <input
        type="text"
        value={videoId}
        onChange={handleInputChange}
        placeholder="Enter YouTube Video ID"
      />
      <button onClick={handleCheckVideo}>Kiểm tra</button>
      {videoData && <VideoInfo videoData={videoData} />}
      {detectResult && (
        <div className="DetectionResult">
          <h2>Detection Result</h2>
          <p>{detectResult}</p>
        </div>
      )}
    </div>
  );
}

export default App;
