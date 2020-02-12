import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import '../styles/dask.css';

import book1 from '../styles/user_page/book1.png';
import book2 from '../styles/user_page/book2.png';
import book3 from '../styles/user_page/book3.png';

function Desk () {
    return (
            <div id="event_info">
            
            <div id="upcoming">
                <h3>Upcoming events</h3>
                <div className='row'>
                    <div className='date'>
                        <h4>18</h4>
                        <p>Jan</p>
                    </div>
                    <div>
                        <p>Հաճախորդների արդյուն․․․</p>
                        <p>Sat 7:00 pm•123 guest </p>
                    </div>
                </div>
                <div className='row'>
                        <div className='date'>
                            <h4>22</h4>
                            <p>Jan</p>
                        </div>
                        <div>
                            <p>Արդյունավետ վաճառք ս․․․</p>
                            <p>Wed 7:00 pm•154 guest </p>
                        </div>
                </div>
                <div className='row'>
                    <div className='date'>
                        <h4>30</h4>
                        <p>Jan</p>
                    </div>
                    <div>
                        <p>Գրագետ արտահանում և․․․</p>
                        <p>Thu 7:00 pm•107 guest </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='date'>
                        <h4>18</h4>
                        <p>Jan</p>
                    </div>
                    <div>
                        <p>Չոր վաճառքներ 5</p>
                        <p>Fri 7:00 pm•131 guest </p>
                    </div>
                </div>
            </div>
            <div id="books">
                <div className="row">
                        <img src={book1} alt="book" style={{width:'61px',height:'83px'}}/>
                        <div>
                            <h4>Everybody writes</h4>
                            <p>Ann Handley</p>
                        </div>
                </div>
                <div className="row">
                        <img src={book2} alt="book" style={{width:'61px',height:'83px'}}/>
                        <div>
                            <h4>Marketing rebellion</h4>
                            <p>Mark Shaefer</p>
                        </div>
                </div>
                <div className="row">
                        <img src={book3} alt="book" style={{width:'61px',height:'83px'}}/>
                        <div>
                            <h4>Play bigger</h4>
                            <p>Dave Peterson</p>
                        </div>
                </div>
            </div>
            <div id="lectures">
                <div className="row">
                    <Avatar alt="Remy Sharp" variant="square" src="https://ozgrozer.github.io/100k-faces/0/8/008075.jpg" />
                    <div>
                        <h4>Name Surname</h4>
                        <p>Specialty</p>
                    </div>
                </div>
                <div className="row">
                    <Avatar alt="Remy Sharp" variant="square" src="https://ozgrozer.github.io/100k-faces/0/8/008076.jpg" />
                    <div>
                            <h4>Name Surname</h4>
                            <p>Specialty</p>
                    </div>
                </div>
                <div className="row">
                    <Avatar alt="Remy Sharp" variant="square" src="https://ozgrozer.github.io/100k-faces/0/8/008077.jpg" />
                    <div>
                            <h4>Name Surname</h4>
                            <p>Specialty</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Desk;