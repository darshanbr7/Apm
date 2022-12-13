import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container-fluid" style={{ 
  backgroundImage: `url(${'https://t4.ftcdn.net/jpg/03/83/84/49/240_F_383844937_VVv0WYa8qmKZZNfTS3P6dwnIeAzQRg3n.jpg'})` 
  , height:'100vh',
  marginTop:'',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-5">
                    <div className="card mt-5  bg-info" >
                        <div className="card-headder">
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4"><h3 className='text-danger'>Login Form</h3></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className='form-group mt-3'>
                                 <input type="text"  placeholder='Email' className='form-control' />
                                </div> 
                                <div className='form-group mt-5'>
                                 <input type="text"  placeholder='Password' className='form-control' />
                                </div> <br/>
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col">
                                    <button className='btn btn-primary'> Login</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login