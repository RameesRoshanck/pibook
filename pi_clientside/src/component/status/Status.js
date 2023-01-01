import React from 'react'
import './status.css'
import image from '../../assets/elonmask.jpeg'
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';



function Status() {
  return (
    <div className='mainStatus'>
        <div className="status">
        <div className="statusWraper">
            <div className="statusToper">
            <Fab style={{zIndex:"-1"}} color="secondary" aria-label="add">
                <AddIcon  />
            </Fab>  
            </div>  
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div>
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div>   
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 

            <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
               <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
               <div className="statusToper">
                <img src={image} alt="img" className='statusImage' />
                <Grid className='statusName'>
                <span>name</span>
                </Grid>   
            </div> 
        </div>
        </div>
    </div>
  )
}

export default Status