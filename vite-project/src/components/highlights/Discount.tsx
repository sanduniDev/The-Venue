import {useState, useEffect} from 'react';
import {Fade,Slide} from 'react-awesome-reveal';
import MyButton from '../utils/MyButton';

const Discount = () =>{

    const end = 30;
    const [start,setStart]= useState(0);
    const porcentage = ()=>{
        if(start<end){
            setStart(prevCount => prevCount+1);
        }
    }

    useEffect(()=>{
        if(start>0 && start<end ){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1);
            },30)
        }
    },[start])

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView)=>{
                        if(inView){
                            porcentage();
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide direction='right'>
                    <div className="discount_description">
                        <h3>Purchase ticket before 20th June</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse tempore necessitatibus 
                            ipsa odio voluptatibus possimus ullam porro aliquid mollitia architecto veritatis 
                            quaerat hic excepturi nam, provident vel quia vero alias?
                        </p>

                        <MyButton
                            text="purchase tickets"
                            link= "http://google.com"
                            size="small"
                            style={{
                                background:'#ffa800',
                                color:'#fffff'
                            }}
                            iconTicket={true}
                        />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount