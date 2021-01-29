import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

import List from './List'
import { people } from './people';
const BirthdayList = () => {

    return (
        <section className="container">
            <List people={people}></List>
        </section>
    );
}

ReactDom.render(<BirthdayList />, document.getElementById("root"));