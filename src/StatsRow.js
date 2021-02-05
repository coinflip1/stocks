import React from 'react'
import './StatsRow.css'
import StockSVG from './stock.svg'
function StatsRow() {
    return (
        <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && 
          (props.volume + " shares")
        }</p>
      </div>
      <div className="row__chart">
        <img src={StockSVG} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
    )
}

export default StatsRow
