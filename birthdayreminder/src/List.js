import React from 'react';
import data from './data';
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
  

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
      };
    return (
        <>
        <h3>{people.length} birthdays today</h3>
       {people.map((people)=>{
           const{id,name,age,image}=people;
           return (<article key={id} className="person">
               <img src={image} alt={name}/>
               <div>
                   <h4>{name}</h4>
                   <p>{age} years</p>
               </div>
               <button onClick={() => removeItem(id)}>remove</button>
           </article>);
       })}
       <button onClick={()=>setPeople([])}>clear all
        </button>
        </>
    );

};
export default UseStateArray;