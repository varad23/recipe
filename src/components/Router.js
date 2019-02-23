import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import App from "../App"
import Recipe from "./Recipe"

function Router(){
    return(
        <BrowserRouter>
        <Switch>       
        <Route path="/" component={App} exact />
        <Route path="/Recipe/:id"  component={Recipe}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Router