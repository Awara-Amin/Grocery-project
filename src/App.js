import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'



function App() {
// 1*
const [name, setName] = useState(''); // that one will be the value we will use in the form, by default it would be empty :)
const [list, setList] = useState([]); // this would be for a list whci we will have for the local storage
const [isEditing, setIsEditing] = useState(false); // this one is for editing, wether we edit what we have added or not
const [editID, setEditID] = useState(null); // editId tells us which element ID we want to edit
const [alert, setAlert] = useState({show: false, msg: '', type:''}); // alert appears in more than one situation, like if we remove an elemnt in our added list, or it appears when we add somethinf to the list
                                  //show or not, if show what would the message be, type is either sucess or danger
// 15
// const [alert, setAlert] = useState({
//   show: true,
//   msg: 'hello World kaka',
//   type:'sucess'});


// 4
const handleSubmit = (e) => {
  e.preventDefault();
  // console.log('hello');

// 9 a,b,c,d, e
// 9a now adding item to our list, see the list is above in the useState
  if(!name) { // it there was no name, when we would not add any name but press on submit
    //  display Alert

  // 19
  // setAlert({show: true, msg: 'please enter value', type: 'danger'});
  // }
  // 21
  showAlert(true, 'danger', 'please enter value')
}
// 9b
  else if(name && isEditing){ // if there is some value for name and when Editing is true
    // deal with edit
    setList(list.map((item) => {
      if(item.id === editID){
      return {...item, title:name}
    }
     return item
   }))
   setName('')
   setEditID(null);
   setIsEditing(false);
   showAlert(true, 'succeed', 'value Changed kaka');
  }

  // 9c
  else{
    //25 show alert
    showAlert(true, 'success', 'item added to the list');
  // 9c1 we create a variable object which has two properties id and title
                // id: its value is created like that. title: name, kaka this name comes from the (name) in the satat
    const newItem = {id:new Date().getTime().toString(),title:name};
    // 9d what we have in our list + the newItem. kaka the newItem has all the name s we add it is becuase name is value for title in that variable
    setList([...list, newItem])
    // 9e make the name empty again
    setName('')
  }
}

// 20             show is false by defalut
const showAlert = (show=false, type="", msg="") => {
  // if the property name matche the variable name that holdes the value, we can write like that
  // setAlert({show:show,type,msg})
  setAlert({show,type,msg})

}

// 26 to clear whole list
const clearList = () => {
  showAlert(true, 'danger', 'empty list');
  setList([])
}

// 28 to clear individuals items
const removeItem = (id) => {
  showAlert(true, 'danger', 'item removed');
  setList(list.filter((item) => item.id !== id))
}

// 34 editItem now kaka
const editItem = (id) => {
  const specificItem = list.find((item) => item.id === id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title);

}


// 2a*   a,b,c
  return <section className='section-center'>
    {/* 3 */}
    <form className='grocery-form' onSubmit={handleSubmit}>
      {/* 5 */}                {/* 16 we add all properties to Alert component  which they come from state alert*/}  {/* 22 */}
      {alert.show && <Alert     {...alert}                                                                           removeAlert={showAlert}/>}
      {/* 6 */}
      <h3>grocery bud</h3>
      <div className='form-control'>
                                                        {/* 8 we control the input kaka :)*/}
      <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)}></input>
      {/* 7 */}
      <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
      </div>
    </form>

    {/* 14  it is for, only when we have items in the list, show the list*/}
    {list.length > 0 && (
      <div className='grocery-container'>
            {/* 10 we iterate through the list */}    {/* 29 */}                 {/* 31*/}
        <List  items={list}                           removeItem={removeItem}    list={list} editItem = {editItem}/>
        {/* 2 */}                     {/* 27 */}
        <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
    )}

    {/* 2b <div className='grocery-container'>
      <List  items={list}  />
      {/* 2c */}
      {/* <button className='clear-btn'>clear items</button>
    </div> */}
  </section>
}
{/* <h2>grocery bud setup kaka</h2> */}
export default App
