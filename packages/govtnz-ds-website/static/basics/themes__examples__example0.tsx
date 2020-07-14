// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '@govtnz/ds/build/react-ts/Header';import FlexContainer from '@govtnz/ds/build/react-ts/FlexContainer';import FlexRow from '@govtnz/ds/build/react-ts/FlexRow';import FlexColumn from '@govtnz/ds/build/react-ts/FlexColumn';import DiaLogo from '@govtnz/ds/build/react-ts/DiaLogo';import MainNav from '@govtnz/ds/build/react-ts/MainNav';import MainNavLink from '@govtnz/ds/build/react-ts/MainNavLink';import H1 from '@govtnz/ds/build/react-ts/H1';import P from '@govtnz/ds/build/react-ts/P';import InputBlock from '@govtnz/ds/build/react-ts/InputBlock';import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';import TextareaBlock from '@govtnz/ds/build/react-ts/TextareaBlock';import Button from '@govtnz/ds/build/react-ts/Button';import Footer from '@govtnz/ds/build/react-ts/Footer';import FooterLinks from '@govtnz/ds/build/react-ts/FooterLinks';import FooterLink from '@govtnz/ds/build/react-ts/FooterLink';import Subfooter from '@govtnz/ds/build/react-ts/Subfooter';import NzgLogo from '@govtnz/ds/build/react-ts/NzgLogo';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Header containing a MainNav" noPadding {...onChangeGenerator({})}>
        <Header {...onChangeGenerator({})}>
            <MainNavMobileMenuContext {...onChangeGenerator({})}>
                <FlexContainer width="fluid" {...onChangeGenerator({})}>
                    <FlexRow xsVerticalAlign="middle" smVerticalAlign="middle" mdVerticalAlign="middle" lgVerticalAlign="middle" {...onChangeGenerator({})}>
                        <FlexColumn xs="8" sm="5" md="4" lg="3" {...onChangeGenerator({})}>
                            <a href="/" target="_blank" className="example-invert-logo">
                                <DiaLogo id="dia-logo" {...onChangeGenerator({})}></DiaLogo>
                            </a>
                        </FlexColumn>
                        <FlexColumn xs="4" sm="hidden" md="hidden" lg="hidden" {...onChangeGenerator({})}>
                        </FlexColumn>
                        <FlexColumn xs="12" sm="7" md="8" lg="9" {...onChangeGenerator({})}>
                            <WrappedMainNav Component={MainNav} id="menuContainer" button="Menu" {...onChangeGenerator({})}>
                                <MainNavLink href="/" ariaCurrent="page" {...onChangeGenerator({})}>Services</MainNavLink>
                                <MainNavLink href="/" {...onChangeGenerator({})}>Resources</MainNavLink>
                                <MainNavLink href="/" {...onChangeGenerator({})}>News</MainNavLink>
                                <MainNavLink href="/" {...onChangeGenerator({})}>About</MainNavLink>
                                <MainNavLink href="/" {...onChangeGenerator({})}>Contact</MainNavLink>
                            </WrappedMainNav>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </MainNavMobileMenuContext>
        </Header>
        <main role="main" id="main-content" className="main-content theme-main">
            <FlexContainer width="fixed" {...onChangeGenerator({})}>
                <FlexRow {...onChangeGenerator({})}>
                    <FlexColumn xs="12" sm="12" md="12" lg="12" {...onChangeGenerator({})}>
                        <H1 {...onChangeGenerator({})}>Contact us</H1>
                        <P {...onChangeGenerator({})}>Send a message to let us know about the issue you’re having.</P>
                        <InputBlock type="text" label="What’s your name?" name="anyName" id="anyNameId" width={20} autocomplete="name" {...onChangeGenerator({})}></InputBlock>
                        <InputBlock type="email" label="What’s your email address?" name="email" id="anyEmailId" width={20} autocomplete="email" {...onChangeGenerator({})}></InputBlock>
                        <FieldsetBlock legend="What’s your issue about?" {...onChangeGenerator({})}>
                            <RadioBlock label="Our website" id="radioIssue1" name="issueType" {...onChangeGenerator({})}></RadioBlock>
                            <RadioBlock label="Our service" id="radioIssue2" name="issueType" {...onChangeGenerator({})}></RadioBlock>
                            <RadioBlock label="Something else" id="radioIssue3" name="issueType" {...onChangeGenerator({})}></RadioBlock>
                        </FieldsetBlock>
                        <TextareaBlock label="What's your message?" id="comments" name="comments" width={20} {...onChangeGenerator({})}></TextareaBlock>
                        <Button {...onChangeGenerator({})}>Submit</Button>
                    </FlexColumn>
                </FlexRow>
            </FlexContainer>
        </main>
        <Footer {...onChangeGenerator({})}>
            <FlexContainer width="fixed" {...onChangeGenerator({})}>
                <FlexRow {...onChangeGenerator({})}>
                    <FlexColumn xs="12" sm="12" md="12" lg="12" {...onChangeGenerator({})}>
                        <FooterLinks {...onChangeGenerator({})}>
                            <FooterLink href="#" {...onChangeGenerator({})}>Contact Us</FooterLink>
                            <FooterLink href="#" {...onChangeGenerator({})}>Privacy</FooterLink>
                            <FooterLink href="#" {...onChangeGenerator({})}>Copyright</FooterLink>
                        </FooterLinks>
                    </FlexColumn>
                </FlexRow>
            </FlexContainer>
            <Subfooter {...onChangeGenerator({})}>
                <FlexContainer width="fixed" {...onChangeGenerator({})}>
                    <FlexRow xsReversed="true" smReversed="false" mdReversed="false" lgReversed="false" xsVerticalAlign="middle" smVerticalAlign="middle" mdVerticalAlign="middle" lgVerticalAlign="middle" className="example-subfooter-row" {...onChangeGenerator({})}>
                        <FlexColumn xs="12" sm="5" md="5" lg="5" className="example-subfooter-copyright" {...onChangeGenerator({})}>
                            &copy; Crown Copyright 2020
                        </FlexColumn>
                        <FlexColumn xs="12" sm="7" md="7" lg="7" xsHorizontalAlign="start" smHorizontalAlign="end" mdHorizontalAlign="end" lgHorizontalAlign="end" {...onChangeGenerator({})}>
                            <a href="https://www.govt.nz/" className="example-invert-logo">
                                <NzgLogo id="nzg-logo" {...onChangeGenerator({})}></NzgLogo>
                            </a>
                        </FlexColumn>
                    </FlexRow>
                </FlexContainer>
            </Subfooter>
        </Footer>
    </Example>);

type MainNavMobileMenuContextProps = {
  children: React.ReactNode;
};

type MainNavMobileMenuContextState = {
  isOpen: boolean;
};

type MobileMenuContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuContext = React.createContext<
  MobileMenuContextValue | undefined
>(undefined);

class MainNavMobileMenuContext extends Component<
  MainNavMobileMenuContextProps,
  MainNavMobileMenuContextState
> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.setIsOpen = this.setIsOpen.bind(this);
  }

  setIsOpen(isOpen: boolean) {
    console.log('setting context provider value to ', isOpen);
    this.setState({
      isOpen,
    });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    const value = { isOpen, setIsOpen: this.setIsOpen };

    return (
      <MobileMenuContext.Provider value={value}>
        {children}
      </MobileMenuContext.Provider>
    );
  }
}

type WrappedMainNavProps = {
  Component: React.Component;
};

type WrappedMainNavState = {
  activeIndex: number;
};

class WrappedMainNav extends React.Component<
  WrappedMainNavProps,
  WrappedMainNavState
> {
  constructor(props: WrappedMainNavProps) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.setActiveIndex = this.setActiveIndex.bind(this);
  }

  setActiveIndex(activeIndex: number) {
    this.setState({ activeIndex });
  }

  render() {
    const props = this.props;
    const { activeIndex } = this.state;

    const that = this;

    return (
      <MobileMenuContext.Consumer>
        {(value) => {
          const Component = props.Component;
          const newProps = {
            ...props,
            isOpen: value.isOpen.toString(),
            onClick: () => {
              value.setIsOpen(!value.isOpen);
            },
            children: React.Children.map(
              props.children,
              (child: React.ReactChild, index: number) => {
                const props = {
                  onClick: (e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    that.setActiveIndex(index);
                  },
                };

                if (index === activeIndex) {
                  props['ariaCurrent'] = 'page';
                } else {
                  props['ariaCurrent'] = undefined;
                }

                const newChild = React.cloneElement(child, props);

                return newChild;
              }
            ),
          };
          return <Component {...newProps} />;
        }}
      </MobileMenuContext.Consumer>
    );
  }
}

type WrappedAlertProps = {
  mode?: 'live' | 'static';
  level: string;
  Component: any;
};

type WrappedAlertState = {
  isChecked: boolean;
  id: string;
};

class WrappedAlert extends React.Component<
  WrappedAlertProps,
  WrappedAlertState
> {
  constructor(props: WrappedAlertProps) {
    super(props);
    this.state = {
      isChecked: false,
      id: `id${props.headingId.replace(/[^a-zA-Z0-9]/g, '')}`,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { mode } = this.props;
    const { isChecked, id } = this.state;

    const newIsChecked = !isChecked;

    this.setState({
      isChecked: newIsChecked,
    });

    console.log({ id, mode, newIsChecked });

    if (id && mode === 'live' && newIsChecked === true) {
      setTimeout(() => {
        const target = document.getElementById(id);
        const targetChildren = [...target.childNodes];

        const targetDiv = targetChildren.filter(
          (elm) => elm.nodeName.toLowerCase() === 'div'
        )[0];

        if (targetDiv) {
          targetDiv.focus();
        }
      }, 100);
    }
  }

  render() {
    const { mode, level, Component } = this.props;
    const { isChecked, id } = this.state;

    const keyId = `${id}_alert`;

    if (mode === 'live') {
      return (
        <Fragment>
          <button
            type="button"
            aria-controls={id}
            aria-expanded={isChecked}
            onClick={this.toggle}
            className="g-button g-button--secondary"
          >
            Toggle live {level} alert
          </button>
          <div id={id}>
            {isChecked ? (
              <Component key={keyId} {...this.props} />
            ) : (
              <Component
                key={`${id}_alert`}
                {...this.props}
                children={undefined}
              />
            )}
          </div>
        </Fragment>
      );
    }
    return <Component {...this.props} />;
  }
}

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      