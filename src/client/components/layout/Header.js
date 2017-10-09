import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {connect} from 'react-redux';
import {getVideoCategories, changeVideoCategory} from "../../actions/videos";


class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropDownValue: 0,
      dropdownValue: 'Select Category',
      dropdownOpen: false,
      categories: []
    };
  }

  toggle(e) {
    e.preventDefault();
    const selectedValue = e.currentTarget.value;
    const selectedText = e.currentTarget.textContent;

    if (!!selectedValue && selectedValue !== this.state.dropdownValue) {
      this.props.changeVideoCategory(selectedValue).then(() => {
        this.setState({
          dropDownId: selectedValue,
          dropdownValue: selectedText || this.state.selectedText,
          dropdownOpen: !this.state.dropdownOpen
        });
      });
    } else {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

  }

  componentDidMount() {
    const buildCategories = [];
    buildCategories.push(
      <DropdownItem value={0} key={0}>All</DropdownItem>
    );

    getVideoCategories()
      .then((categories) => {
        categories.map((category) => {
          buildCategories.push(
            <DropdownItem value={category.id} key={category.id}>{category.snippet.title}</DropdownItem>
          )
        });

        this.setState({
          categories: buildCategories
        })
      })
  }

  render() {
    const {dropdownValue} = this.state;
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-primary fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Video
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {dropdownValue}
            </DropdownToggle>
            <DropdownMenu children={this.state.categories}>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>)
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
};


export default connect(null, {getVideoCategories, changeVideoCategory})(Header);