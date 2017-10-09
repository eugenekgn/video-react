import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoCategories, changeVideoCategory } from '../../actions/videos';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.createDropdownItem = this.createDropdownItem.bind(this);

    this.state = {
      dropdownValue: 'Select Category',
      dropdownOpen: false,
      categories: [],
    };
  }

  componentDidMount() {
    const buildCategories = [];
    buildCategories.push(this.createDropdownItem({
      id: 0,
      snippet: {
        title: 'All',
      },
    }));

    getVideoCategories()
      .then((categories) => {
        categories.map(category =>
          buildCategories.push(this.createDropdownItem(category)));

        this.setState({
          categories: buildCategories,
        });
      });
  }

  createDropdownItem(category) {
    return (<DropdownItem value={category.id} key={category.id}>{category.snippet.title}</DropdownItem>);
  }

  toggle(e) {
    e.preventDefault();
    const selectedValue = e.currentTarget.value;
    const dropdownValue = e.currentTarget.textContent;

    if (!!selectedValue && selectedValue !== this.state.dropdownValue) {
      this.props.changeVideoCategory(selectedValue).then(() => {
        this.setState({
          dropdownValue: dropdownValue || this.state.dropdownValue,
          dropdownOpen: !this.state.dropdownOpen,
        });
      });
    } else {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
      });
    }
  }


  render() {
    const { dropdownValue, categories } = this.state;
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-primary fixed-top">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">Video</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {dropdownValue}
            </DropdownToggle>
            <DropdownMenu children={categories} />
          </Dropdown>
        </div>
      </nav>);
  }
}

Header.propTypes = {
  changeVideoCategory: PropTypes.func.isRequired,
};


export default connect(null, { getVideoCategories, changeVideoCategory })(Header);
