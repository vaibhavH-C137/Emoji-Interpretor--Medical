import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π¦ ": "Microbe",
  "π₯": "Hospital",
  "π": "Ambulance",
  "π": "Pill",
  "π©Ί": "Stethoscope",
  "π§ββοΈ": "Health Worker",
  "π§Ό": "Soap",
  "π§½": "Sponge",
  "π": "Syringe",
  "π«π€": "No handshakes",
  "π«π§βπ€βπ§": "No close contact",
  "π«π€¦": "Don't touch your face",
  "π«π€§π€²": "Don't sneeze into hands",
  "βπ€§πͺ": "Do sneeze into your elbow",
  "π§Όπβ²":  "Wash your hands regularly",
  "ππ·π": "Wearing a mask in public",
  "π©Ή": "Adhesive Bandage",
  "π§Όππ°": "wash ur hands regularly",
  "π§«π§βπ¬": "Testing in a lab",
  "π§ͺπ‘": "Testing at home",
  "π¬π": "Drive-through testing",
  "π‘π₯΅": "Temperature checks",
  "π€π": "Contact tracing",
  "π±π₯": "Exposure notification",
  "π·": "Face with Medical Mask",
  "π€§": "Sneezing Face",
 
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

      <h3>π Some Important Emojis Related to COVID-19 </h3>
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
