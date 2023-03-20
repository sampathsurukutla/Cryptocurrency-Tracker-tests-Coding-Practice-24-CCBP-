import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], displayLoader: true}

  componentDidMount() {
    this.getCryptoCurrencyDetails()
  }

  getCryptoCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoCurrencyData: formattedData, displayLoader: false})
  }

  render() {
    const {cryptoCurrencyData, displayLoader} = this.state
    return (
      <div className="cryptocurrencies-list-container">
        <h1 className="page-main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="page-main-logo"
        />
        {displayLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-item-container">
            <div className="cryptocurrency-items-heading">
              <h1 className="coin-type-heading">Coin Type</h1>
              <h1 className="usd-heading">USD</h1>
              <h1 className="euro-heading">EURO</h1>
            </div>
            <div className="cryptocurrency-items-container">
              {cryptoCurrencyData.map(everyItem => (
                <CryptocurrencyItem
                  cryptoCurrencyData={everyItem}
                  key={everyItem.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
