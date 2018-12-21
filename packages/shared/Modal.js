import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal" onClick={this.props.onCloseRequest}>
        <div
          style={{
            padding: 10,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            overflow: 'auto',
            border: '4px solid black',
            boxSizing: 'border-box',
            ...this.props.style,
          }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          {this.props.children}
        </div>
      </div>,
      this.el,
    );
  }
}
