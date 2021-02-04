import React,{useState,useEffect} from 'react'
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';

function Stats() {

const BASE_URL='https://finnhub.io/api/v1/quote?symbol="'

const [stockData, setStockData] = useState([])
const [myStocks,setMyStocks]= useState([]);
const getStocksData =()=>{
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
<div className='stats__content'>
<div className ='stats__rows'>
{myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
</div>
</div>
            </div>
        </div>
    )
}

export default Stats
