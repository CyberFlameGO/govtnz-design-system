// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

// export const useMobileMenuContext = (): MobileMenuContextValue => {
//   const value = React.useContext(MobileMenuContext);
//   if (!value) throw Error(`Mobile menu used outside context`);
//   return value;
// };

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Fixed-width text input" {...onChangeGenerator({})}>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="30" label="30 character width" hint="Fits a short sentence answer or a long address line." name="anyNameWidth30" id="anyId3" maxLength={30} hintId="anyHintId3" {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock type="email" width="20" label="20 character width" hint="Fits an email address." name="anyNameWidth20" id="anyId4" hintId="anyHintId4" maxLength={20} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="10" label="10 character width" hint="Fits a name." name="anyNameWidth10" id="anyId5" hintId="anyHintId5" maxLength={10} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="5" label="5 character width" hint="Fits a post code." name="anyNameWidth5" id="anyId6" hintId="anyHintId6" maxLength={5} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="4" label="4 character width" hint="Fits a 4-digit group of a credit card number." name="anyNameWidth4" id="anyId7" hintId="anyHintId7" maxLength={4} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="3" label="3 character width" hint="Fits a prefix for a mobile number." name="anyNameWidth3" id="anyId8" hintId="anyHintId8" maxLength={3} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <InputBlock width="2" label="2 character width" hint="Fits the 2-digit part of a bank account number." name="anyNameWidth2" id="anyId9" hintId="anyHintId9" maxLength={2} {...onChangeGenerator({})}></InputBlock>
        </ExampleSection>
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
        {value => {
          const Component = props.Component;
          const newProps = {
            ...props,
            isOpen: value.isOpen.toString(),
            onClick: () => {
              console.log('click handler!');
              value.setIsOpen(!value.isOpen);
            },
            children: React.Children.map(
              props.children,
              (child: React.ReactChild, index: number) => {
                console.log({ child });
                const props = {
                  onClick: (e: React.MouseEvent<HTMLElement>) => {
                    console.log('click handler:', index);
                    e.preventDefault();
                    that.setActiveIndex(index);
                  },
                };

                if (index === activeIndex) {
                  console.log('is current page', index, activeIndex);
                  props['ariaCurrent'] = 'page';
                } else {
                  props['ariaCurrent'] = undefined;
                  console.log('is NOT current page', index, activeIndex);
                }

                const newChild = React.cloneElement(child, props);

                return newChild;
              }
            ),
          };
          console.log('Wrapped mainnav component being given', newProps);
          return <Component {...newProps} />;
        }}
      </MobileMenuContext.Consumer>
    );
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
      