import React from 'react';
import CardsList from './components/CardsList';
import SearchBox from './components/SearchBox';
import {connect} from 'react-redux';
import {fetchRobots} from './redux/actions'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
 }

  componentDidMount() {
    this.props.dispatch(fetchRobots())
  }

  render() {
    const {searchText,robots} = this.props;
    const filterRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
      <div className="tc">
        <SearchBox />
        <CardsList robots = {filterRobots} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    robots: state.robots
  }
}

export default connect(mapStateToProps)(App);
