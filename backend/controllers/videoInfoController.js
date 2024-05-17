// controllers/videoInfoController.js

const axios = require('axios');

// Hàm lấy thông tin video từ YouTube API
exports.getVideoInfo = async (req, res) => {
  const { videoId } = req.body;
  const apiKey = 'AIzaSyC52OPvWyvZGfPoBBkN1dYixK1EJY6C5HY'; // Thay YOUR_YOUTUBE_API_KEY bằng API key của bạn

  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`);
    const video = response.data.items[0];

    const videoData = {
      videoId: video.id,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnails: video.snippet.thumbnails.high.url, // Sử dụng thumbnail có độ phân giải cao
      viewCount: video.statistics.viewCount,
      likeCount: video.statistics.likeCount,
      dislikeCount: video.statistics.dislikeCount,
      videoTags: video.snippet.tags || []
    };

    res.status(200).json({ videoData });
  } catch (error) {
    console.error('Error fetching video data', error);
    res.status(500).json({ error: 'Error fetching video data' });
  }
};
