"use client"
import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
// import web7 from '../app/public/web7.png';
// import Icon2 from '';
// import Icon3 from '';

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1></ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>NexT Js</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>NodJs</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
             <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>FireBase</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>FireBase</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>FireBase</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon/>
                <ServicesH2>FireBase</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;