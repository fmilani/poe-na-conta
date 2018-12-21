import React, { Component } from 'react';
import Button from 'shared/Button';
import Header from 'shared/Header';
import ItemsList from './components/ItemsList';
import SelectedItemsList from './components/SelectedItemsList';
import ConfirmationScreen from './components/ConfirmationScreen';

class App extends Component {
  state = {
    selectedItems: [],
    showConfirmationScreen: false,
  };

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto',
          backgroundColor: 'white',
          height: '100vh',
        }}
      >
        <Header title="Põe na Conta" style={{ marginBottom: '1rem' }} />
        <ItemsList
          onItemClick={(id, selectedItem) =>
            this.setState(prevState => {
              const nextStateItems = prevState.selectedItems;
              let found = false;
              nextStateItems.forEach(item => {
                if (item.id === id) {
                  item.quantity++;
                  found = true;
                }
              });
              if (!found) {
                nextStateItems.push({
                  id,
                  ...selectedItem,
                  quantity: 1,
                });
              }

              return {
                selectedItems: [...nextStateItems],
              };
            })
          }
        />
        <hr />
        {this.state.selectedItems.length > 0 ? (
          <SelectedItemsList
            items={this.state.selectedItems}
            onRemoveClick={id => {
              this.setState(prevState => {
                const nextStateItems = prevState.selectedItems;
                nextStateItems.forEach(item => {
                  if (item.id === id) {
                    item.quantity--;
                  }
                });
                return {
                  selectedItems: nextStateItems.filter(
                    nextStateItem => nextStateItem.quantity > 0,
                  ),
                };
              });
            }}
          />
        ) : (
          <div
            style={{
              fontSize: '0.8rem',
              fontStyle: 'italic',
              color: 'dimgray',
            }}
          >
            Selecione acima os itens para por na conta
          </div>
        )}
        <hr />
        {this.state.showConfirmationScreen ? (
          <ConfirmationScreen
            total={this.state.selectedItems.reduce(
              (accumulator, currentItem) =>
                accumulator + currentItem.value * currentItem.quantity,
              0,
            )}
            onCloseRequest={() =>
              this.setState({ showConfirmationScreen: false })
            }
            onConfirmClick={response => {
              this.setState({
                showConfirmationScreen: false,
                showFeedback: true,
                selectedItems: [],
                lastResponse: response,
              });
              setTimeout(() => {
                this.setState({ lastResponse: null });
              }, 3000);
            }}
            onCancelClick={() => {
              this.setState({
                showConfirmationScreen: false,
                showFeedback: true,
                selectedItems: [],
              });
            }}
          />
        ) : null}
        {this.state.lastResponse ? (
          <div>
            {this.state.lastResponse.success
              ? `Tudo Certo. Vc agora deve ${this.state.lastResponse.newDebt.toFixed(
                  2,
                )}`
              : 'Deu ruim'}
          </div>
        ) : null}
        {this.state.selectedItems.length > 0 ? (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              position: 'fixed',
              bottom: '1rem',
            }}
          >
            <Button
              primary
              onClick={() => {
                this.setState({ showConfirmationScreen: true });
              }}
            >
              Por na conta
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
