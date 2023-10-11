import React,{useState,useEffect} from 'react'

export default function Funcform() {

  let getdata =()=>{
    let old =localStorage.getItem("myData");
    if(old){
        return JSON.parse(old)
    }else{
        return []
    }
  }  
  const [name ,setName]=useState('')
  const [number ,setNumber]=useState( )
  const [data ,setData]=useState(getdata());
  const [isupdate ,setIsUpdate]=useState({isup:false,id:''});
  let adddata =(e)=>{
    e.preventDefault();
    if(!name && !number){
        alert ("plese fill all th feilds")
    }else{
        if(isupdate.isup){
            let newup =data.map((v,i)=>{
                if(v === data[isupdate.id]){
                    return {...v ,name, number}
                }else{
                    return v
                }
            })
            setData (newup)
            setName("")
            setNumber("")
            setIsUpdate({isup:false,id:""})
        }else{
            let obj ={name,number};
            setData([...data ,obj]);
            setName ("");
            setNumber ("");
        }
    }
  }
  useEffect (()=>{
    localStorage.setItem('myData',JSON.stringify(data))
  } ,[data])
  let updated =(i)=>{
    setIsUpdate({isup:true , id:i});
    setName(data[i].name);
    setNumber(data[i].number);

  }
  return (
    <>
    <div className='m-auto w-50 bg-info p-5'>
       <form className='form' onSubmit={adddata}><br /><br />
          <label> Name</label><br />
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br />
       
          <label>Phone Number</label><br />
          <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} /><br />
          <button type='submit'>{isupdate.isup ? "Update":"Submit"}</button><br />
       </form>
        <div>
            {data.map((v,i)=>{
                return (
                    <div  key={i} className='m-auto w-50 bg-info border p-4 d-flex'>
                     <div>
                     <h1>{v.name}</h1>
                         <h1>{v.number}</h1>
                         <button onClick={()=>{updated(i)}}>{v.updated}</button>
                   
                     </div>
                   </div>
                )
            })}
        </div>
    </div>
    </>
  )
}
