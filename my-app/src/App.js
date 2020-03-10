import React, { Component } from "react";
import tory from "./images/tory.jpg";
import "./App.css";
import Headline from "./components/Headline";

class App extends Component {
  state = {
    headlines: [
      {
        name: "Tory leader hopefuls clash over brexit",
        sub: "UK POLITICS",
        img: tory
      },

      {
        name: "Free student activist calls on HK leader to resign",
        sub: "CHINA",
        img: tory
      },

      {
        name: "Murray on rehab, mental health and escape rooms",
        sub: "UK",
        img: tory
      },
    ],

    headlines2:[
      { name: "Woodland wins first major at US Open", sub: "GOLF", img: tory },

      {
        name: "Five questions for chelsea after Sari exit",
        sub: "CHELSEA",
        img: tory
      },

      {
        name: "We might get golden heavyweight period",
        sub: "BOXING",
        img: tory
      }
    ]
  };
  render() {
    const eachHeadline = this.state.headlines.map((headlines, index) => {
      return (
        <Headline name={headlines.name} sub={headlines.sub} img={headlines.img} key={index}/>
      );
      
    });
    const eachHeadline2 = this.state.headlines2.map((headlines2, index) => {
      return (
        <Headline name={headlines2.name} sub={headlines2.sub} img={headlines2.img} key={index}/>
      );
      
    });
     
    return (
      <div className="App">
        <div class="headlines">
          <div class="news">
            <div class="newsheadlines">
              <h2>News headlines ></h2>
            </div>
            {eachHeadline}
          </div>

          <div class="sports">
            <div class="sportheadlines">
              <h2>Sport Headlines ></h2>
            </div>
            {eachHeadline2}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
