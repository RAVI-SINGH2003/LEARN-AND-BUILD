import React ,{useState} from 'react'

const CreateNote = (props) => {
    const [notes,setNote] = useState({
        title : "",
        content : ""
    })
    const trackChanges=(e)=>{
      const {name,value} =e.target;
      setNote(lastnote =>{
        return {...lastnote,[name] : value}
      });
    }
    const attachNote = (event)=>{
     setNote({
      title : "",
      content : ""
     })      
      event.preventDefa ult()
      if(notes.title!=="" && notes.content!=="")
      props.onAdd(notes)
    }
  return (
    <div>
        <form action="">
            <input type="text" name="title" placeholder='Note Title' value={notes.title} onChange={trackChanges}/>
            <textarea name="content" id="" cols="30" rows="5" placeholder='Note Content' value={notes.content} onChange={trackChanges}></textarea>
            <button type="button" onClick={attachNote}>ADD NOTE</button>
        </form>
    </div>
  )
}

export default CreateNote
