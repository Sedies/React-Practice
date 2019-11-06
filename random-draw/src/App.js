import React, { useState, useCallback } from "react";
import BbobgiTemplate from "./components/BbobgiTemplate";
import BbobgiInput from "./components/BbobgiInput";
import BbobgiList from "./components/BbobgiList";
import BbobgiRandomDraw from "./components/BbobgiRandomDraw";
import './Assets/css/reset.css';

function App() {
  const [bbobgis, setBbobgis] = useState([]);
  const [draw, setDraw] = useState("");

  const onInsert = useCallback(text => {
    setBbobgis(bbobgis => [
      ...bbobgis,
      {
        id: Date.now(),
        text
      }
    ]);
  }, []);

  const onRemove = useCallback(id => {
    setBbobgis(bbobgis => bbobgis.filter(bbobgi => bbobgi.id !== id));
  }, []);

  const onReset = useCallback(() => {
    setBbobgis([]);
    setDraw("");
  }, []);
  
  const inputRef = React.createRef();
  const onRandomDraw = useCallback(bbobgis => {
    if (bbobgis.length > 0) {
      const index = Math.floor(Math.random() * bbobgis.length);
      setDraw(bbobgis[index].text);
    } else {
      alert("메뉴를 적어주세요");
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <BbobgiTemplate>
      <BbobgiInput onInsert={onInsert} inputRef={inputRef}/>
      <BbobgiList bbobgis={bbobgis} onRemove={onRemove} onReset={onReset} />
      <BbobgiRandomDraw
        bbobgis={bbobgis}
        draw={draw}
        onRandomDraw={onRandomDraw}
      />
    </BbobgiTemplate>
  );
}

export default App;
