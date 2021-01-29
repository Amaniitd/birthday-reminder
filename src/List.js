import React from 'react';


const List = ({ people }) => {
    return (
        <>
            {people.map(({ id, name, age, image }) => {
                return (
                    <article key={id}>
                        <img src={image} alt="img not found" />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
}

export default List;