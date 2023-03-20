import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCurrencyData

  return (
    <li className="cryptocurrency-item">
      <div className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-container">
        <p>{usdValue}</p>
      </div>
      <div className="euro-container">
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
