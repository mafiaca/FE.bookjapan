import './App.css'
import ListBookComponent from './Component/listBook.js';

const bookList = [
  {
    name:'Naruto',
    author:'kishi moto'
  },
  {
    name:'Doraemon',
    author:'fuji moto'
  },
  {
    name:'Sakura',
    author:'Sakura aaa'
  },
  {
    name:'Rừng Nauy',
    author:'Không biết'
  },
  {
    name:'Cha giàu cha nghèo',
    author:'Rô bớt ki o sa ki'
  }
]

function App() {
  return (
    <div className="App">
      <ListBookComponent bookList={bookList} />
    </div>
  );
}

export default App;
