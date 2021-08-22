import React, { Component } from 'react'
import cx from 'classnames'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import TouchCarousel, { clamp } from '../../carousel'
import touchWithMouseHOC from './touchWithMouseHOC'
import Card from '../Card/Card'

const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function log (text) {
  console.log(text)
}

function CarouselContainer (props) {
  const { cursor, carouselState: { active, dragging }, ...rest } = props
  let current = -Math.round(cursor) % props.cards.length
  while (current < 0) {
    current += props.cards.length
  }
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget
      className={cx(
        'carousel-container',
        {
          'is-active': active,
          'is-dragging': dragging
        }
      )}
    >
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />

      <div className='carousel-pagination-wrapper'>
        <ol className='carousel-pagination'>
          {props.cards.map((_, index) => (
            <li
              key={index}
              className={current === index ? 'current' : ''}
            />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

class Car extends Component {

  constructor(props){
    super(props)
  }

  renderCard (index, modIndex) {
    return (
      <div
        key={index}
        className='carousel-card'
        onClick={() => log(`clicked card ${1 + modIndex}`)}
      >
      <Card {...this.cards[index]} />
      </div>
    )
  }

  render () {
    return (
      <React.StrictMode>
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={this.props.cards.length}
          cardPadCount={cardPadCount}
          loop={enableLoop}
          autoplay={enableAutoplay ? 2e3 : false}
          renderCard={this.renderCard}
          onRest={index => log(`rest at index ${index}`)}
          onDragStart={() => log('dragStart')}
          onDragEnd={() => log('dragEnd')}
          onDragCancel={() => log('dragCancel')}
          cards={this.props.cards}
        />
      </React.StrictMode>
    )
  }
}

export default Car;