import React from 'react'

function Mainpage() {
  return (
    <div>
        <div className="container my-3">
            <h2 className='mb-5 blue'>Welcome to Smart Face recognition system</h2>
            <div className="row">
              <div className="col-md-4">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://images.ctfassets.net/lzny33ho1g45/60IgGQVSrxrUf5IAYdpxnc/e11f2cd9185c28bbc82462a0602b6e83/google-drive-vs-google-photos-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card" style={{width: "18rem"}}>
                    <img src="https://images.ctfassets.net/lzny33ho1g45/60IgGQVSrxrUf5IAYdpxnc/e11f2cd9185c28bbc82462a0602b6e83/google-drive-vs-google-photos-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage