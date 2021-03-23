import React, { Component } from 'react';
import Web3 from 'web3'
import Color from '../abis/Color.json'
import logo from '../logo.png';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
    }
  }


  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  // connecting to web3
  async loadWeb3() {
    if (window.etherum) {
      window.web3 = new Web3(window.etherum)
      await window.etherum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Etherum browser detected. You should consider trying Metamask!')
    }
  }

  // Loads accounts
  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    // gets abi from smart contract
    const networkId = await web3.eth.net.getId()
    const networkData = Color.networks[networkId]
    const abi = Color.abi
    const address = networkData.address
    const myContract = new web3.eth.Contract(abi, address)
    console.log("🚀  myContract", myContract)

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white">
                <span id="account">Account: {this.state.account}</span>
              </small>
            </li>
          </ul>
        </nav>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                {/* Form goes here  */}
                {/* Creates a new contract instance with all its methods and events defined in its json interface object. */}



              </div>
            </main>
          </div>
          <hr />
          <div className="row text-center">
            <p>Tokens here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
