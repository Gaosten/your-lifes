import React from 'react';
import './index.css';
import {Button} from 'antd';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { data } from '../data/tree.js'

export default class App3 extends React.PureComponent {

  state = {num: 0,
  data:data};

  onToggleLeft = () => {
    
    this.setState({data:this.state.data.left})
    this.setState({num: (this.state.num + 1)});
  }

  onToggleRight = () => {
    
    this.setState({data:this.state.data.right})
    this.setState({num: (this.state.num + 1)});
  }


  render() {
    const {num} = this.state;
    return (
      <div className={'container'}>
        <TransitionGroup className={'square-wrapper'}>
          <CSSTransition
            key={num}
            timeout={500}
            classNames={'fade'}
          >
            <div className={'square'}>{this.state.data.root}</div>
          </CSSTransition>
        </TransitionGroup>
      
        
        {
          this.state.data.leftText === ''?
          <div className='end'>The End</div>
          :
          <div className='buttons'>
          <Button onClick={this.onToggleLeft}>{this.state.data.leftText}</Button>
          <Button onClick={this.onToggleRight}>{this.state.data.rightText}</Button>
          </div>
        }
       
  
      </div>
    );
  }
}