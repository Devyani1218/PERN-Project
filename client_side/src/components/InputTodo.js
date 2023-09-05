import React , {Fragment, useState} from 'react'

function InputTodo() {
    const [description, setdescription] = useState("")

    const OnsubmitForm=async(e) => {
        e.preventDefault();
        try {
            const body = {description}
            const response =await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location="/"
        } catch (err) {
            console.error(err.message)
            
        }
    }

  return (
    <Fragment><h1 className='text-center mt-5'>ToDoList</h1>
    <form className='d-flex mt-5' onSubmit={OnsubmitForm}>
        <input type="text" className='form-control' value={description} onChange={e => setdescription(e.target.value)}/>                
        <button className='btn btn-success'>Add</button>
    </form>
    </Fragment>
  )
  
}

export default InputTodo