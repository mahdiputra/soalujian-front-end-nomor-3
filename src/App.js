import React, { Component } from 'react';
import Output from './komponen/output';
import Today from './komponen/today';
import Bitkerup from './komponen/bitkerup'


class App extends Component {
  constructor(){
    super();
    this.state = {
        inputUser: 'Anda belum memasukkan nama'
    }
  }

  klik(){
      this.setState({
          inputUser: this.refs.nama.value, 
      })
  }

    render() {
        return(
            <div className="App">
            <center >
              <img style={{width:'500px'}} alt='asd' src="data:image/png;base64,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" />
            </center>
            <center>
              <div className="tabmenu" style={{width:"700px",margin:"200px",background:"white"}}>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Bitcoin hari ini</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false">Rupiah ke bitcoin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile" aria-selected="false">Bitcoin ke rupiah</a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="login">
                    <Output ></Output>
                     
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                  <Today > </Today>
                  </div>

                  <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab">
                    <Bitkerup ></Bitkerup>
                  </div>
                </div>
              
              </div>
            </center>
            </div>
        )
    }
}

export default App;
