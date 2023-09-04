//ฉบับChat Gpt
// import React from 'react';

// const List = (props) => {
//     const { people } = props;

//     // Use the slice method to get the first 5 people
//     const firstFivePeople = people.slice(0, 5);

//     return (
//         <div>

//             {firstFivePeople.map((person) => (
//                 <article className='person' key={person.id}>
//                     <img src={person.Image} alt={person.name} />
//                     <div>
//                         <h4>{person.name}</h4>
//                         <p>{person.age} years old</p>
//                     </div>
//                 </article>
//             ))}
//         </div>
//     );
// };

// export default List;

//ฉบับปรับปรุง(อาจาร์ย)
import React from 'react';

const List = (props) => {
    const { people } = props;

    return (
        <div>
            {people.map((person) => {
                const { id, name, age, Image } = person;
                return (
                    <article className='person' key={id}>
                        <img src={Image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years old</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;

