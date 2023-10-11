import React, { useState, useEffect } from 'react';

export default function Home() {
  const getStoredData = () => {
    const storedData = localStorage.getItem('myData');
    return storedData ? JSON.parse(storedData) : [];
  };

  const [name, setName] = useState('');
  const [lname, setLName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState(getStoredData());
  const [isUpdate, setIsUpdate] = useState({ isUpdating: false, id: null });

  const addData = (e) => {
    e.preventDefault();
    if (!name.trim() || !lname.trim() || !number.trim()) {
      alert('Please fill all the fields');
    } else {
      if (isUpdate.isUpdating) {
        const updatedData = data.map((task, i) => {
          if (i === isUpdate.id) {
            return { ...task, name, lname, number };
          }
          return task;
        });
        setData(updatedData);
        setName('');
        setLName('');
        setNumber('');
        setIsUpdate({ isUpdating: false, id: null });
      } else {
        const newData = { name, lname, number };
        setData([...data, newData]);
        setName('');
        setLName('');
        setNumber('');
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const updateTask = (i) => {
    setIsUpdate({ isUpdating: true, id: i });
    setName(data[i].name);
    setLName(data[i].lname);
    setNumber(data[i].number);
  };

  const deleteTask = (i) => {
    const updatedData = [...data];
    updatedData.splice(i, 1);
    setData(updatedData);
  };

  return (
    <>
    <div className='w-50   border border-light shadow rounded  ms-5 mt-5 '>
      <form onSubmit={adddata}>
        <div className='border d-flex   border-bottom     p-2 ps-5 pe-5 justify-content-between'>
          <div className='d-flex'>
            <h3>Today</h3><span className='fs-lg-5 mt-2 ps-2'>Fri 21 Sep</span>
          </div>
          <div>
            <span><i className="bi bi-text-center fs-3"></i></span>
          </div>

        </div>
        <div onClick={() => { }} className=' w-50  mt-2 ps-3  opacity-75 pe-5' style={{ border: 'none' }}>
          <button className='btn btn-outline-light d-flex'>
            <div> <span className="bi bi-plus-lg ps-4 me-2 navbar-brand " style={{ color: '#dc4c3e' }}></span></div>
            <div style={{ fontWeight: '400', color: 'gray' }}>Add Task</div>
          </button>
        </div>
        <div className=' ps-5 mt-2 ps-3   pe-5 pb-2'>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Task Name</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" placeholder="Enter Task name"   value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
        </div>
        <div className=' ps-5 mt-2 ps-3  pe-5 pb-2'>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" placeholder="description"value={lname} onChange={(e) => setlName(e.target.value)}  />
            </div>
          </div>
        </div>
        <div className=' ps-5 mt-2 ps-3  pe-5 pb-2'>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label">Description</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="inputPassword" placeholder="description"value={number} onChange={(e) => setNumber(e.target.value)}  />
            </div>
          </div>
        </div>
      </form>
      <div className='pb-4 ps-4 pt-2 ms-3'>
        <button className='m-2 ps-3 pe-3 p-1 btn btn-outline-secondary'>Cancel</button>
        
        <button className="ms-4 btn btn-outline-info ps-3 pe-4" type="submit">
          {isupdate.isup ? 'Update' : 'Add Task'}
        </button>
      </div>
     

    </div>
    <table  width="25%" className="m-auto shadow-lg" cellPadding="20px">

      <tbody>
        {extradata.map((v, i) => {
          return (
            <tr key={i}>
              <td className="border-1">{i + 1}</td>
              <td className="border-1">{v.name}</td>
              <td className="border-1">{v.lname}</td>
              <td className="border-1">{v.number}</td>
              <td className="border-1">
                <button className="btn btn-outline-danger me-2" onClick={() => updated(i)}>
                  Update
                </button>
                <button className="btn btn-outline-primary" onClick={() => deleted(i)}>
                  deleted
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

  </>
  );
}
