import Button from '@mui/material/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

type ButtonProps = {
    text:string
    link:string
    size?:'small' | 'medium' | 'large'
    style?:{
        background:string
        color:string
    }
    iconTicket?:boolean
}

const MyButton = ({text,link,size,style,iconTicket}:ButtonProps) =>{
    
    return(
        <Button
            href = {link}
            variant='contained'
            size={size? size : 'large'}
            style={{
                background:'#8e8e8e',
                color:"#fffff",
                ...style
            }}
        >
            {iconTicket?
            <img
                src={TicketIcon}
                className='iconImage'
                alt='icon_button'
            />
            :null
        }
            {text}
        </Button>
    )
}

export default MyButton