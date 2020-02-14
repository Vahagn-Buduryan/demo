import React from 'react';
import GoogleApiWrapper from './g_map';
import Card from './events';
import Stars from './stars';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Tooltip from '@material-ui/core/Tooltip';
import Footer from './footer';
import Desk from './dask';
import '../styles/user_page/user.css';

import main_post from '../styles/user_page/main_post.png';
import fb from '../styles/user_page/fb.svg';
import insta from '../styles/user_page/insta.svg';
import event1 from '../styles/user_page/event1.png';
import event2 from '../styles/user_page/event2.png';
import event3 from '../styles/user_page/event3.png';
import event4 from '../styles/user_page/event4.png';

function User() {
   const ev1 = {
     event : 'Չոր վաճառք 5',
     text : 'Վահրամ Միրաքյան',
     src : event1
   }

   const ev2 = {
    event : 'Բիզնես ստարտ․ <br/> Երկօրյա դասընթաց',
    text : 'Վահրամ Միրաքյան',
    src : event2
  }

  const ev3 = {
    event : 'Ինչպես արդյունավետ <br/> ներկայանալ Expo-ներին',
    text : 'Վահրամ Միրաքյան',
    src : event3
  }

  const ev4 = {
    event : 'Բիզնեսմենի իմիջ և բիզնես <br/> էթիկետ',
    text : 'Նվարդ Մելքոնյան',
    src : event4
  }

   return (
        <div id='content'>
          <div className='main'>
          <div>
            <img src={main_post} alt={'main'} className={'main_post'}/>
            <h2>Բիզնես ստարտ, Երկօրյա դասընթաց</h2>
            <Stars/>
            <div id="sub-menu" className={'row'}>
              <h3>About Event</h3>
              <h3>Lectures</h3>
              <h3 style={{color:'#537FFF'}}>Event Vanue</h3>
            </div>
            <div id="map">
                <GoogleApiWrapper className={'map'}/>
            </div>
            <div id="share">
              <h3>Share</h3>
              <div className={'row'}>
                  <img src={fb} alt='fb icon' style={{width:'30px',height:'30px'}}/>
                  <img src={insta} alt='inst icon' style={{width:'30px',height:'30px'}}/>
              </div>
            </div>
            <div id="going">
            <h3>120 Going</h3>
              <AvatarGroup className='avatars'>
                <Avatar alt="Remy Sharp" src="https://ozgrozer.github.io/100k-faces/0/8/008096.jpg" />
                <Avatar alt="Travis Howard" src="https://ozgrozer.github.io/100k-faces/0/8/008091.jpg"/>
                <Avatar alt="Cindy Baker" src="https://ozgrozer.github.io/100k-faces/0/8/008097.jpg" />
                <Avatar alt="Travis Howard" src="https://ozgrozer.github.io/100k-faces/0/8/008092.jpg" />
                <Avatar alt="Cindy Baker" src="https://ozgrozer.github.io/100k-faces/0/8/008095.jpg" />                
                <Tooltip title="Foo • Bar • Baz">
                    <Avatar>+115</Avatar>
                </Tooltip>
              </AvatarGroup>
            </div>
            <div id="events" className={"row"}>
              <Card
                src={ev1.src}
                event={ev1.event}
                text={ev1.text}
              />
              <Card
                src={ev2.src}
                event={ev2.event}
                text={ev2.text}
              />
              <Card
                src={ev3.src}
                event={ev3.event}
                text={ev3.text}
              />
              <Card
                src={ev4.src}
                event={ev4.event}
                text={ev4.text}
              />
            </div>
          </div>
          </div>
          <aside className='aside'>
            <Desk/>
          </aside>
          <div className='footer'> 
            <Footer/>
          </div>
        </div>
    );
}

export default User;