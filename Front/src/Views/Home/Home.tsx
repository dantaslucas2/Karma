import React, { Component} from 'react';
import Slider from '../../Components/SlideHome/SlideHome';
import imagesHome from '../../Assets/Home/ImagesHome.json'
import Redirect from '../../Components/Redirect/Redirect';
import Logo from '../../Components/Logo/Logo';


import "./Home.css";

type Slide = {
  id: string;
  image: string;
};

class Home extends Component<any,any>{

    constructor(props: []) {
        super(props);
        this.state = {
            slides:imagesHome,
            visibleItemsNumber:3
        };
    }

    render(){
        return (
            <div className="BodyHome">
                <Logo width="20vw" heigth="25vh"/>

                <Slider slides={this.state.slides} visibleItemsNumber={this.state.visibleItemsNumber}>
                    {(slide: Slide) => (
                    <img
                        id={slide.id}
                        src={slide.image}
                        alt="nature landscape"
                        className="image"
                    />
                    )}
                </Slider>
                <div className="ButtonsHome">
                        <Redirect label="Login" url="/Login"/>
                        <Redirect label="Cadastre-se" url="/cadastre-se"/>
                </div>
            </div>
        );
    }
}

export default Home;