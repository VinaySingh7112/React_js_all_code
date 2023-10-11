import React, { Component } from 'react';
import Idacontrolled1 from './Idacontrolled1';

class Idacontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'vinay@gmail.com',
            password: '2344',
            data: [],
            isupdate:null,
            updateobject:"",
            showpass:false
        };
    }

    emailchange = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value,
        });
    };
   

    passwordchange = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        });
    };
  

    render() {
        const { email, password, data ,isupdate,updateobject ,showpass} = this.state;
        let setdata = (e) => {
            e.preventDefault();
            if(isupdate){
                this.setState({
                    data:data.map((v,i)=>{
                        if(v===updateobject){
                            return {...v,email,password}
                        }else{
                            return v;
                        }
                    }),email:"",password:"",isupdate:null
                })
                document.querySelector("#button").innerText="submit"
            }else{
            this.setState({ data: [...data, { email, password }] ,email:"",password:""});
            }
        };
       
        let deleted = (i) => {
      
            let copy = data;
            copy.splice(i, 1);
            this.setState({
              data: copy,
            });
          };
        let updated =(i)=>{
            document.querySelector("#button").innerText="Update"
            this.setState({isupdate:true,updateobject:data[i],email:data[i].email,password:data[i].password})
        }

        return (
            <div>
                <form className="m-auto  shadow rounded p-5 border mt-4" style={{width:"700px"}} onSubmit={setdata}>
                    <h1>Controlled</h1>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={this.emailchange} name="email" />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type={showpass?"text" :"password"} className="form-control" value={password} onChange={this.passwordchange} name="password" />
                        <button type="button" onClick={()=>{this.setState({showpass:!showpass})}} className={showpass?"btn btn-danger":"btn btn-primary"}>{showpass ? "hidepassword":"showpassword"}</button>
                    </div>
                    <button type="submit" id='button' className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div className='m-4 flex-wrap gap-4 d-flex justify-content-center'>
                    {data.map((v, i) => {
                        return   (
                            <>
                                <Idacontrolled1 email={v.email} password={v.password} deleted={deleted} index={i} updated={updated} />
                            </>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default Idacontrolled


