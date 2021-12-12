import React,{useState} from 'react'
import './App.css';
const App = () => {
  const [input, setinput] = useState("")
  const [add, setadd] = useState([])
  const [togal, settogal] = useState(true)
  const [show, setshow] = useState(null)

  const Add=()=>{
    if(!input){
      alert("Please write something")
      return
    }

    if(input && !togal){
     setadd(
       add.map((e)=>{
         if(show===e.id){
           return{...add,name:input,id:e.id,comp:"false"}
         }
         return e
       })
     )
     settogal(true)
     setinput("")
    }
    else{
    let inputData={
      id:new Date().getTime().toString(),
      name:input,
      comp:"false"
    }
    setadd([...add,inputData])
    setinput("")
  }
  }

  const Edit=(id)=>{
    let fin=add.find((e)=>{
      return e.id===id
    })
    settogal(false)
    setshow(id)
    setinput(fin.name)
  }
  const Delete=(id)=>{
    const filt=add.filter((e)=>{
      return e.id!==id
    })
    setadd(filt)
  }
  const Complete=(id)=>{
    setadd(
    add.map((e)=>{
    if(id===e.id){
    return  {...add,comp:"true",name:e.name,id:e.id}
    
    }
    return e
    })
    )
  

  }
  return (
    <div>
    <input value={input} onChange={e=>setinput(e.target.value)}/>
    <button onClick={Add}>AddTodo</button>
   {
     add.map((e)=>{
       return(
      <div key={e.id}>
        
      <p>{e.name}</p>
      <button onClick={()=>Edit(e.id)}>Edit</button>
      <button onClick={()=>Delete(e.id)}>Delete</button>
      <button onClick={()=>Complete(e.id)}>Complete:{e.comp}</button>
      </div>
       )
     })
   }
  </div>
  )
}

export default App
