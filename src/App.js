import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import LocationForm from "./components/LocationForm/LocationForm.js";
import LocationInfo from "./components/LocationInfo/LocationInfo.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: null,
      errorMessage: null,
    };
  }

  fetchCoordinates = async (location) => {
    try {
      const response = await axios.get("https://us1.locationiq.com/v1/search", {
        params: {
          key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
          q: location,
          format: "json",
        },
      });
      const data = response.data[0];
      console.log(data);
      this.setState({ locationData: data, errorMessage: null });
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      this.setState({
        errorMessage:
          "Unable to fetch coordinates. Please try again with a different location.",
      });
    }
  };

  render() {
    const { locationData, errorMessage } = this.state;
    return (
      <div className="App">
        <Container>
          <LocationForm onSearch={this.fetchCoordinates} />
          {errorMessage && (
            <div className="alert alert-danger mt-3">{errorMessage}</div>
          )}
          <LocationInfo locationData={locationData} />
        </Container>
      </div>
    );
  }
}

export default App;
// import "./App.css";
// import LocationForm from "./components/LocationForm/LocationForm.js";
// import LocationInfo from './components/LocationInfo/LocationInfo.js';
// import React, { useState } from "react";
// import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container'; 

// function App() {
//   const [locationData, setLocationData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);


//   async function fetchCoordinates(location) {
//     try {
//       const response = await axios.get('https://us1.locationiq.com/v1/search', {
//         params: {
//           key: process.env.REACT_APP_LOCATIONIQ_API_KEY,
//           q: location,
//           format: 'json'
//         }
//       });
//       const data = response.data[0];
//       console.log(data);
//       setLocationData(data);
//       setErrorMessage(null);
//     } catch (error) {
//       console.error('Error fetching coordinates:', error);
//       setErrorMessage('Unable to fetch coordinates. Please try again with a different location.');
//     }
//   }

//   return (
//     <div className='App'>
//       <Container>
//         <LocationForm onSearch={fetchCoordinates} />
//         {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//         <LocationInfo locationData={locationData} />
//       </Container>
//     </div>
//   );
  
// }

// export default App;