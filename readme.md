# node--ffmpeg-muxer

## Objective
   To mix a audio and video of same length
### Presiqutes
- ffmpeg https://www.faqforge.com/linux/how-to-install-ffmpeg-on-ubuntu-14-04/

### How to run
```
var muxer = require('node-ffmpeg-muxer');
muxer.merge(`inputvideopath`, `inputaudiopath`, `resultpath`)
  .then(response => {})
  .catch(errpr => {})  
```
