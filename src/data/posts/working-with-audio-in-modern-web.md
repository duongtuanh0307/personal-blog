---
title: "Working with Audio in Modern Web"
subtitle: "How to control audio on the Web with the help of Web APIs"
date: "2024-02-28"
id: 3
---

The topic of this article will be "Audio on the Web": How to modify, visualize nad play audio, how to record audio and convert between text and speech.

### 1. Basic Digital Audio concept

#### 1.1. Sound wave

Before researching about Audio on the web, I want to talk about sound in general and how digital sound works.

Sounds are made when somethings vibrate in non-vacuum. This vibration makes atoms around sound source moving back and forth; then this movement is passing through the next set of particles (atoms) untils it reach our ear, allowing us to hear the sound.

Souds are recorded and analysed using wave traces.

There are two factors affect the sounds, which are frequency and amplitude.

Frequency is the duration for particles move from one cycle pitch to the next pitch. The shorter frequency is, the higher the sound hear.

Amplitude is the change in a single period. In other words, amplitude measures how hard atoms vibrate. The more strongly particles move, the bigger the sound is.

That how sound is created and passed through medium like air and water. 

#### 1.2. Digital Audio

Now let's switch our topic to Digital Audio.

Digital Sound is a method of representing sound as numeral values.

Sound wave (signal) is broken into <i>samples</i>. A sample is a number representing amplitude of signal in a specific time. Number of samples captured in a second is call sample rates. The higher sample rate is, the more precise digital result is, compare to original analog wave. However, high sample rate also results in more data to store, that leads to larger hard-drive space is needed. Therefore, although 96kHz or 192kHz sample rate will bring higher audio resolution, we usually use 44.1kHz or 48kHz as the standard. 44.1kHz, which is equivalent to capture signal 44100 times per second, is used for sampling CDs or streaming; while for video audio, 48kHz is common option.

Another factor to mention about storing sound in digital form is bit depth.

Bit depth decides the possible values can be captured or the limit of samples. Higher bit depth means there are more bits that are used to store each sample or wider range of values each sample can be. 

For example, when audio is stored using 16-bit depth, value of each sample will be an integer between -32768 to 32767; any values converted from analog will be rounded up or rounded down to the nearest value within this range.

Similar to sample rate, the higher bit depth make the more accurate and higher resolution of digital sound but make data more large, takes more hard-drive space. Nowaday, the most used audio bit depths are 16-bit, 24-bit and 32-bit.

### 2. Working with Audio on the Web

This section is the main and most important part of the article. It will be devided in 4 parts; each introduces a basic task we need to deal when work with Audio on the Web.

#### 2.1. Audio Modifying, Playing and Visualizeing with Web Audio API:

##### Processing and Playing sound:

If our need is just playing audio from a video file, html5 audio is a perfect option; but when we have more things to do with audio, for example, changing audio frequency before playing it, or mixing audio file, we need the help of Web Audio API.

The first step to work with Web Audio API is creating an instance of audio context using below syntax:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
```

Both the creation and execution of the audio processing will occurs inside this context. It's OK to use a single audio context for different audio sources and pipeline concurrently.

Then, the next things we have to do are:

- Create audio resources (source nodes) inside created audio context, which can be HTML5 audio, an oscillator or stream.
- Create audio effects (effect nodes) which modifies audio or analysis nodes to get information of provided audio.
- Choose the final destination for the audio.
- Connect source nodes to effect nodes, analysis nodes and then destination nodes.

Below is an example of getting audio from HTML audio tag, making it higher and then playing it.

```html
<audio id="myAwesomeAudio" src="myTrack.mp3"></audio>
```

```js
//1. create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

//2. create audio source node inside audio context
const audioEl = document.getElementById('myAwesomeAudio');

const track = audioContext.createMediaElementSource(audioEl); // =>create an instance of MediaElementAudioSourceNode, represents an audio source consist of HTML audio or video element
//3. create effect nodes (make original audio higher);
const biquadFilter = audioContext.createBiquadFilter();
biquadFilter.detune.value =  100; // detune current audio for 100 cents (one semitone).
//4. choose final destination, connect source node to effect nodes and finally destination node.
track.connect(biquadFitler).connect(audioContext.destination);
```

The node types list of usually used Web Audio API is as below:

<b>Source node</b>

- OscillatorNode: represents a periodic waveform. It creates a wave with given form and frequency, which cause a tone. 
- AudioBufferSourceNode: represents an audio source consisting of in-memory audio data, store in an AudioBuffer.
- AudioWorkletNode: represents base class for user-defined audio node.
- MediaElementAudioSourceNode: represents an audio source consisting of HTML audio or HTML video element.
- MediaStreamAudioSourceNode: operates audio source whose media is received from a MediaStream (media received from a microphone or from a remote peer on a WebRTC call).

<b>Effect node</b>

- GainNode: represents a change in volume.
- DelayNode: represents a delay between the arrival of the input data and its beginning to output. The delay time is specified in seconds.
- StereoPannerNode: interface uses to pan audio stream left or right.
- BiquadFilterNode: represents a simple low-order filter such as lowpass, highpass, etc.
- ConvolverNode: performs Linear Convolution on a AudioBuffer.
- DynamicsCompressorNode: provides a compression effect.
- WaveShaperNode: represents a non-linear distorter

Apart from above audio node interfaces, we have other prototypes which is not related to creating or modifying media. One of them is <b>AnalyserNode</b>, the useful interface that we will use for getting audio frequency and amplitude to visualize it.

##### Audio visualizing:

As mentioned above, we will visualize audio with the help of AnalyserNode interface and Canvas API.

Audio visualizing conists of two steps:

- Step 1: Get real-time frequency and time-domain analysis information of given audio
- Step 2: present data got in Step 1 in graphical form. We can use SVG with Web Animation API or Canvas API to archive this.

Let's start with step 1:

```js
//Before doing anything else, the first step of working with Web Audio API is always creating an audio context.
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
//To use AnalyserNode, we need an audio source
const audioEl = document.getElementById('myAwesomeAudio'); //Providing that we have <audio id='myAwesomeAudio' src='myTrack.mp3'></audio> in HTML file
const track = audioContext.createMediaElementSource(audioEl); 
//Create AnalyserNode
const analyser = audioCtx.createAnalyserNode(); // It's the same as calling constructor new AnalyserNode(audioCtx);
//Connect source node to AnalyserNode. We can then connect AnalyserNode to effect nodes or/and destination node to play the audio but it is optional.
track.connect(analyser);

// -------- Perform analysing data -------------------------------
//Prepare an Uint8Array with the length same with bufferLength to save wave form later on.
//Each dataArray item is an interger x, 0 <= x <= 255
analyser.fftSize = 512;
const bufferLength = analyser.frequencyBinCount; 
const dataArray = new Uint8Array(bufferLength);

getVolume() {
analyser.getByteFrequencyData(dataArray); //get real-time frequency of sound wave.
const normSamples = dataArray.map(data => (data/128 - 1)) //normalize sample data, each element of the array will now become a value between -1 and 1;
const samplesSQRSum = normSamples.reduce((prev, data) => prev + data*data, 0);
const volume = samplesSQRSum / bufferLength * 100; //volume of current sound in range 0 to 100
return volume;
};

//call getVolume and print current volume to console every 1000ms 
setInterval(() => {
    const volume = getVolume();
    console.log(volume);
}, 1000)
```

The next step is representing volume in graphical form:

```html
<!-- Add canvas to current HTML -->
<canvas id="myCanvas"></canvas>
```

```js
// get canvas and create a 2D Rendering Context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// replace setInterval call by canvas drawing function
function animate() {
    const volume = getVolume();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle='green';
    for(let i=0; i < volume; i++) {
        ctx.fillRect(100, 100+i*7, 5, 20)
    };
    window.requestAnimationFrame(animate);
};
animate();
```

Apart from getting volume, we can also use getByteTimeDomainData to copy the shape of current wave and draw it; or use getByteFrequencyData to get real-time frequency graph. We can also add different effect to our graph to make website/application more vivid and interesting.

#### 2.2. Recording sound with MediaStream Recording API:

The next basic feature that has to be mentioned when working with Audio is Recording sound.

To record audio, we need the help of another Web APIs: <b>MediaStream Recording API</b> for getting audio stream data and <b>Media Capture and Stream API</b> for getting microphone access permission.

The process of recording audio from microphone is as below:

- Request access permission to microphone using `getUserMedia()` method of MediaStream Recording API. If prompt is accepted, we can now start recording sound from device media.
- Create a MediaRecorder object, pass source stream to it and defined other desired options.
- Set handler for <b>dataavailable</b> event that is fired when the MediaRecorder delivers media data to the application. More detail about this event can be check [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event).
- Call MediaRecorder.start() to begin recording.
- Call MediaRecorder.stop() to end recording.
- Save audio data receive from MediaRecorder as a file or modify, play, delete it as the needs.

This is sample code for recording audio from microphone and download it right after user clicks Stop recording:

```js
// Basic setup for app. Providing that we have a HTML file with two button with id as "record" and "stop"
const record = document.getElementById("record");
const stop = document.getElementById("stop");

//To record media from microphone, we need request access to user media device. As getUserMedia() is not supported in all devices, first check if it is available.
if (!navigator.mediaDevices.getUserMedia)  {
  console.log("MediaDevices.getUserMedia() is not supported"); 
} else {
  let recordedChunks = []; 

  const onSuccess = function (stream) {
    const mediaRecorder = new MediaRecorder(stream);
    record.onclick = function () {
      mediaRecorder.start();
      record.style.background = "red";
    };

    stop.onclick = function () {
      mediaRecorder.stop();
      downloadRecordedFile();
    };

    mediaRecorder.ondataavailable = function (e) {
      recordedChunks.push(e.data);
    };
  };

  const onError = function (err) {
    console.log("The following error occured: " + err);
  };

  const downloadRecordedFile = function() {
     const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  recordedChunks = []
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "audio.webm";
  a.click();
  window.URL.revokeObjectURL(url);
  };

  navigator.mediaDevices.getUserMedia({audio:true}).then(onSuccess, onError);
};
```

#### 2.3. Converting text to speech and speech recognization

The last topic I want to cover in this article when work with Web audio is The conversion between text and speech.

Modern browser such as Chrome, Edge and Safari support Web Speech API, which handles above task for us.

Web Speech API consists of two parts: SpeechSynthesis and SpeechRecognition.

##### SpeechSynthesis: converts text to speech

SpeechSynthesis is a part of Web Speech API and responsible for retrieving information about voices available on the device and taking care of other commands related to the speech service such as start or pause speech.

The properties and methods list of SpeechSynthesis interface is as below:

Prop/method | Type | Description
------ | ------|----------
paused | boolean    | returns `true` if speech is in paused state
pending | boolean   | returns `true` if the utterance queue contains as-yet-unspoken utterances
speaking|  boolean     | returns `true` if an utterance is currently in the process of being spoken, even when paused = 'true'
speak() | f(utterance: Utterance): void | Add an utterance to the utterance queue. It will be spoken after utterance before it in utterance queue have been spoken
cancel() | f(): void | removes all utterances from the utterance queue and also immediately stop currently being spoken utterance (if any)
pause() | f(): void | put SpeechSynthesis object in 'paused' state
resume() | f(): void | resume SpeechSynthesis object if it was already paused
getVoices() | f(): SpeechSynthesisVoice[] | returns list of available voices on the current device.

Example:

```js
const ssynth = window.speechSynthesis; //declare SpeechSyntheis object

const utterance = new SpeechSynthesisUtterance('Hello. How are you today?'); //Create  an utterance to be spoken
//We can then get and set language, pitch, rate of the utterance, and the voice we want our text to be spoken in
const voicesList = ssynth.getVoices();
if(voicesList.length >0) utterance.voice = voicesList[0];
utterance.rate = 0.75 //Makes utterance be spoken slower. Default value is 1 consider normal speaking speed. Rate can range between 0.1 and 10.
utterance.pitch = 1.5 //Speaks in higher voice. Its default value is 1 and can range between 0 vand 2.
utterance.lang = 'en-US' //set language of the utterance. The default value is the app's lang or user-agent default if app's lang is unset too
utterance.volume = 0.8 //Make spoken voices smaller. It can range from 0 to 1 with 1 as the default value.

//Start speaking
ssynth.speak(utterance);
```

##### SpeechRecognition: interface for recognition service

SpeechRecognition - The second part of Web Speech API - is the controller interface for recognition service.

The properties and methods list of SpeechSynthesis interface is as below:

Prop/method | Type | Description
------ | ------|----------
grammars |  SpeechGrammarList  | represents a collection of SpeechGrammar objects that will be understood by SpeechRecognition.
lang | string   | returns and sets the language of current SpeechRecognition. It is expected to be a string representing the BCP 47 language tag.
continuous |  boolean  | controls whether continuous results are returned for each recognition or only a single result. It defaults to `false`.
interimResults | boolean | controls whether not-yet-final results should be returned or not. It defaults to `false` (return final result only).
maxAlternatives | number | sets the maximum number of SpeechRecognitionAlternative provided per result. It defaults to 1, means 1 alternative for each result.
abort() | f(): void | stops the speech recognition service from listening to incoming audio and doesn't return a result. 
start() | f(): void | starts the speech recognition service listening to incoming audio
stop() | f(): void | stops the speech recognition service from listening to incoming audio, and attempts to return a SpeechRecognitionResult. recognition result will be handle using `result` event.

Steps for working with SpeechRecognition are:

- Create an SpeechRecognition object.
- Create an SpeechGrammarList object and add the grammars that SpeechRecognition should recognize. The gammars are defined using JSpeech Grammar Format.
- Set grammars property of SpeechRecognition object as SpeechGrammarList created on step 2.
- Set other properties of SpeechRecognition if it's needed.
- Call SpeechRecognition.start() method to start recognition.
- Set handler for result event to use the result return by speech recognition service.

This is an example of using SpeechRecognition to check if your pronunciation is correct:

```js
const checkPronunciation(word) {
    const grammar =
  "#JSGF V1.0; grammar word; <word> = " + word;
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.body.onclick = () => {
  recognition.start();
};

recognition.onresult = (event) => {
    window.alert('Good pronunciation!')
};

recognition.onnomatch = (event) => {
    window.alert('Please try again!')
}
}

checkPronunciation('Hello');
```

### 3. Closing 

Above is all I understand about audio in the web. In the future, after trying more with those APIs, I might add another article about this topic.

The TODO-list I assign to myself is try creating a simple application for recording, processing and then save the processed audio file!