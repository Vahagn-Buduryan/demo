import React , {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



import Card from "./home_card";

import Image from '../styles/home_page/news1.png';
import Arrow from '../styles/home_page/arrow.svg';


const new1 = {
    src: Image,
    title: 'Marketing',
    text : "Ի՞նչ է Inbound մարքեթինգը",
    height: "300px",
  };


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    maxWidth : '951px',
    overflow:'hidden'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },

  bContainer:{
    display:'flex',
    alignItems:'center',
  },


}));

const tileData = [ {
    img: Image,
    title: 'Image',
    author: 'author',
    },
    {img: Image,
    title: 'Image',
    author: 'author',
    },
    {img: Image,
    title: 'Image',
    author: 'author',
    },
    {img: Image,
    title: 'Image',
    author: 'author',
    },
    {img: Image,
    title: 'Image',
    author: 'author',
    },
    {img: Image,
    title: 'Image',
    author: 'author',
    }
];




export default function SingleLineGridList(props) {
  let myRef =useRef();
  const classes = useStyles();

  
  return (
    <div className={classes.bContainer}>
    <img src={Arrow} alt={'left'} onClick={ ()=> {myRef.current.scrollLeft-=20}} style={{transform: 'scaleX(-1)'}}/>
    <div className={classes.root}>
      <GridList ref={myRef} className={classes.gridList} cols={props.cols} style={{width:props.width,height:'331px'}}>
        {tileData.map((tile, key) => (
          <GridListTile key={key} style={{height:"282px"}}>
            <Card 
    height={new1.height}
    src = {new1.src}
    title={new1.title}
    text={new1.text}
    />
          </GridListTile>
        ))}
      </GridList>
    </div>
    <img src={Arrow} alt={'right'} onClick={ ()=> {myRef.current.scrollLeft+=20}}/>
    </div>
  );
}