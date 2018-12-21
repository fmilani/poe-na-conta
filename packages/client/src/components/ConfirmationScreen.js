import React, { Component } from 'react';
import FirebaseApi from '../api/FirebaseApi';
import Modal from 'shared/Modal';
import Input from 'shared/Input';
import Button from 'shared/Button';

export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.idInputRef = React.createRef();
    this.state = { idValue: '', pinValue: '' };
  }

  componentDidMount() {
    this.idInputRef.current.focus();
  }

  render() {
    return (
      <Modal
        onCloseRequest={this.props.onCloseRequest}
        style={{ textAlign: 'center' }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '2rem' }}>
          <strong>{`Total: ${this.props.total.toFixed(2)}`}</strong>
          <hr />
        </div>
        <div>Qual o seu id?</div>
        <div>
          <Input
            innerRef={this.idInputRef}
            type="number"
            value={this.state.idValue}
            onChange={e => {
              e.persist();
              this.setState(prevState => ({
                idValue:
                  e.target.value.length > 2
                    ? prevState.idValue
                    : e.target.value,
              }));
            }}
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              width: '7rem',
              letterSpacing: '1rem',
              textIndent: '0.5rem',
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>Insira seu PIN</div>
        <div>
          <Input
            disabled={this.state.idValue.length === 0}
            maxLength={4}
            type="password"
            value={this.state.pinValue}
            onChange={e => this.setState({ pinValue: e.target.value })}
            style={{
              textAlign: 'center',
              fontSize: '2rem',
              width: '7rem',
              letterSpacing: '1rem',
              textIndent: '0.5rem',
            }}
          />
        </div>
        <div>
          <Button
            style={{ marginTop: '2rem' }}
            onClick={() => {
              this.props.onCancelClick();
            }}
          >
            Cancelar
          </Button>
        </div>
        <div>
          <Button
            disabled={
              this.state.idValue === 0 || this.state.pinValue.length < 4
            }
            primary
            style={{ marginTop: '0.5rem' }}
            onClick={async () => {
              const response = await FirebaseApi.chargeUser(
                this.state.idValue,
                this.state.pinValue,
                this.props.total,
              );
              this.props.onConfirmClick(response);
            }}
          >
            Confirmar
          </Button>
        </div>
      </Modal>
    );
  }
}
