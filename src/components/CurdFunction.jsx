import React, { useState } from 'react';
import CurdFunction1 from './CurdFunction1';

function CurdFunction() {
    const [formData, setFormData] = useState({
        email: 'vinay@gmail.com',
        password: '2344',
    });
    const [data, setData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(null);
    const [updateObject, setUpdateObject] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const { email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate !== null) {
            setData((prevData) =>
                prevData.map((v, i) => (i === isUpdate ? { email, password } : v))
            );
            setFormData({ email: '', password: '' });
            setIsUpdate(null);
        } else {
            setData([...data, { email, password }]);
            setFormData({ email: '', password: '' });
        }
    };

    const handleDelete = (i) => {
        const copy = [...data];
        copy.splice(i, 1);
        setData(copy);
    };

    const handleUpdate = (i) => {
        setIsUpdate(i);
        setUpdateObject(data[i]);
        setFormData(data[i]);
    };

    return (
        <div>
            <form
                className="m-auto  shadow rounded p-5 border mt-4"
                style={{ width: '600px' }}
                onSubmit={handleSubmit}
            >
                <h1>Registration</h1>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control mb-2"
                        value={password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={showPassword ? 'btn btn-danger' : 'btn btn-primary'}
                    >
                        {showPassword ? <span class="bi bi-eye"></span>:<span class="bi bi-eye-slash"></span>}
                    </button>
                </div>
                <button type="submit" className="btn btn-primary">
                    {isUpdate !== null ? 'Update' : 'Submit'}
                </button>
            </form>
            <div className="m-4 flex-wrap gap-4 d-flex justify-content-center">
                {data.map((v, i) => (
                    <CurdFunction1
                        key={i}
                        email={v.email}
                        password={v.password}
                        deleted={() => handleDelete(i)}
                        updated={() => handleUpdate(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CurdFunction;

