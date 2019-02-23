import React,{Component} from "react"
import {Link} from "react-router-dom"


const API_KEY = "41231180397cd208740de8b2b865b70f";
class Recipe extends Component{

    state={
        activeRecipe: []

    }
    
     async componentDidMount(){
        const title= this.props.location.state.recipe ; 
      
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title} `);
        const res = await req.json();
        this.setState({activeRecipe: res.recipes[0]})
       
        console.log(this.state.activeRecipe)
        
        
    }
    render(){
        const recipe = this.state.activeRecipe
        

        return(
            <div className="container">
            <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
             <h3 className="active-recipe__title">{recipe.title}</h3>
             <h4 className="active-recipe__publisher">
             Publisher: <span> {recipe.publisher} </span>
             <p className="active-recipe__website">
             Website: <span><a href={recipe.publisher_url} >{recipe.publisher_url}</a></span>
             </p>
             <button className="active-recipe__button"><Link to="/">Take Me Home</Link> </button>
             </h4>
            </div>
            
            </div>
        )
    }
}
export default Recipe