// libraries
import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';

// js
import {
    Line,
    Main,
    Aside,
    Header,
    Footer,
    NameUser,
    ListItem,
    Container,
    ButtonEnter,
    DrawerOption,
    ContainerImage,
} from './DrawerNavigationStyles';

// Images
import imageDrawerOpen from '../../assets/images/imageDrawerOpen.png';

// components (navigation)
import ToNavigation from '../navigation';

const DrawerNavigation: React.FC = () => {
    // constants
    const AllOptionsDrawer = ['Módulo 1'];

    // states
    const [openDrawerLeft, setOpenDrawerLeft] = useState(false);
    const [pathRoute, setPathRoute] = useState('');
    const [redirect, setRedirect] = useState(false);

    // useCotext

    const CloseDrawer = () => {
        setOpenDrawerLeft(false);
    };

    const OpenDrawer = () => {
        setOpenDrawerLeft(true);
    };

    const TransitionScreen = (index: number) => {
        if (index === 0) {
            setPathRoute('/ModuleOne');
        }
        setRedirect(true);
        setOpenDrawerLeft(false);
    };

    // Renders
    const RenderitemList = () => AllOptionsDrawer.map((text, index) => {
        const onClick = () => {
            TransitionScreen(index);
        };

        return (
            <ListItem
                index={index}
                key={text}
                onClick={onClick}
            >
                <DrawerOption index={index}>{text}</DrawerOption>
            </ListItem>
        );
    });

    // main
    const RenderList = () => (
        <Container>
            <ToNavigation pathRoute={pathRoute} redirect={redirect} />
            <Header>
                <NameUser>Estudos Adler</NameUser>
            </Header>
            <Main />
            <Aside>
                <Line />
                {RenderitemList()}
            </Aside>
            <Footer>
                <Line />
            </Footer>
        </Container>
    );
    return (
        <>
            <ButtonEnter onClick={OpenDrawer}>
                <ContainerImage src={imageDrawerOpen} />
            </ButtonEnter>
            <Drawer
                anchor="left"
                onClose={CloseDrawer}
                open={openDrawerLeft}
            >
                {RenderList()}
            </Drawer>
        </>
    );
};

export default DrawerNavigation;
