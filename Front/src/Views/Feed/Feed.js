import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Section from '../../Components/Section/Section';
import Navbar from '../../Components/Navbar/Navbar';
import { MockCategories } from '../../data/Mock';
import logg from '../../API/Utils.js'
import './Feed.css';
import '../../Components/Container/Container.css'
import "@fontsource/lato"
import Services from '../../API/ServiceController'

class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      asset:[]
    }; 
  }

  componentDidMount(){
    this.ListService()
  }

  ListService() {
    Services.getlistService().then(res => {
      console.log(res)
      console.log("entrei")
      this.setState(prevState=> {
          prevState.asset = [res.data];
          return prevState}
      )
    })
  }
  
  render() {

    console.log(this.state.asset)
    //const Sections = () => this.state?.asset?.map((category) => <Section {...category} />)
    //const Sections: any = () => MockCategories.map((category: IPropSection) => <Section {...category} />)
    const Sections = () => MockCategories.map((category) => <Section {...category} />)
    if(!logg.isLoggeIn()){
      return <Redirect to="/login" />
    }
    return (
      <>
        <Navbar />
        <div className='Feed'>  
          <div className="Container">
            <Sections />
          </div>
        </div>
      </>
    );
  }
}

export default Feed;