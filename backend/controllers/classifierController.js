// const tf = require('@tensorflow/tfjs-node');
// const path = require('path');

// const modelPath = path.resolve(__dirname, '../models/model_v3.h5');
// let model;

// async function loadModel() {
//   model = await tf.loadLayersModel(`file://${modelPath}`);
// }

// loadModel();

// exports.classify = async (req, res) => {
//   const { videoId } = req.body;
  
//   if (!videoId) {
//     return res.status(400).send({ error: 'videoId is required' });
//   }

//   try {
//     // Gọi hàm predict của mô hình
//     const result = await predict(videoId);
//     res.send(result);
//   } catch (error) {
//     res.status(500).send({ error: 'Error classifying video' });
//   }
// };

// async function predict(videoId) {
//   // Logic để lấy thông tin video, tiền xử lý và gọi mô hình để dự đoán
//   // Bạn có thể sử dụng logic từ DisturbedYouTubeClassifier ở đây

//   // Ví dụ đơn giản về kết quả dự đoán
//   return {
//     class: 'suitable',
//     confidence: '95%'
//   };
// }
