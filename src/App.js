import {  useState } from 'react';
import './App.css';

const App = () => {

  const [ data, setData ] = useState([])
  // const [isComplete, setIscomplete] = useState(false)

  async function fetchData() {
  const requestURL = 'https://jsonplaceholder.typicode.com/todos'
  const request = new Request(requestURL)
  const response = await fetch(request)
  const fetchedData = await response.json()
  setData(fetchedData)
} 
  return (
    <div className="App">
      <button onClick={fetchData}>CLICK</button>
      {data.map(el => {
        return (
          <div className='div-container' key={el['id']}>
            <p>#{el['id']}</p>
            <h1>{el['title']}</h1>
            <h6>user id is - {el['userId']}</h6>
            <span 
              className={el['completed'] === false ? 'span' : 'span active'}>
                completed status
            </span>
          </div>
        )
      })}
    </div>
  )
}
export default App
