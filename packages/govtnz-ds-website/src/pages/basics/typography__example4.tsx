// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <P styleSize="large">
                Design and build fast, accessible websites backed by user research, so New Zealanders can easily use government services online.</P>
        </ExampleSection>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Large size for lead paragraph"}
      id={"iframe_basicstypography4"}
      parentUrl={"../typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
