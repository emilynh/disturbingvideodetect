// // index.js

// const express = require('express');
// const app = express();
// // const classifierRouter = require('./routes/classifierRouter');
// const videoInfoRouter = require('./routes/videoInfoRouter');

// // Middleware
// app.use(express.json());

// // Routes
// // app.use('/api/classifier', classifierRouter);
// app.use('/api/video-info', videoInfoRouter);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// =================================
const express = require('express');
const { spawn } = require('child_process');
const app = express();
const videoInfoRouter = require('./routes/videoInfoRouter');

// Middleware
app.use(express.json());

// Routes
app.use('/api/video-info', videoInfoRouter);

// Call Python script as a child process
// app.post('/api/classify-video', (req, res) => {
//   const { videoId } = req.body;

//   // Execute Python script as a child process
//   const pythonProcess = spawn('python', ['./models/disturbedyoutubeclassifier.py', videoId]);

//   // Handle data from Python script
//   pythonProcess.stdout.on('data', (data) => {
//     console.log(`Python script output: ${data}`);
//     // Parse the output data if needed
//     const result = JSON.parse(data);
//     res.json(result);
//   });

//   // Handle errors
//   pythonProcess.stderr.on('data', (data) => {
//     console.error(`Python script error: ${data}`);
//     res.status(500).json({ error: 'Internal server error' });
//   });
// });
app.post('/api/classify-video', (req, res) => {
  // Giả định kết quả trả về từ hàm classifier
  const defaultResult = {
    predicted_class: 'suitable',
    confidence_score: '80%'
  };
  
  // Trả về kết quả mặc định
  res.json(defaultResult);
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// app.post('/api/classify-video', (req, res) => {
//   // Giả định kết quả trả về từ hàm classifier
//   const defaultResult = {
//     predicted_class: 'suitable',
//     confidence_score: '80%'
//   };
  
//   // Trả về kết quả mặc định
//   res.json(defaultResult);
// });
