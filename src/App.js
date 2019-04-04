import React, { Component } from 'react';
// import logo from './logo.svg';
import Image from './components/Image'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import './App.css';
import cards from './cards.json'
const images = require.context('../public/images', true)


class App extends Component {
  state = {
    score: 0,
    maxScore: 0,
    cards
  };
  
  clickCard = (event) =>{
    console.log(event);
    console.log(this.state.cards)
    this.sortCards();
    this.state.score ++
    this.setState({score: this.state.score})
  };

  sortCards = () => {
    let cards = this.state.cards
    cards.map(card => card.order = (Math.floor(Math.random() * 1000)))
    cards.sort((a, b) => a.order - b.order)
    this.setState({cards});
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.score} highScore={this.state.maxScore}/>
      <div className="row justify-content-center">
      {this.state.cards.map(card => 
      
      <Image 
      clickCard = {this.clickCard}
      id={card.id} 
      key={card.id}
      src={images(`./${card.src}`)}
      />)}
      </div>
    </Wrapper>
    );
  }
}

export default App;
