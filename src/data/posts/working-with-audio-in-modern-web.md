---
title: "Working with Audio in Modern Web"
subtitle: "How to control audio on the Web with the help of Web APIs"
date: "2024-02-24"
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

#### 2.1. Modifying and playing audio

The most basic and common task when work with digital is modifying and playing it.

To add audio

#### 2.2. Audio visualizing

#### 2.3. Recording audio

#### 2.4. Converting text to speech and speech to text

### 3. Closing