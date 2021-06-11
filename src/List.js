import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'



            // 11
const List = ({items, removeItem, editItem}) => {
  return <div className='grocery-list'>
     {/*12  */}
    {items.map((item) =>{
      const {id, title} = item;
      // 13a
      return <article key={id} className='grocery-item'>
        {/* 13b */}
        <p className='title'>{title}</p>
        {/* 13c */}
        <div className='btn-container'>
          <button type='button' className='edit-btn' onClick={() => editItem(id)}>
            <FaEdit />
          </button>
                                                       {/* 30 */}
          <button type='button' className='delete-btn' onClick={()=> removeItem(id)}>
            <FaTrash />
          </button>
        </div>

      </article>
    })}

  </div>
}

export default List
