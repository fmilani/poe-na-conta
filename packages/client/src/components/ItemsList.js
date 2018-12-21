import React from 'react';
import FirebaseApi from '../api/FirebaseApi';

const ItemsList = ({ items, onItemClick = () => {} }) => (
  <div style={{ display: 'grid', gridRowGap: '1rem' }}>
    {Object.keys(items).map(id => (
      <div
        key={id}
        style={{
          border: '2px solid',
          display: 'grid',
          padding: '1.5rem',
          gridTemplateColumns: 'auto auto',
        }}
        onClick={() => {
          onItemClick(id, items[id]);
        }}
      >
        <div
          style={{
            textAlign: 'left',
          }}
        >
          {items[id].description}
        </div>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          {items[id].value.toFixed(2)}
        </div>
      </div>
    ))}
  </div>
);

class ItemsListContainer extends React.Component {
  state = { items: [] };
  componentDidMount() {
    FirebaseApi.getItems(items => {
      this.setState({ items });
    });
  }

  render() {
    return <ItemsList items={this.state.items} {...this.props} />;
  }
}

export default ItemsListContainer;
