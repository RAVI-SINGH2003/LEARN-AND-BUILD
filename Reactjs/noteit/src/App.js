import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateNote from './components/CreateNote'
import { useState } from 'react'
// const changeColor = ()=>{
//   let red = Math.floor(Math.random()*256);
//   let green = Math.floor(Math.random()*256);
//   let blue = Math.floor(Math.random()*256);
//   document.body.style.backgroundColor=`rgb(${red},${green},${blue})`
// }
// setInterval(changeColor,4000);


function App() 
{  const [allnotes,setNotes] = useState([])

   const deleteNote =(id)=>{
    const tempNotes = allnotes.filter((item,i)=>{
      return id!==i
    })
    setNotes(tempNotes);
    console.log("delete button clicked")
  }
 
  const addNote = (note) =>{ 
    setNotes([...allnotes,note]);
  }
  const createNotes = (note,index) => {
    return  <Note
    title = {note.title}
    content = {note.content}
    key ={index}
    onDelete = {deleteNote}
    />
  }

  return (
    <div className="App">
      <Header/> 
      <CreateNote onAdd={addNote}/>
       {allnotes.map(createNotes)} 
      <Footer/> 
    </div>
  );
}

export default App;
