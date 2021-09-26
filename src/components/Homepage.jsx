import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from ".";

const { Title } = Typography;
function Homepage(props) {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return "...Is Loading";

    console.log(data);
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stack
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total cryptocurrencies"
                        value={globalStats.total}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total market cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total 24th volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Markets"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 Cryptocurrencies in the world
                </Title>
                <Title level={2} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={2} className="show-more">
                    <Link to="/news">Show More</Link>
                </Title>
            </div>
            <News simplified/>
        </>
    );
}

export default Homepage;
