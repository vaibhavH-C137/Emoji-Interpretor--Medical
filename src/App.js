import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🦠": "Microbe",
  "🏥": "Hospital",
  "🚑": "Ambulance",
  "💊": "Pill",
  "🩺": "Stethoscope",
  "🧑‍⚕️": "Health Worker",
  "🧼": "Soap",
  "🧽": "Sponge",
  "💉": "Syringe",
  "🚫🤝": "No handshakes",
  "🚫🧑‍🤝‍🧑": "No close contact",
  "🚫🤦": "Don't touch your face",
  "🚫🤧🤲": "Don't sneeze into hands",
  "✅🤧💪": "Do sneeze into your elbow",
  "🧼🖐⏲":  "Wash your hands regularly",
  "🚇😷🛒": "Wearing a mask in public",
  "🩹": "Adhesive Bandage",
  "🧼👐🚰": "wash ur hands regularly",
  "🧫🧑‍🔬": "Testing in a lab",
  "🧪🏡": "Testing at home",
  "🔬🚘": "Drive-through testing",
  "🌡🥵": "Temperature checks",
  "🤔📝": "Contact tracing",
  "📱👥": "Exposure notification",
  "😷": "Face with Medical Mask",
  "🤧": "Sneezing Face",
 
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  // this function is resposible for handling the inputted part
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, this one is not in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Important Emoji related to <mark>COVID-19</mark></h1>
      <input onChange={emojiInputHandler} />
      <h2 style={{ color: "red" }}>{meaning}</h2>

      <h3>👇 Some Important Emojis Related to COVID-19 </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: ".2rem",
              cursor: "pointer",
              marginInline: 4,
              marginBlock: 3,
              backgroundColor: "pink"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
