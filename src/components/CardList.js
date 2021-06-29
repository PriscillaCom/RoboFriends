import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
    const CardComponent = friends.map((user,idx) => {
        return <Card key={idx} id={friends[idx].id} name={friends[idx].name} email={friends[idx].email}/>
    });

    return (
        <div>
            {CardComponent}
        </div>      
    )
}

export default CardList;