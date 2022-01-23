
import  useState  from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de Pandas</Link>
        <Link to='/gif/Ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/Rick'>Gifs de Rick</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"/>
      </section>
    </div>
  )
}

 
