'use client'

import { Card, Col, Modal, Row, Tabs } from 'antd';
import Image from 'next/image';
import React from 'react';
const { Meta } = Card
const webProjects = [
  {
    id: 'wa1',
    title: 'Social Media Like Portfolio',
    description: 
    'This is a highly scalable webapp that is built with NextJS, React, Postgres SQL and Styled components. The goal of this project is to create a social media like portfolio for developers or professionals such as photographers, graphic designers, game designers and etc  to showcase their projects and skills. This project is currently in development.',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    id: 'wa2',
    title: 'Anime Suggestions Webapp',
    description: 'This is built with NodeJs, ReactJS, Express, and Postgres SQL. The core function of the webapp is to show the latest anime of the season which will be updated whenever the list is changed by the MAL website. The backend of this webapp is a RESTFUL API which is linked to MAL API. There is also a gacha function (lucky draw) mini game user can play to generator 10 random cards which can be flipped and it will show the anime title and descriptions',
    image:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    id:'wa3',
    title: 'Responsive Weather App',
    description: 'This is a simple weather webapp can be browser from any device. It is built with ReactJS which process user input of the city and then it will automatically fetch the real time weather and temperature of the city. The background image will also change according to the weather of the city.',
    image:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  }
]

export default function Projects() {

  const items = [
    {
      key: '1',
      label: 'Web Apps',
      children: <div style={{paddingLeft: '5%'}}><WebApps/></div>,
    },
    {
      key: '2',
      label: 'Game Projects',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: '',
      children: 'Content of Tab Pane 3',
    },
  ];

  const handleChange = (e) => {
    console.log('handleChange', e);
  };

  return (
    <div style={{
      height: '100vh',
      width: '80svw',
      backgroundColor: 'white',
    }}>
    <Tabs
    centered
    size='large'
    defaultActiveKey="1"
    items={items}
    onChange={handleChange}
    indicatorSize={(origin) => origin - 16}
  />
    </div>

  );
}

const WebApps = () => {
  const [projects, setProjects] = React.useState(webProjects);

  const showModal = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, isModalOpen: true } : project
      )
    );
  };

  const handleOk = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, isModalOpen: false } : project
      )
    );
  };

  const handleCancel = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, isModalOpen: false } : project
      )
    );
  };

  return (
    <>
      <Row gutter={16}>
        {projects.map((project) => {
          return (
            <Col key={project.id + 322} span={8}>
              <Card
                key={project.id + 241231}
                hoverable
                onClick={() => showModal(project.id)}
                style={{ width: "80%" }}
                cover={<img key={project.id + 61278367281631278} alt="example" src={project.image} />}
              >
                <Meta key={project.title + 1122} title={project.title} style={{ width: "100%" }} />
              </Card>
              <Modal
                key={project.id + 312837918}
                title={project.title}
                open={project.isModalOpen}
                onOk={() => handleOk(project.id)}
                onCancel={() => handleCancel(project.id)}
                footer={null}
              >
                <Image key={project.id + 3128379182287872} src={project.image} width={470} height={300} alt={project.title} />
                <p style={{
                  fontFamily: 'Roboto',
                }} key={project.id + 312837918172398721}>{project.description}</p>
              </Modal>
            </Col>
          );
        })}
      </Row>
    </>
  );
};