import { Home } from './components/home/Home'
import { Recipe } from './components/recipe/Recipe'
import { AddRecipe } from './components/addrecipe/AddRecipe'
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button href="/">EveryPlateRecipeHolder</Button>
      </header>
      <body className="App-body">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Recipe" element={<Recipe />} />
            <Route exact path="/AddRecipe" element={<AddRecipe />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
