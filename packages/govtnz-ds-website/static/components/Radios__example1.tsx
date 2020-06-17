// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock';import H1 from '@govtnz/ds/build/react-ts/H1';import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: Stacked radio buttons" {...onChangeGenerator({})}>
        <FieldsetBlock legend={<H1 styleSize="large" id="whereLiveTitle">Where do you live?</H1>} {...onChangeGenerator({})}>
            <RadioBlock label="North Island" id="anyRadioId3334" name="where" value="north" labelId="labelId3" {...onChangeGenerator({"value":"north"})}></RadioBlock>
            <RadioBlock label="South Island" id="anyRadioId42344" name="where" value="south" labelId="labelId4" {...onChangeGenerator({"value":"south"})}></RadioBlock>
            <RadioBlock label="Stewart Island" id="anyRadioId5234" name="where" value="stewart" labelId="labelId5" {...onChangeGenerator({"value":"stewart"})}></RadioBlock>
            <RadioBlock label="Chatham Islands" id="anyRadioId6234" name="where" value="chatham" labelId="labelId6" {...onChangeGenerator({"value":"chatham"})}></RadioBlock>
        </FieldsetBlock>
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
    const { isChecked } = this.state;

    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { mode, level, Component } = this.props;
    const { isChecked, id } = this.state;

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
      