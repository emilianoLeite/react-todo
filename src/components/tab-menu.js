import React, { Component } from "react";
import PropTypes from "prop-types";

export class TabMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: 0 };
    this.classesFor = this.classesFor.bind(this);
  }

  classesFor(menuItem) {
    if (this.state.currentTab === menuItem) {
      return "menu-item active";
    } else {
      return "menu-item";
    }
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    return (<div>
      <div className="filter-menu">
        {
          children.map((C, index) => {
            return {
              ...C, props: {
                ...C.props,
                onClick: () => { this.setState({ currentTab: index }); },
                className: this.classesFor(index)
              }
            };
          })
        }
      </div>
      {children[this.state.currentTab].props.render()}
    </div>);
  }
}


export class Tab extends Component {
  render() { return (
    <div className={this.props.className} onClick={this.props.onClick}>
      {this.props.name}
    </div>
  ); }
}

TabMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

Tab.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  render: PropTypes.func
};
