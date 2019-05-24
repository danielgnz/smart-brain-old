import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import Navigation from '../components/Navigation';
import ImageLinkForm from '../components/ImageLinkForm';
import Rank from '../components/Rank';
import FaceRecognition from '../components/FaceRecognition';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3b3581dd0c09438ca85b5bb87d41cb81'
});

class App extends Component {
  constructor(){
    super()
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleDetectClick = this.handleDetectClick.bind(this);
    this.state = {
      route: 'signin',
      input: '',
      url: '',
      isSignedIn: false,
      box: {}
    };
   }

  calculateFaceLocation(response){
    const data = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
        leftCol: data.left_col * width,
        topRow: data.top_row * height,
        bottomRow: height - (data.bottom_row * height),
        rightCol: width - (data.right_col * width)
      }
  }

  displayFaceBox(box){
    this.setState({
      box: box
    });
  }

  handleDetectClick(){
    this.setState({
      url: this.state.input
    });
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => {
      console.log(err);
    });
  }

  onInputChange(e){
      this.setState({
        input: e.target.value
      });
  }

   onRouteChange(route){
      if(route === 'home'){
        this.setState({
          route: 'home',
          isSignedIn: true
        });
      }
      else if(route === 'signin'){
        this.setState({
        route: 'signin',
        isSignedIn: false
        });
      }
      else {
        this.setState({
        route: 'register',
        isSignedIn: false
        });
      }
   }

  render(){
    const { url, route, isSignedIn, box } = this.state;

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} currentRoute={route} />
        {
          isSignedIn
          ? <div>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonClick={this.handleDetectClick}/>
              <FaceRecognition imageUrl={url} box={box} />
            </div>
          :
          (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }

}

export default App;
