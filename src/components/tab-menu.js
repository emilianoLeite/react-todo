import React, { Component } from "react";
import PropTypes from "prop-types";

export class TabMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { currentTab: this.children.findIndex(child => child.props.active) };

    this.classesFor = this.classesFor.bind(this);
  }

  classesFor(menuItem) {
    if (this.state.currentTab === menuItem) {
      return "menu-item active";
    } else {
      return "menu-item";
    }
  }

  get children() {
    return React.Children.toArray(this.props.children);
  }

  render() {
    return (<div>
      <div className="filter-menu">
        {
          this.children.map((C, index) => {
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
      {this.children[this.state.currentTab].props.render()}
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
