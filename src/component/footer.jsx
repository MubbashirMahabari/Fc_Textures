import React from 'react'
import "../css/footer.css"
import { Col, Row } from 'antd'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-container">
                <div className="contact-us">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-box">
                    <Row>
                        <Col md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="menu">
                                <div className="menu-item">
                                    <Link href='#'>
                                        Home
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='#'>
                                        About Us
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='#'>
                                        Designs
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='#'>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="social-link">
                                <div className="icon-link">
                                    <Link>
                                        <InstagramOutlined style={{ color: "#fff", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <FacebookOutlined style={{ color: "#fff", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <LinkedinOutlined style={{ color: "#fff", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <YoutubeOutlined style={{ color: "#fff", fontSize: "30px" }} />
                                    </Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="copyright">
                    <p> © 2024 <Link href='https://www.arligtechnologies.com/'>Arlig Technoligies
                    </Link>.All rights reserved</p>
                </div>
            </div>
           
        </div>
    )
}

export default Footer
