import React, { useState, useEffect, useRef } from 'react'

function Home(props) {
  const [data, setData] = useState(props.edit ? props.edit.value: '');
  const focusRef = useRef(null);

  useEffect(() => {
    focusRef.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() + 1000),
      text: data
    });

    setData('');
  };
  return (

    <section className='form-container'>
  
      <form onSubmit={handleSubmit} className='form'>

        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={data}
              onChange={(e) => setData(e.target.value)}
              name='text'
              ref={focusRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (

          <>

        <input
          placeholder='Add a todo'
          required
          value={data}
          onChange={(e) => setData(e.target.value)}
          ref={focusRef}
        ></input>
        <button className='todo-button' onClick={handleSubmit}>Add Todo</button>
       </>
        )}
      </form>
    </section>
  );
}

export default Home;