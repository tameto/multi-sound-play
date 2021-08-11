// @ts-nocheck
import { useEffect, useRef } from 'react';
import { useAudio } from 'react-use';
import bgm from './sounds/bgm.mp3'
import voice1 from './sounds/voice1.wav'
import voice2 from './sounds/voice2.wav'
import voice3 from './sounds/voice3.wav'


function App() {
  const bgm1ButtonRef = useRef()
  const [bgm1Audio, _bgm1State, bgm1Controls, _bgm1Ref] = useAudio({
    src: bgm,
  });
  const [voice1Audio, _voice1State, voice1Controls, _voice1Ref] = useAudio({
    src: voice1
  });
  const [voice2Audio, _voice2State, voice2Controls, _voice2Ref] = useAudio({
    src: voice2
  });
  const [voice3Audio, _voice3State, voice3Controls, _voice3Ref] = useAudio({
    src: voice3
  });

  useEffect(() => {
    setTimeout(() => {
      bgm1ButtonRef.current.click()
    }, 0)
  },[])

  return (
    <div>
      {bgm1Audio}
      {voice1Audio}
      {voice2Audio}
      {voice3Audio}
      <button onClick={bgm1Controls.pause}>bgm Pause</button>
      <button ref={bgm1ButtonRef} onClick={bgm1Controls.play}>bgm Play</button>
      <button onClick={() => bgm1Controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => bgm1Controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => bgm1Controls.volume(1)}>Volume: 100%</button>
      <br/>
      <br />
      <button onClick={voice1Controls.pause}>voice1 Pause</button>
      <button onClick={voice1Controls.play}>voice1 Play</button>
      <button onClick={() => voice1Controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => voice1Controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => voice1Controls.volume(1)}>Volume: 100%</button>
      <br/>
      <br />
      <button onClick={voice2Controls.pause}>voice2 Pause</button>
      <button onClick={voice2Controls.play}>voice2 Play</button>
      <button onClick={() => voice2Controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => voice2Controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => voice2Controls.volume(1)}>Volume: 100%</button>
      <br/>
      <br />
      <button onClick={voice3Controls.pause}>voice3 Pause</button>
      <button onClick={voice3Controls.play}>voice3 Play</button>
      <button onClick={() => voice3Controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => voice3Controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => voice3Controls.volume(1)}>Volume: 100%</button>
      <br/>
      <br />
    </div>
  );
}

export default App;