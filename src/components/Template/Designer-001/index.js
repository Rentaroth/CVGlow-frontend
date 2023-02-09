import React from 'react';
import { Context } from '../../Context';
import { Header } from './components/Header';
import { Section1 } from './components/Section1';
import { Section2 } from './components/Section2';
import { Section3 } from './components/Section3';
import { Section4 } from './components/Section4';
import { Section5 } from './components/Section5';
import { Footer } from './components/Footer';

function Designer001() {
  return (
    <Context.Consumer>
      {(dataState) => [
        <Header key={'header'} />,
        <Section1 key={'section1'} />,
        <Section2 key={'section2'} />,
        <Section3 key={'section3'} />,
        <Section4 key={'section4'} />,
        <Section5 key={'section5'} />,
        <Footer key={'footer'} />,
      ]}
    </Context.Consumer>
  );
}

export { Designer001 };
