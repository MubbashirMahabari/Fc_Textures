import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import CardComponent from './component/card';
import Carousel from './component/Carousel';
import Footer from './component/footer';


function App() {

  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => setApiData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // console.log(apiData)

  return (
    <div>
      <Navbar />
      <CardComponent />
      <Carousel />
      <Footer/>
    </div>

  );
}

export default App;
