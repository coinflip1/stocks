import React,{useState,useEffect} from 'react'
import './Stats.css';
import axios from 'axios';

function Stats() {

const BASE_URL='https://finnhub.io/api/v1/quote?symbol="'

const [stockData, setStockData] = useState([])

const getStockData =()=>{
    return axios
    .get(`${BASE_URL}${stock}${KEY_URL}`)
    .catch((error) => {
      console.error("Error", error.message);
    });
    }

useEffect (()=>{
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          testData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      console.log(testData);
      setStocksData(testData);
    })

},[])

    return (
        <div className='stats'>
            <div className='stats__container'>
                <div className="stats__header">
                    <p>Stocks</p>

</div>
<div className='stats__content'>
<div className='stats__row'>


                </div>

</div>
<div className="stats__header">
                    <p>List</p>

</div>
            </div>
        </div>
    )
}

export default Stats
