// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

import H1 from '@govtnz/ds/build/react-ts/H1';import H2 from '@govtnz/ds/build/react-ts/H2';import H3 from '@govtnz/ds/build/react-ts/H3';import H4 from '@govtnz/ds/build/react-ts/H4';import H5 from '@govtnz/ds/build/react-ts/H5';import H6 from '@govtnz/ds/build/react-ts/H6';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Headings (Typography)" {...onChangeGenerator({})}>
        <ExampleSection {...onChangeGenerator({})}>
            <H1 styleSize="xlarge" {...onChangeGenerator({})}>g-heading-xl</H1>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <H2 styleSize="large" {...onChangeGenerator({})}>g-heading-l</H2>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <H3 styleSize="medium" {...onChangeGenerator({})}>g-heading-m</H3>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <H4 styleSize="small" {...onChangeGenerator({})}>g-heading-s</H4>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <H5 styleSize="xsmall" {...onChangeGenerator({})}>g-heading-xs</H5>
        </ExampleSection>
        <ExampleSection {...onChangeGenerator({})}>
            <H6 styleSize="xxsmall" {...onChangeGenerator({})}>g-heading-xxs</H6>
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
      isChecked: true,
      id: `id${Math.random()
        .toString()
        .replace(/[^0-9]/g, '')}`,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle');
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { mode, level, Component } = this.props;
    const { isChecked, id } = this.state;

    console.log({ Component });

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
              <Component key={`${id}_alert`} {...this.props} />
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
      