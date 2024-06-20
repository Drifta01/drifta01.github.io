<!DOCTYPE html>
<html lang="en">

<head>
<script>
   var deskAdsNum=0;
</script>
<script async src="/lib/tagmng8.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="/lib/rapid02.css">
<link rel="apple-touch-icon" sizes="180x180" href="/lib/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" href="/lib/favicon/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/lib/favicon/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="/lib/favicon/manifest.json">
<link rel="mask-icon" href="/lib/favicon/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/lib/favicon/favicon.ico">
<meta name="msapplication-config" content="/lib/favicon/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
<meta name="format-detection" content="telephone=no">

<title>Webcam Test | Check your camera</title>
<meta content="Camera test. Webcam and mic test" name="description">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<style>
   h1 { font-size:1.6rem; }
   h2 { font-size:1.4rem; }
   h3 { font-size:1.4rem; }
   h4 { font-size:1.2rem; }
   .btn img { filter: invert(1); }
   #miccan { width:100%; height:60px; background:#ccc; border:1px #aaa solid; }
   #mform {
      max-width:600px;
      padding:20px;
      background:#eee8d5;
      border:1px solid #eee;
      border-radius:7px;
   }
   #mform .btn span { vertical-align: middle; }
   #videodiv {
      overflow:hidden;
   }
   #vid {
      background:#444;
      z-index:0;
      margin:0 auto;
      margin-bottom:-5px;
      width:100%;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
   }
   #imgid {
      display:none;
      margin:0 auto;
   }
   .fullscreen { position:fixed; top:0; left:0; right:0; bottom:0; height:100vh; }
   #wrapper th { background:unset; font-style:unset; }
   .alert-warning { display:none; }
   @media (max-width:800px) {
      #full { display:none; }
   }
   @media (min-width:800px) {
   }
</style>

</head>
<body>
<div id="header">
<div>
<div id="logo"><a href="/">RapidTables</a></div>
<div class="gcse-search"></div>
<div id="tooldiv">
<a href="#" onclick="OnPageSearch()"><img width="24" height="24" title="Search" src="/lib/icons/material/svg/search_black_24dp.svg" loading="lazy"><span> Search</span></a>
<a href="#" onclick="OnPageShare()"><img width="24" height="24" title="Share" src="/lib/icons/material/svg/share_black_24dp.svg" loading="lazy"><span> Share</span></a>
</div>
</div>
</div>
<div id="wrapper">
<div id="nav">

<p id="bread"><a href="/">Home</a>&rsaquo;<a href="index.html">Tools</a>&rsaquo;<a href="webcam-test.html">Webcam/Camera test online</a></p>

</div>
<div id="lcol">
<div id="doc">

<h1>Webcam Test</h1>
<form id="mform">
<div class="form-group">
<label for="camsel">Select camera</label>
<select id="camsel" title="Camera select" class="form-control">
</select>
</div>
<div class="form-group">
<label for="micsel">Select microphone</label>
<select id="micsel" title="Microphone select" class="form-control">
</select>
</div>
<div class="form-group">
<button type="button" id="testbtn" title="Test webcam" class="btn btn-lg btn-block btn-success"><img src="/lib/icons/material/svg/photo_camera-24px.svg" loading="lazy" width="24" height="24" alt> Test Webcam</button>
</div>
<div class="alert alert-warning" role="alert">
Camera/mic permission denied!<br>Enable camera/mic by clicking the video icon on the browser's address bar and press the <i>Test Webcam</i> button or reload page.
</div>
<div id="videodiv" class="form-group">
<video id="vid" autoplay playsinline></video>
<img id="imgid" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Captured image">
</div>
<div id="bar" class="btn-group">
<button type="button" id="getimgbtn" title="Pause/Play" class="btn btn-secondary"><img src="/lib/icons/material/svg/pause-24px.svg" loading="lazy" width="24" height="24" alt></button>
<button type="button" id="downimgbtn" title="Save image" class="btn btn-secondary" disabled><img src="/lib/icons/material/svg/save_alt-24px.svg" loading="lazy" width="24" height="24" alt></button>
<button type="button" id="full" title="Fullscreen" onclick="fullscreen()" class="btn btn-secondary mr-2"><img src="/lib/icons/material/svg/fullscreen-24px.svg" loading="lazy" width="24" height="24" alt></button>

</div>
<div class="form-group mt-4">
<canvas id="miccan" class="visualizer" height="60"></canvas>
</div>
<p class="mt-4"><img src="/lib/icons/material/svg/privacy_tip-24px.svg" loading="lazy" width="24" height="24" alt> The webcam video and mic audio are generated locally by your browser and will not be sent to the server.</p>
<div class="form-group mt-2">
<h4>Camera settings</h4>
<table id="tbl" class="table table-sm bg-white">
<tbody>
<tr>
<th scope="row">Name</th>
<td></td>
</tr>
<tr>
<th scope="row">Resolution</th>
<td></td>
</tr>
<tr>
<th scope="row">Width</th>
<td></td>
</tr>
<tr>
<th scope="row">Height</th>
<td></td>
</tr>
<tr>
<th scope="row">Aspect ratio</th>
<td></td>
</tr>
<tr>
<th scope="row">Brightness</th>
<td></td>
</tr>
<tr>
<th scope="row">Contrast</th>
<td></td>
</tr>
<tr>
<th scope="row">Facing mode</th>
<td></td>
</tr>
<tr>
<th scope="row">Frame rate</th>
<td></td>
</tr>
<tr>
<th scope="row">Saturation</th>
<td></td>
</tr>
<tr>
<th scope="row">Sharpness</th>
<td></td>
</tr>
</tbody>
</table>
</div>
<div class="form-group mt-2">
<h4>Microphone settings</h4>
<table id="tbl2" class="table table-sm bg-white">
<tbody>
<tr>
<th scope="row">Name</th>
<td></td>
</tr>
<tr>
<th scope="row">Auto gain control</th>
<td></td>
</tr>
<tr>
<th scope="row">Channels</th>
<td></td>
</tr>
<tr>
<th scope="row">Echo cancelation</th>
<td></td>
</tr>
<tr>
<th scope="row">Latency</th>
<td></td>
</tr>
<tr>
<th scope="row">Noise suppression</th>
<td></td>
</tr>
<tr>
<th scope="row">Sample rate</th>
<td></td>
</tr>
<tr>
<th scope="row">Sample size</th>
<td></td>
</tr>
</tbody>
</table>
</div>
</form>
<br>
<hr>
<h2>See also</h2>
<ul class="seealso">
<li><a href="voice-recorder.html">Voice recorder</a></li>
<li><a href="text-to-speech.html">Text to speech</a></li>
<li><a href="mirror.html">Mirror app online</a></li>
<li><a href="camera.html">Camera online app</a></li>
<li><a href="tone-generator.html">Tone generator</a></li>
<li><a href="screenshot.html">Screenshot</a></li>
<li><a href="screen-recorder.html">Screen recorder</a></li>
<li><a href="notepad.html">Notepad app online</a></li>
</ul>


<div id="adngin-bottom_01-0"></div>


</div>
<div id="fdbk">
<h2 id="feedback">Write how to improve this page</h2>
<form id="fdbkform">
<textarea id="fdbkarea" rows="4" minlength="30" maxlength="1000" placeholder="Your message ..." required class="form-control"></textarea>
<span id="fdbkmsg"></span>
<button type="submit" class="btn btn-secondary" onclick="OnSubFb()">Submit Feedback</button>
</form>
</div>
</div>
<div id="rcol">

<div id="adngin-right_sidebar-0"></div>

<h5>ONLINE TOOLS</h5>
<ul>
<li><a href="alarm-clock.html">Alarm Clock</a></li>
<li><a href="bar-graph.html">Bar graph maker</a></li>
<li><a href="calendar.html">Calendar</a></li>
<li><a href="click-counter.html">Click counter</a></li>
<li><a href="timer.html">Countdown Timer</a></li>
<li><a href="current-time.html">Current Time</a></li>
<li><a href="line-graph.html">Line graph maker</a></li>
<li><a href="grocery-list.html">Online grocery list</a></li>
<li><a href="notepad.html">Online Notepad</a></li>
<li><a href="notes.html">Online Notes</a></li>
<li><a href="mic-test.html">Microphone test</a></li>
<li><a href="mirror.html">Online Mirror</a></li>
<li><a href="password-generator.html">Password generator</a></li>
<li><a href="pie-chart.html">Pie chart maker</a></li>
<li><a href="scatter-plot.html">Scatter plot maker</a></li>
<li><a href="screen-recorder.html">Screen recorder</a></li>
<li><a href="screenshot.html">Online screenshot</a></li>
<li><a href="speech-to-text.html">Speech to text</a></li>
<li><a href="stopwatch.html">Stopwatch</a></li>
<li><a href="text-to-speech.html">Text to speech</a></li>
<li><a href="todays-date.html">Today's Date</a></li>
<li><a href="todo-list.html">To-Do List</a></li>
<li><a href="ruler-cm.html">Ruler (cm/mm) online</a></li>
<li><a href="ruler-inch.html">Ruler (inch) online</a></li>
<li><a href="voice-recorder.html">Voice recorder</a></li>
<li><a href="webcam-test.html">Webcam test</a></li>
</ul>
<h5>RAPID TABLES</h5>
<ul>
<li><a href="mailto:?subject=RapidTables%20website&amp;body=Please%20checkout%20this%20site:%20https://www.rapidtables.com">Recommend Site</a></li>
<li><a href="#feedback">Send Feedback</a></li>
<li><a href="/about/about.html">About</a></li>
</ul>

</div>
</div>
<div id="footer">
<a href="/index.html">Home</a> |
<a href="/web/index.html">Web</a> |
<a href="/math/index.html">Math</a> |
<a href="/electric/index.html">Electricity</a> |
<a href="/calc/index.html">Calculators</a> |
<a href="/convert/index.html">Converters</a> |
<a href="/tools/index.html">Tools</a>
<p>&copy;
<a href="/">RapidTables.com</a> |
<a href="/about/about.html" rel="nofollow">About</a> |
<a href="/about/terms.html" rel="nofollow">Terms of Use</a> |
<a href="/about/privacy.html" rel="nofollow">Privacy Policy</a> |
<a href="/about/cookies.html" rel="nofollow">Manage Cookies</a>
</p>
</div>

<div id="adngin-adhesive-0"></div>


<script src="/lib/utils/utils.js"></script>

<script>!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function t(e){return new this(function(t,n){function o(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)})}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}if(!e||"undefined"==typeof e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})}function n(e){return!(!e||"undefined"==typeof e.length)}function o(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(r){return void u(t.promise,r)}f(t.promise,o)}else(1===e._state?f:u)(t.promise,e._value)})):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,c(e)}catch(o){u(e,o)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,f(t,e))},function(e){n||(n=!0,u(t,e))})}catch(o){if(n)return;n=!0,u(t,o)}}var a=setTimeout;r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(o);return i(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.prototype["finally"]=e,r.all=function(e){return new r(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(t){r(e,t)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},r.allSettled=t,r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,o){if(!n(e))return o(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)r.resolve(e[i]).then(t,o)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},r._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"function"!=typeof s.Promise?s.Promise=r:s.Promise.prototype["finally"]?s.Promise.allSettled||(s.Promise.allSettled=t):s.Promise.prototype["finally"]=e});</script>
<script type="module">import { AudioContext } from 'https://jspm.dev/standardized-audio-context';</script>
<script>
   "use strict"
   var isfullscreen=false;
   var captureState=false;
   var videoTracks,audioTracks;
   const alertElem = document.getElementsByClassName("alert")[0];
   const fullElem = document.getElementById("full");
   const camsel = document.getElementById("camsel");
   const micsel = document.getElementById("micsel");
   const video = document.getElementById("vid");
   const canvas = document.createElement("canvas");
   const image = document.getElementById("imgid");
   const testbtn = document.getElementById("testbtn");
   const getimgbtn = document.getElementById("getimgbtn");
   const downimgbtn = document.getElementById("downimgbtn");
   const bar = document.getElementById("bar");
   const miccan = document.getElementById('miccan');
   const miccanCtx = miccan.getContext("2d");
   window.addEventListener("DOMContentLoaded",function() {
      alertElem.style.display = "none";
      videoTracks=audioTracks=null;
      testbtn.onclick=function() { initVideo(); };
      getimgbtn.onclick=function() { getImage(); };
      video.onclick=function() { getImage(); };
      image.onclick=function() { getImage(); };
      downimgbtn.onclick=function() { downloadImage(); };
      const supports = navigator.mediaDevices.getSupportedConstraints();
      if (!supports['facingMode']) {
         alert('Browser does not support webcam facingMode!');
      }
      initPoly();
      initCameraMicSelects();
   });
   function initPoly()
   {
      if (navigator.mediaDevices === undefined) {
         navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
         navigator.mediaDevices.getUserMedia = function(constraints) {
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (!getUserMedia) {
               return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            return new Promise(function(resolve, reject) {
               getUserMedia.call(navigator, constraints, resolve, reject);
            });
         }
      }
   }
   function initCameraMicSelects()
   {
      /*
      for(var i=0; i<camsel.options.length; i++) {
         camsel.remove(i);
      }
      alert(tracks.length);
      for(var i=0; i<tracks.length; i++) {
         var opt = document.createElement('option');
         opt.value = i;
         opt.innerHTML = tracks[i].label;
         camsel.appendChild(opt);
      }
      */
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
         console.log("enumerateDevices() not supported.");
         camsel.style.display = "none";
         micsel.style.display = "none";
         return;
      }

      navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
         var icam=0,imic=0;
         devices.forEach(function(device) {
            console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
            var opt = document.createElement('option');
            if( device.kind=="videoinput" ) {
               //opt.value = i;
               opt.innerHTML = "Camera #"+(++icam);
               camsel.appendChild(opt);
            }
            else if( device.kind=="audioinput" ) {
               opt.innerHTML = "Microphone #"+(++imic);
               micsel.appendChild(opt);
            }
            else { //audiooutput
            }
         });
      })
      .catch(function(err) {
         console.log(err.name + ": " + err.message);
      });
   }
   function setCameraInfo()
   {
      var i = camsel.selectedIndex;
      var track = videoTracks[i];
      var settings = videoTracks[0].getSettings();
      const tbl = document.getElementById("tbl");
      var res=((settings.width*settings.height)/1e6).toFixed(2);
      tbl.rows[0].cells[1].innerHTML = videoTracks[0].label;
      tbl.rows[1].cells[1].innerHTML = res+" megapixels";
      tbl.rows[2].cells[1].innerHTML = settings.width+" pixels";
      tbl.rows[3].cells[1].innerHTML = settings.height+" pixels";
      tbl.rows[4].cells[1].innerHTML = settings.aspectRatio;
      tbl.rows[5].cells[1].innerHTML = settings.brightness;
      tbl.rows[6].cells[1].innerHTML = settings.contrast;
      tbl.rows[7].cells[1].innerHTML = settings.facingMode;
      tbl.rows[8].cells[1].innerHTML = settings.frameRate+" frames/second";
      tbl.rows[9].cells[1].innerHTML = settings.saturation;
      tbl.rows[10].cells[1].innerHTML = settings.sharpness;
   }
   function setMicInfo()
   {
      var i = micsel.selectedIndex;
      var track = audioTracks[i];
      var settings = audioTracks[0].getSettings();
      const tbl = document.getElementById("tbl2");
      tbl.rows[0].cells[1].innerHTML = audioTracks[0].label;
      tbl.rows[1].cells[1].innerHTML = settings.autoGainControl;
      tbl.rows[2].cells[1].innerHTML = settings.channelCount;
      tbl.rows[3].cells[1].innerHTML = settings.echoCancellation;
      tbl.rows[4].cells[1].innerHTML = settings.latency+" second";
      tbl.rows[5].cells[1].innerHTML = settings.noiseSuppression;
      tbl.rows[6].cells[1].innerHTML = settings.sampleRate+" Hz";
      tbl.rows[7].cells[1].innerHTML = settings.sampleSize+" bits";
   }
   function initAudio()
   {
   }
   function initVideo(icam)
   {
      stopVideo();
      //const sleep = ms => new Promise(res => setTimeout(res, ms));
      var constraints = {
         //audio: false,
         audio: true,
         video: {
            width: { ideal: 4096 },
            height: { ideal: 2160 },
            //facingMode: { exact: "user" }
            facingMode: { ideal: "user" }
            //facingMode: { ideal: "environment" }
         } };
      var icam=camsel.selectedIndex;
      if( icam==1 ) { constraints.video.facingMode = { exact: "environment" }; }
      alertElem.style.display = "none";
      navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
      //.then(async mediaStream => {
      //.then(function success(mediaStream) {
         //var video = document.querySelector('video');
         visualize(mediaStream);
         video.srcObject = mediaStream;
         video.onloadedmetadata = function(e) {
            video.play();
            //initSize();
         };

         //await sleep(1000);

         videoTracks = mediaStream.getVideoTracks();
         audioTracks = mediaStream.getAudioTracks();
         //initCameraMicSelects();
         setCameraInfo();
         setMicInfo();
         console.log(videoTracks[0]);
         console.log(videoTracks[0].getSettings());
         var i=micsel.selectedIndex;
         console.log(audioTracks[i]);
         console.log(audioTracks[i].getSettings());
      })
      .catch(function(err) {
         console.log(err.name + ": " + err.message);
         if( get_browser()=="Chrome" ) {
            alertElem.style.display = "block";
         }
      });
   }
   function stopAudio()
   {
      audioTracks.forEach(track => track.stop());
   }
   function stopVideo()
   {
      if( videoTracks==null ) return;
      videoTracks.forEach(track => track.stop());
   }
   function getImage()
   {
      if( captureState==false ) {
         captureState = true;
         var rect = vid.getBoundingClientRect();
         canvas.width = rect.width;
         canvas.height = rect.height;
         var ctx = canvas.getContext('2d');
         ctx.setTransform(-1,0,0,1,canvas.width,0);
         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
         const dataURL = canvas.toDataURL("image/png");
         image.setAttribute('src', dataURL);
         stopAudio();
         stopVideo();
         video.style.display="none";
         image.style.display="block";
         getimgbtn.children[0].src="/lib/icons/material/svg/play_arrow-24px.svg";
         downimgbtn.disabled=false;
      }
      else {
         captureState = false;
         initVideo();
         video.style.display="block";
         image.style.display="none";
         getimgbtn.children[0].src="/lib/icons/material/svg/pause-24px.svg";
         downimgbtn.disabled=true;
      }
   }
   function downloadImage()
   {
      var a = document.createElement('a');
      a.download = 'myimage.png';
      a.href = image.src;
      a.click();
   }
   function fullscreen()
   {
      if( !isfullscreen ) {
         isfullscreen=true;
         fullElem.children[0].src="/lib/icons/material/svg/fullscreen_exit-24px.svg";
         image.classList.add("fullscreen");
         video.classList.add("fullscreen");
         bar.style.setProperty("bottom","0");
         bar.style.setProperty("position","fixed");
         document.body.style.overflow = 'hidden';
      }
      else {
         isfullscreen=false;
         fullElem.children[0].src="/lib/icons/material/svg/fullscreen-24px.svg";
         image.classList.remove("fullscreen");
         video.classList.remove("fullscreen");
         bar.style.setProperty("bottom","unset");
         bar.style.setProperty("position","relative");
         document.body.style.overflow = 'visible';
      }
   }
   function visualize(stream) {
      var audioCtx=0;
      if(!audioCtx) {
         audioCtx = new AudioContext();
      }
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      source.connect(analyser);
      //analyser.connect(audioCtx.destination);
      draw()

      function draw() {
         const WIDTH = miccan.width
         const HEIGHT = miccan.height;
         requestAnimationFrame(draw);
         analyser.getByteTimeDomainData(dataArray);
         miccanCtx.fillStyle = 'rgb(200, 200, 200)';
         miccanCtx.fillRect(0, 0, WIDTH, HEIGHT);
         miccanCtx.lineWidth = 2;
         miccanCtx.strokeStyle = 'rgb(0, 0, 0)';
         miccanCtx.beginPath();
         let sliceWidth = WIDTH * 1.0 / bufferLength;
         let x = 0;
         for(let i = 0; i < bufferLength; i++) {
            let v = dataArray[i] / 128.0;
            let y = v * HEIGHT/2;
            if(i === 0) {
               miccanCtx.moveTo(x, y);
            } else {
               miccanCtx.lineTo(x, y);
            }
            x += sliceWidth;
         }

         miccanCtx.lineTo(miccan.width, miccan.height/2);
         miccanCtx.stroke();
      }
   }
</script>


</body>

</html>
