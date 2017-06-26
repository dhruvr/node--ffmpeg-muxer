var exec = require('child_process').exec;
import path from 'path';

module.exports.merge = function(videoPath, audioPath, resultPath){
  return new Promise((resolve, reject) => {
    var muxerPath = path.join(__dirname, 'muxer--ffmpeg/muxer.sh')
     exec(`${muxerPath} ${videoPath} ${audioPath} ${resultPath}`, function(error, stdout, stderr){
        if(error){
          console.error(`Problem error: $error`);
          reject(error);
        }

        console.log(`stdout:  ${stdout}`);
        console.log(`stderr: ${stderr}`);
        resolve(resultPath);
     });
  });
}

//
// module.exports.test = function(){
//     merge('/home/dhruv/Downloads/testffmpeg/iyf1497991121170.mp4', '/home/dhruv/Downloads/testffmpeg/One_Song.mp3', '/home/dhruv/Downloads/testffmpeg/test.mp4')
//     .then((response) => {
//       console.log(`response : ${response}`)
//     }).catch((error) => {
//       console.log(`error :${error}`)
//     })
// }
