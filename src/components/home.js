import React from 'react';
import Card from './home_card';
import Footer from './footer';
import Desk from './dask';
import  '../styles/home_page/home.css';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import SingleLineGridList from './slidePic';

import news1 from '../styles/home_page/news1.png';
import news2 from '../styles/home_page/news2.png';
import news3 from '../styles/home_page/news3.png';
import search from '../styles/home_page/Search.svg'



function Home () {

     const new1 = {
        src: news1,
        title: 'Marketing',
        text : "Ի՞նչ է Inbound մարքեթինգը",
        height: "300px",
      };
     const new2 = {
        src: news2,
        title: 'Marketing',
        text : "Starbucks-ի հոգեբանական հնար․․․",
        height: "300px",
      };
      const new3 = {
        src: news3,
        title: "Marketing",
        text : "Լոյալություն կամ հաճախոր․․․",
        height: "300px",
      };
      
      const content ={
          cols:3.5,
          width: "950px",
      }

      const video = {
        cols: 4.5,
        width: "1341px",
      };

    return (
      <div className="wrapper">
        <div className='search'>
        <TextField
          id="standard-textarea"
          label="Search for Events"
          variant="outlined"
          className={"searchField"}
          margin='dense'
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" style={{outline:'none'}} aria-label="search">
                  <img src={search} alt="search"/>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </div>
      <CssBaseline/>
      <Container maxWidth="md" className="main">
        <div className="row">
        <div id="news">
            <h2>News</h2>
              <section  className='row1'>
                <Card 
                  height={new1.height}
                  src = {new1.src}
                  title={new1.title}
                  text={new1.text}
                />
                <Card
                  height={new2.height}
                  src = {new2.src}
                  title={new2.title}
                  text={new2.text}
                />
                <Card
                  height={new3.height}
                  src = {new3.src}
                  title={new3.title}
                  text={new3.text}
                />
              </section>
              <section id="articles">
               <h2>Articles</h2>
                <SingleLineGridList
                cols={content.cols}
                width={content.width}                
                />
              </section>
              <section id="blog">
                <h2>Blog</h2>
              <SingleLineGridList
                cols={content.cols}
                width={content.width}
              />
              </section>
            </div>
          <section id="videos">
          <h2>Videos</h2>
            <SingleLineGridList
              cols={video.cols}
              width={video.width}
            />
          </section>
        </div>
      </Container>
      <aside className='aside'>
      <Desk/>
      </aside>
      <div className='footer'> 
        <Footer/>
      </div>
      </div>
    );
}

export default Home;