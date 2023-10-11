import React, { useState, useEffect } from 'react';

export default function TableSearch() {
  const getdata = () => {
    let old = localStorage.getItem('myData');
    if (old) {
      return JSON.parse(old);
    } else {
      return [];
    }
  };
  const [name, setName] = useState('');
  const [lname, setlName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState(getdata());
  const [extradata, setextraData] = useState(getdata());
  const [isupdate, setisUpdate] = useState({ isup: false, id: '' });

  const adddata = (e) => {
    e.preventDefault();
    if (!name.trim() || !lname.trim() || !number.trim()) {
      alert('Please fill all the fields');
    } else {
      if (isupdate.isup) {
        let newup = data.map((v, i) => {
          if (i === isupdate.id) {
            return { ...v, name, lname, number };
          } else {
            return v;
          }
        });
        setData(newup);
        setextraData(newup);
        setName('');
        setlName('');
        setNumber('');
        setisUpdate({ isup: false, id: '' });
      } else {
        let obj = { name, lname, number };
        setData([...data, obj]);
        setextraData([...data, obj]);
        setName('');
        setlName('');
        setNumber('');
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const updated = (i) => {
    setisUpdate({ isup: true, id: i });
    setName(data[i].name);
    setlName(data[i].lname);
    setNumber(data[i].number);
  };

  const search = () => {
    let searchtext = document.getElementById('search').value;
    setextraData(
      data.filter((a) => {
        return a.lname.includes(searchtext) || a.name.includes(searchtext) || a.number.includes(searchtext);
      })
    );
  };

  const refresh = () => {
    setextraData(data);
  };
  let deleted =(i)=>{
    const copy =[...data];
    copy.splice(i,1);
    setData(copy);

  }

  return (
    <div className="container-fluid mb-5">
      <div className="p-5 pb-0">
        <form className="form p-5 pt-3 m-auto w-50  rounded-2 shadow-lg" onSubmit={adddata}>
          <br />
          <br />
          <h1 className="pb-4">Registration form</h1>
          
          <span className='d-flex'>
          <label className="m-2 me-5 col-5 fs-4" >First Name</label>
          <input type="text" className='form-control ms-2 col-7 w-50' value={name} onChange={(e) => setName(e.target.value)} />
          
          </span>
          
         <br />
         <span className='d-flex'>

          <label className="m-2 me-5 fs-4 col-5">Last Name</label>
          <input type="text"className='form-control ms-2 col-5 w-50' value={lname} onChange={(e) => setlName(e.target.value)} />
         </span>
          <br />
          <span className='col-auto'>
           <label className="me-2 m-2 fs-4  col-form-label">Phone Number</label>

          </span>
          <span className='col-auto'>

          <input type="text" className='form-control ms-2  w-50' value={number} onChange={(e) => setNumber(e.target.value)} />
          </span>
          <br />
          <button className="ms-4 btn btn-outline-info ps-3 pe-4" type="submit">
            {isupdate.isup ? 'Update' : 'Submit'}
          </button>
          <br />
        </form>
      </div>
      <div className="d-flex w-75  m-auto p-3 ps-5 shadow-lg pt-4">
        <input className="ms-4  w-50 rounded form-control" type="text" id="search" />
        <button onClick={search} className="btn btn-outline-primary pt-1 ms-5">
          Search
        </button>
        <button className="btn btn-outline-dark pt-1 ms-2" onClick={refresh}>
          Refresh
        </button>
      </div>
      <table border="4" width="75%" className="m-auto shadow-lg" cellPadding="20px">
        <thead>
          <tr>
            <th className="border-2">S.no</th>
            <th className="border-2">FName</th>
            <th className="border-2">LastName</th>
            <th className="border-2">Number</th>
            <th className="border-2">Actions</th>
          </tr>
        </thead>

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
    </div>
  );
}
