import { Drawer, List, ListItem } from '@mui/material'
import React from 'react'
import { scroller } from 'react-scroll'

type SideDrawerProps = {
    open: boolean
    onClose: (value: boolean) => void
}

type LinkItem = {
    where: string;
    value: string;
};

const SideDrawer = ({ open, onClose }: SideDrawerProps) => {
    const links: LinkItem[] = [
        { where: 'featured', value: 'To top' },
        { where: 'venuenfo', value: 'Venue NFO' },
        { where: 'highlights', value: 'Highlights' },
        { where: 'pricing', value: 'Pricing' },
        { where: 'location', value: 'Location' },
    ];

    const scrollToElement = (element: string) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        onClose(false);
    };

    const renderItem = (item: LinkItem) => {
        return (
            <ListItem button onClick={() => scrollToElement(item.where)} key={item.where}>
                {item.value}
            </ListItem>
        );
    }

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose(false)}
        >
            <List component="nav">
                {links.map((item) => (
                    <React.Fragment key={item.where}>{renderItem(item)}</React.Fragment>
                ))}
            </List>
        </Drawer>
    )
}

export default SideDrawer;
