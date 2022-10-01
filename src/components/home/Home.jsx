import s from './Home.module.css';
import Subject from './../../assets/React1_(1).png'
import { Typography } from 'antd';
import React from 'react';
const { Title } = Typography;



const Home = ({}) => (
  <div className={s.homeInner}>
    <img className={s.homeImg} src={Subject} alt="subject" />
  </div>
);

export default Home;