import React, { Component } from 'react';
import Idacontrolled1 from './Todolistcard';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email6: '',
            istate: '',
            data: [],
            isupdate: null,
            updateobject: "",
            description: "",
            images: "",

        };
    }

    emailchange = (e) => {
        e.preventDefault();
        this.setState({
            email6: e.target.value,
        });
    };

    statechange = (e) => {
        e.preventDefault();
        this.setState({
            istate: e.target.value,
        });
    };
    descriptionchange = (e) => {
        e.preventDefault();
        this.setState({
            description: e.target.value,
        });
    };
    imgchange = (e) => {
        e.preventDefault();
        this.setState({
            images: e.target.value,
        });
    };


    render() {
        const { email6, istate, data, isupdate, updateobject, description, images } = this.state;
        let setdata = (e) => {
            e.preventDefault();

            if (isupdate) {
                this.setState({
                    data: data.map((v, i) => {
                        if (v === updateobject) {
                            return { ...v, email6, istate, description, images }
                        } else {
                            return v;
                        }
                    }), email6: "", istate: "", description: "", isupdate: null, images: ""
                })
                document.querySelector("button").innerText = "submit"
            } else {
                this.setState({ data: [...data, { email6, istate, description, images }], email6: "", istate: "", description: "", images: "" });
            }
        };

        let deleted = (i) => {
            const updatedData = [...this.state.data];
            updatedData.splice(i, 1);
            this.setState({ data: updatedData });
        };

        let updated = (i) => {
            document.querySelector("button").innerText = "Update"
            this.setState({ isupdate: true, updateobject: data[i], email6: data[i].email6, istate: data[i].istate, description: data[i].description, images: data[i].images })
        }

        return (
            <div>
                <form className="m-auto  shadow rounded p-5 border mt-4" style={{ width: "80%" }} onSubmit={setdata}>
                    <h1>Todolist Controlled</h1>
                    <div className='d-flex gap-2 me-2'>
                        <div className="mb-3 col-6">
                            <label className="form-label">City Name</label>
                            <input type="text" placeholder='Enter City Name' className="form-control" value={email6} onChange={this.emailchange} name="text" />

                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">State Name</label>
                            <input type="text" placeholder='Enter State Name' className="form-control" onChange={this.statechange} />

                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">images</label>
                        <input type="text" placeholder='Img Name' className="form-control" onChange={this.imgchange} />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" placeholder='Enter description' className="form-control" onChange={this.descriptionchange} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div>
                    <table class="table table-dark table-striped mt-4  ">
                        <thead>
                            <tr >
                                <th scope="col">#id</th>
                                <th scope="col">image</th>
                                <th scope="col">City Name</th>
                                <th scope="col">State Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Btn</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((v, i) => {
                                return (
                                    <>
                                        <Idacontrolled1 email6={v.email6} istate={v.istate} deleted={() => deleted(i)} index={i + 1} updated={() => updated(i)}  description={v.description} images={v.images} />

                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Todolist


