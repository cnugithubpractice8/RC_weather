import React from 'react';


const API_CITIES ="http://localhost:8080/weather-crawler/available-cities";
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


        if(!cities){
            return <div>Loading....</div>;
        }

        return (
            <div>
                <ul>
                {cities.map(item =>{
                    return <li key={item}>{item}</li>;
                })}
                </ul>
            </div>
        );
    }
}
export default Weather