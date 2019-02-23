import React,{Component} from "react"
import Form from "./components/Form"
import './App.css';
import Recipes from "./components/Recipes"


const API_KEY = "41231180397cd208740de8b2b865b70f";
class App extends Component{

 constructor(){
     super()
     this.state={
    recipes :[]
    }
    this.getRecipe = this.getRecipe.bind(this);
 }

async getRecipe  (e)
{   const recipeName= e.target.elements.recipeName.value;  
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10 `);
    const data = await api_call.json();
    this.setState({
        recipes : data.recipes

    })


    
}
 render()
 {
    return(
        <div>
            <h1 className="header">Recipe World </h1>

            <br/>
            <p className="subHeader">Search for our 1000's of recipes.</p>
            <br/>
            <br/>
            <Form getRecipe={this.getRecipe}/>
          
            <Recipes recipes={this.state.recipes} />
        </div>
    ) 
 }
}

export default App