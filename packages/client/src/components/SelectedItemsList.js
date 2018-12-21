import React from 'react';

export default ({ items, onRemoveClick = () => {} }) => (
  <div
    style={{
      display: 'grid',
      gridRowGap: '1.5rem',
      padding: '0 0.5rem',
      fontSize: '1rem',
    }}
  >
    {items.map(item => (
      <div
        key={item.id}
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 10% 20% 30%',
        }}
      >
        <div style={{ textAlign: 'left' }}>{item.description}</div>
        <div style={{ textAlign: 'left' }}>{`x${item.quantity}`}</div>
        <div style={{ textAlign: 'right' }}>
          {(item.value * item.quantity).toFixed(2)}
        </div>
        <div
          style={{
            textAlign: 'right',
            fontStyle: 'italic',
            textDecoration: 'underline',
          }}
          onClick={() => onRemoveClick(item.id)}
        >
          Remover
        </div>
      </div>
    ))}
  </div>
);
