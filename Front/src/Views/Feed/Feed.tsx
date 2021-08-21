import { Component } from 'react';
import Section from '../../Components/Section/Section';
import Navbar from '../../Components/Navbar/Navbar';
import './Feed.css';

const MockCategories: Array<IPropSection> = [
  {
    title: "Programação",
    cards: [
      { title: "Aulas de python", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", creationDate: new Date() },
      { title: "Aulas de python", description: "Dou aulas de Python", creationDate: new Date() },
      { title: "Aulas de python", description: "Dou aulas de Python", creationDate: new Date() },
    ]
  },
  {
    title: "Cálculo",
    cards: [
      { title: "Aulas de python", description: "Dou aulas de Python", creationDate: new Date() },
    ]
  }
]

class Feed extends Component {

  render() {

    const Sections: any = () => MockCategories.map((category: IPropSection) => <Section {...category} />)

    return (
      <div className="Feed">
        <Navbar />
        <div className="FeedSections">
          <Sections />
        </div>
      </div>
    );
  }
}

export default Feed;