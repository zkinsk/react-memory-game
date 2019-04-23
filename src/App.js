import React, { Component } from 'react';
// import logo from './logo.svg';
// import Image from './components/Image'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Gamebox from './components/Gamebox'
import Winscreen from './components/Winscreen'
import './App.css';
import cards from './cards.json'
// const images = require.context('../public/images', true)


class App extends Component {

  state = {
    win: false,
    score: 0,
    maxScore: 0,
    cards: [],
  };

  componentDidMount(){
    this.setState({cards: cards})
  }
  
  clickCard = (id, picked) =>{
    if (picked){
      this.setState({score: 0})
      this.resetCards();
    } else {
      let cards = this.state.cards
      let score = this.state.score
      let maxScore = this.state.maxScore;
      score ++;
      if (score > maxScore){
        maxScore = score
      };
      if (score >= 12){
        this.setState({win: true})
      }
      this.sortCards(id, cards);
      this.setState({score: score, maxScore: maxScore})
    }
  };

  sortCards = (id, cards) => {
    if(id){
      let index = cards.findIndex(card =>  card.id === id);
      cards[index].picked = true;
    }
    cards.map(card => card.order = (Math.floor(Math.random() * 1000)))
    cards.sort((a, b) => a.order - b.order)
    this.setState({cards});
  }

  resetGame = () => {
    console.log("resetting game");
    this.setState({score: 0, win: false})
    this.resetCards();
  }

  resetCards = () => {
    let resetCards = [...this.state.cards];
    resetCards.map(card => card.picked = false)
    this.sortCards(null,resetCards)
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.score} highScore={this.state.maxScore}/>
        {this.state.win? <Winscreen resetGame={this.resetGame}/> : <Gamebox cards={this.state.cards} clickCard={this.clickCard} />}
      </Wrapper>
    );
  }
}

export default App;
