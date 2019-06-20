// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import P from '@govtnz/ds/build/react-ts/P.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <P styleSize="medium">
                The all-of-government (AOG) design system alpha is a catalogue of reusable basic elements, components and patterns for building websites and applications, along with guidance on how and when to use them.</P>
        </ExampleSection>
    </Example>);

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#root';
  const root = document.querySelector(selector);
  if (!root) {
    console.error("Couldn't find app mount point ", selector);
    return;
  }
  ReactDOM.render(<PageContent />, root);
});