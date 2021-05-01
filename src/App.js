import React from 'react';
import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      recipeAuthor: "Kodluyoruz",
      recipeItem: {
        title: "Avokado Ezmeli Taco",
        date: "12 Ocak 2021, Salı",
        image: food,
        description:
          "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
        },
      isLiked: false,
      likeCount: 193
    }
  }





  changeLike = () => {
    let { isLiked, likeCount } = this.state;
    this.setState({
      isLiked: !isLiked,
      likeCount: isLiked ? likeCount-1 : likeCount+1
    })
  }
  
  render(){

    let { recipeAuthor, recipeItem, likeCount, isLiked } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Card
            /* prop ismi = { değişken } */
            author={recipeAuthor}
            title ={recipeItem.title}
            date = {recipeItem.date}
            description ={recipeItem.description}
            likeCount = {likeCount}
            changeLike ={this.changeLike}
            isLiked = {isLiked}
          />
        </header>
      </div>
    );
  }

}

export default App;
