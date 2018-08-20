import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './moviedata.js';
import './Search.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    movies: ['Mean Girls',
            'Hackers',
            'The Grey',
            'Sunshine',
            'Ex Machina'],
      currentMovie: [],
    };
  }

  // search(){

  // }

  addMovie(movieTitle) {
    var newMovie = {
      Title: movieTitle
    };
    var newState = this.state.movies.concat(newMovie);
    this.setState({
      movies: newState,
      currentMovie: newState
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie List</h1>
        </header>
          <Search movies={this.state.movies}/>
            <Add submit={this.addMovie.bind(this)}/>
            <MovieList movies={this.state.movies}/>
           <MovieListEntry movie={this.state.currentMovie}/>
       </div>
    );  
  }
}

var MovieList = ({movies}) => (
  <div className="movie-list">
    {movies.map((movie) =>
      <MovieListEntry
        key={movies.title}
        movie={movie}
      />
    )}
  </div>
);

var MovieListEntry = ({movie}) => (
  <div className="movie-list-entry media">
    <div className="media-left media-middle">
    </div>
    <div className="media-body">
      <div className="movie-list-entry-title">{movie}</div>
    </div>
  </div>
);


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  searchMovieResults(event) {
    this.setState({
      input: event.target.value
    }, function() {
      this.props.searchMovie(this.state.input);
    });
  }

  render() {
    return (
      <div className="search">
        <form id="searchForm" >
          <input className="input" type="text" placeholder="Search for a movie" onChange={this.searchMovieResults.bind(this)} />
        </form>
        <button>Search</button>
      </div>
    );
  }
};

// class Search extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleSearchChange(e) {
//     this.props.handleinputChange(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input
//           className="form-control"
//           type="text"
//           value={this.state.value}
//           onChange={(e) => handleinputChange(e.target.value)}
//         />
//         <button className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>Search
//         </button>
//       </div>
//     );
//   }
// }

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }
   submitHandler(event) {
    this.setState({
      input: document.getElementById('newMovie').value
    }, function() {
      this.props.submit(this.state.input);
      document.getElementById('newMovie').value = '';
    });
  }

addMovie(movieTitle) {
    var newMovie = {
      Title: movieTitle
    };
    var newState = this.state.movies.concat(newMovie);
    this.setState({
      movies: newState,
      currentMovie: newState
    });
  }

  render() {
    return (
      <div className="add">
        <form id="addForm" onSubmit={this.submitHandler.bind(this)}>
          <input id="newMovie" type='text' placeholder="Add a Movie"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

  // addMovie(movieTitle) {
  //   var newMovie = {
  //     Title: movieTitle
  //   };
  //   var newState = this.state.movies.concat(newMovie);
  //   this.setState({
  //     movies: newState,
  //     currentMovie: newState
  //   });
  // }
// }

export default App;

// onChange={this.handleInputChange.bind(this)}