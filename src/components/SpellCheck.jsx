import React, { useEffect, useState } from "react";

function SpellCheck() {
  let [text, setText] = useState("");
  let [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  useEffect(() => {
    setSuggestion("");

    if(text.trim() === "") return;

    const words = text.split(" ");

    for(let word of words){
        const lowerCaseWord = word.toLocaleLowerCase();

        if(customDictionary[lowerCaseWord]) {
            setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`)
            break;
        }
    }

  }, [text])

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        name="spellcheck"
        id="spellcheck"
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ height: "100px", width: "300px" }}
      ></textarea>
      {suggestion && (
        <div><p>{suggestion}</p></div>
      )}
    </div>
  );
}

export default SpellCheck;
