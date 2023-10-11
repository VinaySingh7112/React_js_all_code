import React, { useState, useEffect } from 'react';
import moment from "moment"

export default function Home() {
  const getdata = () => {
    let old = localStorage.getItem('myData');
    if (old) {
      return JSON.parse(old);
    } else {
      return [];
    }
  };
  const [name, setName] = useState('');
  const [descr, setdescr] = useState('');

  const [data, setData] = useState(getdata());
  const [extraData, setExtraData] = useState(getdata());
  const [isUpdate, setIsUpdate] = useState({ isup: false, id: '' });

  const addData = (e) => {
    e.preventDefault();
    if (!name.trim() || !descr.trim()) {
      alert('Please fill all the fields');
    } else {
      if (isUpdate.isup) {
        let newup = data.map((v, i) => {
          if (i === isUpdate.id) {
            return { ...v, name, descr };
          } else {
            return v;
          }
        });
        setData(newup);
        setExtraData(newup);
        setName('');
        setdescr('');

        setIsUpdate({ isup: false, id: '' });
      } else {
        let obj = { name, descr };
        setData([...data, obj]);
        setExtraData([...data, obj]);
        setName('');
        setdescr('');

      }
    }
  };

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const updated = (i) => {
    setIsUpdate({ isup: true, id: i });
    setName(data[i].name);
    setdescr(data[i].descr);

  };

  let deleted = (i) => {
    const copy = [...data];
    copy.splice(i, 1);
    setData(copy);
  };

  return (
    <div className='d-flex position-relative '>
      <div className=' h-50 position-fixed position-absolute  ms-5 mt-5 border-bottom' style={{top:"6%",width:"50%"}}>
        <form onSubmit={addData}>
          <div className=' d-flex border-bottom p-2 ps-5 pe-5 justify-content-between'>
            <div className='d-flex'>
              <h3>Today</h3><span className='fs-lg-5 mt-2 ps-2'>{moment().format("MMM Do YYYY,h:mm:ss a")}</span>
            </div>
            <div>
              <span><i className="bi bi-text-center fs-3"></i></span>
            </div>
          </div>
          <div className='w-50 mt-2 ps-3 opacity-75 pe-5' style={{ border: 'none' }}>
            <div className='btn btn-outline-light d-flex'>
              <div> <span className="bi bi-plus-lg ps-4 me-2 navbar-brand " style={{ color: '#dc4c3e' }}></span></div>
              <div style={{ fontWeight: '400', color: 'gray' }}>Add Task</div>
            </div>
          </div>
          <div className='ps-5 mt-2 ps-3 pe-5 pb-2'>
            <div className="form-group row">
              <label htmlFor="taskName" className="col-sm-3 col-form-label">Task Name</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="taskName" placeholder="Enter Task name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='ps-5 mt-2 ps-3 pe-5 pb-2'>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-3 col-form-label">Description</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="description" placeholder="Description" value={descr} onChange={(e) => setdescr(e.target.value)} />
              </div>
            </div>
          </div>

          <div className='pb-4 ps-4 pt-2 ms-3'>
            <div className='m-2 ps-3 pe-3 pt-2 btn btn-outline-secondary'>Cancel</div>
            <button className="ms-4 btn btn-outline-info ps-3 pe-4" type="submit">
              {isUpdate.isup ? 'Update' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
       
       <table className="m-auto position-absolute  mt-5 "style={{right:'0%', left:'55%'}} cellPadding="20px">
        <tbody className=' pt-lg-4 p-1 d-flex flex-wrap opacity-100'>
          {extraData.map((v, i) => {
            return (
              <div key={i} className=' p-2  shadow rounded  m-3  '>
                <div className='fs-5 border-bottom mb-1'style={{color:'#dc4c3e' ,fontWeight:'bold'}}>Task {i + 1}</div>
                <div className='d-flex justify-content-between '>
                  <div >
                    <span className=' me-3' style={{color:'#731ff0' ,fontWeight:'600'}}>{v.name}</span>
                    <span >{v.descr}</span>

                  </div>
                  <span >
                    <span className="btn btn-outline-primary ms-3 me-1" onClick={() => updated(i)}>
                      <i class="bi bi-pen"></i>
                    </span>
                    <span className="btn btn-outline-danger " onClick={() => deleted(i)}>
                      <i class="bi bi-trash"></i>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </tbody>
      </table>
       </div>
   
  );
}
