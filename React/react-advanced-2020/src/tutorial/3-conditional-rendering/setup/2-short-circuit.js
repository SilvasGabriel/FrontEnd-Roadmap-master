import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('')
   //const firstValue = text || 'hello world';
   //const secondValue = text && 'hello world';
   const [isError, setIsError] = useState(false)

  return (
    <>
     {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>*/}
        <h1>{text || 'john doe'}</h1>
        <button className="btn" onClick={()=>setIsError(!isError)}>toogle error</button>
        {/*{text && <h1>hello world</h1>}
        {!text && <h1>hello world</h1>}*/}
        {isError && <h1>Error...</h1>}
        {isError ? (
        
        <p>there is an error...</p>
       
        ) : (
          <h2>there is no error</h2>
        ) }
    </>
  );
};

export default ShortCircuit;
