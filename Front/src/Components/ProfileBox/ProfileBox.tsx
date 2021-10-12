import { Component } from 'react';

import '../DetailedCard/DetailedCard.css';
import "@fontsource/lato";

class ProfileBox extends Component {

  render() {
    return (
      <div className="DetailedCard">
        <div className="Header">
          <p>name</p>
        </div>
        <div className="Body">
          <div className="Description">
            <p className="DescriptionTitle">
              Descrição
            </p>
            <p className="DescriptionText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus urna, porta ac vestibulum quis, interdum a neque. Etiam sit amet egestas justo, at ultricies sapien. Quisque euismod purus nisi, ut venenatis tellus euismod ut. Morbi eget rutrum eros. Nulla porta dapibus felis ac luctus. Cras dignissim sapien ut tincidunt fermentum. Fusce sed tellus at neque venenatis rutrum.
              Nullam nec lacus nec nibh rhoncus egestas vel eget mauris. Phasellus lacinia tellus congue malesuada faucibus. Maecenas faucibus dui erat, a dignissim tortor rhoncus a. Cras vel convallis nisl, eu aliquet mauris. Proin felis urna, porta quis diam sit amet, tempor pharetra arcu. Proin et risus vel tellus volutpat convallis eu vitae dolor. Proin eget urna et tortor mollis tincidunt. Vestibulum in nunc dui. Proin nec volutpat nibh. Maecenas at magna leo. Nullam maximus nunc nec quam luctus, a vehicula augue placerat. Aenean tincidunt leo nec erat pellentesque, tempus ultricies sem viverra.
            </p>
          </div>
        </div>
      </div>
      );
  }
}

export default ProfileBox;