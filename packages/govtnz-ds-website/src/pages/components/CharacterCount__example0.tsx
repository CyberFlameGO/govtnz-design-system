// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import CharacterCountWithCustomRows from '@govtnz/ds/build/react-ts/CharacterCountWithCustomRows.tsx';
import '@govtnz/ds/build/css/CharacterCountWithCustomRows.css';

import IframePage from '../../components/IframePage';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import onChangeGenerator from '../../commons/onChangeGenerator';
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <CharacterCountWithCustomRows {...onChangeGenerator(CharacterCountWithCustomRows)} />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Example of Character Count"}
      id={"iframe_componentsCharacterCount0"}
      parentUrl={"../CharacterCount"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
