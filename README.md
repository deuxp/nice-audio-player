# Nice-audio-Player

A React component which is an improved version of the standard HTML5 media player that replaces the progress bar with a visual representation of the audio waveform & displays more useful information of the audio file.

![animated gif of the components general usage](/public/nice-audio-player.gif)

## Installation

```bash
$ npm install nice-audio-player
```

## Import

```javascript
import React from "react";
import { WavePlayer } from "nice-audio-player";

function App(props) {
  return (
    <>
      <WavePlayer
        track={props.track}
        handleSkipNext={props.handleNext}
        handleSkipPrevious={props.handlePrevious}
      />
    </>
  );
}

export default App;
```

## Props

The Nice Audio Player pkg exposes the `<WavePlayer>` component which takes 3 props:

- _handleSkipNext_ & _handleSkipPrevious_ are props which take a helper function passed by reference to handle the logic for selecting the next audio file in the cue.
- _track_ - Object containing all the information necessary to play the audio.

```javascript
const track = {
  url: "/link-to-audio.mp3",
  albumCover: "jpeg || png",
  album: "",
  artist: "",
  trackTitle: "",
};
```
