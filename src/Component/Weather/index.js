import React from 'react';
import { Switch, Route} from 'react-router';
import './weather.css';
import hazeimage from './haze.jpg';
import clearimage from './clear.JPG';
import cloudimage from './cloud.JPG';
import fogimage from './fog.jpg';
import rainimage from './rain.jpg';
import mistimage from './mist.jpg';
const API_CITIES ="http://localhost:8080/weather-crawler/available-cities";
const API_WEATHER = 'http://localhost:8080/weather-crawler/current-weathers/by-city-name';


class Weather extends React.Component{
    state = {
            cities : null
        };

    async componentDidMount(){
      const city_list = await fetch(API_CITIES)
        .then(res => res.json())
        .then(data=>data);

      console.log(city_list);
       this.setState({
       cities: city_list
       });
    }


    render(){
        //const foo = this.state.foo;
        const { cities } = this.state;
        const { match } = this.props;

        if(!cities){
            return <div>Loading....</div>;
        }

        return (
            <div>
               <Switch>
                         <Route path={`${match.path}/:cityId`} component={SelectedWeather} />
                         <Route exact path={match.path} render={ ()=> cities.map(item => { return <p> <a class="cityName" href={match.path+"/"+item}>{item}</a></p>;}) } />} />
                       </Switch>
            </div>
        );
    }
}

class SelectedWeather extends React.Component {
    state = {
      weather: null
    };

    async componentDidMount() {
      const { cityId } = await this.props.match.params;
      const api = `${API_WEATHER}/${cityId}`;

      const weather = await fetch(api)
        .then(res => res.json())
        .then(data => data);

      this.setState({
        weather
      });
    }

    render() {
      const { cityId } = this.props.match.params;

      const { weather } = this.state;

      if (!weather) {
      return <div>Loading...</div>;
      }
      var weatherimage;
      var comment ;
      const celsius = (weather.main.temp - 273.15).toFixed(2);
      const weatherMain = weather.weather[0].main;
      const iconId = weather.weather[0].id;
      if(weatherMain=="Haze"){
         weatherimage=hazeimage;
      }
      else if( weatherMain=="Clear"){
            weatherimage=clearimage;
           }

       else if( weatherMain=="Clouds"){
       weatherimage=cloudimage;
       }
       else if( weatherMain=="Fog"){
              weatherimage=fogimage;
              }
       else if( weatherMain=="Rain"){
             weatherimage=rainimage;
       }
       else if( weatherMain=="Mist"){
             weatherimage=mistimage;
       }

       if(celsius<0){
               comment = <div> 엄청 추운 날씨입니다. 꽁꽁 싸메고 가세요~!</div>;
             }
             else if (celsius<10){
               comment = <div> 적당히 추운 날씨네요. 두꺼운 외투 하나 챙기시길~ </div>;
             }
             else if(celsius<20){
               comment = <div> 선선한 날씨네요. 가디건 챙기시는거 추천드립니다~</div>;
             }
             else if(celsius<30){
               comment = <div> 날씨가 점점 더워지네요.......</div>;
               }
             else {
                       comment = <div> 너무 더운 날씨...... 집이 최고...</div>;
                 }
      return (

        <div className="weather-today">
          <h2 className="weather-city">{cityId}</h2>

          <div className="weather-today-meta">
            <h3 className="weather-main">{weatherMain}</h3>
            <div className="weather-temp">{celsius}°</div>
            {comment}
          </div>
            <img src ={weatherimage} alt="해당 날씨는 사진이 없습니다...ㅜㅜ"/>
        </div>

      );
    }
}
export default Weather