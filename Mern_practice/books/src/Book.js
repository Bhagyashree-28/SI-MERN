import React from 'react'

const Book = ({img,title,author}) => {

    const clickHandler=(e)=>{
      console.log(e);
      alert('hello');
    };
   const complexExample=(author)=>{
     alert(author);
   }
  
    return (
    <article className='book'
    onMouseOver={()=>{console.log(title);}}>
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' className="buttonclick" onClick={clickHandler}>click me</button>
      <button type='button' className="buttonclick" onClick={()=>complexExample(author)}>click me for author</button>
    </article>
    );
  };

export default Book
