import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

import List from './List'
import { people } from './people';
const BirthdayList = () => {
    const [person, setperson] = React.useState(people);
    return (
        <section className="container">
            <h3>{person.length} Birthday Today</h3>
            <div className="line"></div>
            <List people={person}></List>
            <button className="btn" onClick={() => { setperson([]) }}>Clear All</button>
        </section>
    );
}

ReactDom.render(<BirthdayList />, document.getElementById("root"));