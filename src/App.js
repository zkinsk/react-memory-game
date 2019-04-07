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
  
  clickCard = (id, picked) =>{
    if (picked){
      this.setState({score: 0})
      this.resetCards();
    } else {
      let cards = this.state.cards
      this.sortCards(id, cards);
      let score = this.state.score
      let maxScore = this.state.maxScore;
      score ++;
      if (score > maxScore){
        maxScore = score
        if (maxScore >= 12){
          alert("You Win!")
          score = 0
        }
      };
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

  resetCards = () => {
    let resetCards = this.state.cards;
    resetCards.map(card => card.picked = false)
    this.sortCards(null,resetCards)
  }

  render() {
    return (
      <Wrapper>
        <Header currentScore={this.state.score} highScore={this.state.maxScore}/>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="row justify-content-center">
              {
                this.state.cards.map(card => 
                  <Image 
                    clickCard = {this.clickCard}
                    id={card.id} 
                    key={card.id}
                    picked={card.picked}
                    src={images(`./${card.src}`)}
                  />
                )
              }
            </div>
          </div>
        </div>
    </Wrapper>
    );
  }
}

export default App;
