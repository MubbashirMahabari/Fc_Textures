import React, { useState, useEffect } from 'react';
import "../css/navbar.css"
import logo from "../assets/WrapCart_R.png"
import { Input, Button, Row, Col, Popover, Menu } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Navbar = () => {

    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowMenuIcon(scrollPosition >= 1025);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const content = (
        <Menu mode="vertical" style={{width:"300px",border:"none",textAlign:"center"}}>
            <Menu.Item>
                <Link href='#'>
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='#'>
                    Designs
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='#'>
                    About
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href='#'>
                    Contact Us
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <div className="navbar-section">
                <div className="navbar-container">

                    <div className='responsive-navbar'>

                        <Popover
                            content={content}
                            title={null}
                            trigger="click"
                            visible={isPopoverVisible}
                            onVisibleChange={(visible) => setIsPopoverVisible(visible)}
                            
                        >
                            <div className='menu-icon'>
                                <MenuOutlined style={{ fontSize: "25px", color: '#fff' }} />
                            </div>
                        </Popover>

                        <div className="responsive-logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className='search-bar' style={{ display: "flex", justifyContent: "center" }}>
                            <Input
                                style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                placeholder="Search"
                                prefix={<SearchOutlined style={{}} />}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className={`navbar-box ${isMenuOpen ? 'menu-open' : ''}`}>
                        <Row gutter={{ xs: 24, sm: 6, md: 12, lg: 32 }}>
                            <Col md={12}>
                                <div className='col-left'>
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="navbar-items">
                                        <Menu mode="horizontal">
                                            <Menu.Item>
                                                <Link href='#'>
                                                    Home
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href='#'>
                                                    Designs
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href='#'>
                                                    About
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link href='#'>
                                                    Contact Us
                                                </Link>
                                            </Menu.Item>
                                        </Menu>
                                    </div>
                                </div>

                            </Col>
                            <Col md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className='col-right'>
                                    <div className='search-bar'>
                                        <Input
                                            style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                            placeholder="Search"
                                            prefix={<SearchOutlined style={{}} />}
                                            className="search-input"
                                        />
                                    </div>
                                    <div className='wishlist'>
                                        <HeartOutlined style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className='cart'>
                                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                                    </div>
                                    <div className="auth-buttons">
                                        <Button className="login-button">
                                            Login
                                        </Button>
                                        <Button className="signup-button">
                                            Sign Up
                                        </Button>
                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </div>
            </div>




        </>

    )
}

export default Navbar
