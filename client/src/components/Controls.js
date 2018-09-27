import React, { Component } from 'react'

export default class Controls extends Component {

  //
  // <div className='sidebar'>
  //   <div className='switcher play--switcher'>
  //     <b>Autoplay</b>
  //     <a className='play' onClick={() => { this.props.setPlay(true) }}>
  //         Play
  //     </a>
  //     <a className='stop' onClick={() => { this.props.setPlay(false) }}>
  //         Stop
  //     </a>
  //   </div>
  //   <div className='switcher view--switcher'>
  //     <b>Display mode</b>
  //     <div className='inner'>
  //       <a className={this.props.spherize === true ? 'view-selected sphere' : 'sphere'} onClick={() => { this.props.setSphereView(true) }}>Sphere</a>
  //       <a className={this.props.spherize === false ? 'view-selected normal' : 'normal'} onClick={() => { this.props.setSphereView(false) }}>Graph</a>
  //     </div>
  //   </div>
  // </div>

  //
  // <div className="card-body">
  //   <div className='commit--switcher'>
  //     <a onClick={this.props.goToPrev} className='prev' title='Previous commit'>Previous<em className='icon-arrow-down' /></a>
  //     <a onClick={this.props.goToNext} className='next' title='Next commit'>Next<em className='icon-arrow-up' /></a>
  //   </div>
  // </div>

  render () {
    const playpause = (this.props.state.play) ? <button onClick={() => { this.props.setPlay(false) }} className="playpause border-0 bg-transparent"><span className="icon-control-pause text-secondary"></span></button> : <button onClick={() => { this.props.setPlay(true) }} className="playpause border-0 bg-transparent"><span className="icon-control-play text-secondary"></span></button>
    //console.log(this.props.state.play);
    return (
      <div className="slider">
        <div className="text-center d-block d-md-inline-block">{playpause}</div>
        <button onClick={this.props.goToPrev} className="prev border-0 bg-transparent"><span className="icon-control-rewind text-secondary"></span></button>
        {this.props.children}
      </div>
    )
  }
}
