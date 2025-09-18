"use client"

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const JokeInterface = () => {
    const [joke, setJoke] = useState({})

    function getJoke() {
        console.log("getting joke...");
        axios.get("http://127.0.0.1:8000/joke")
        .then((result) => {
            setJoke(result.data);
            console.log(joke);
        }).catch((err) => {
            console.log(err);
        });
        // fetch joke.
        // display joke

    }

  return (
    <div>
      <h1>Hey! Wanna hear a joke?</h1>
      <button onClick={getJoke}>Sure!</button>
    </div>
  )
}

export default JokeInterface
