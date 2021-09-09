import { useSelector, useDispatch } from 'react-redux';
import api from './services/api';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {

  const jokesList = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  const handleClick = async () => {
    const { data } = await api.get('/');
    if (data.type === 'success') {
      dispatch({ type: 'GET_JOKE', payload: data.value });
      console.log(data.value);
      console.log(jokesList);
    }
  }

  return (
    <div className="App">
      <Button variant="primary" color="primary" onClick={ handleClick }>
        Get a Joke
      </Button>
      <ul>
        {console.log(jokesList)}
        {jokesList.length > 0 && jokesList.map(({joke}) => <li>{joke}</li>)}
      </ul>
    </div>
  );
}

export default App;
