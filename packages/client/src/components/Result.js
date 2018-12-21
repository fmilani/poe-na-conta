import React from 'react';

const formatNumber = (
  value = 0,
  precision = 0,
  sectionDelimiter = '.',
  decimalDelimiter = ',',
) => {
  var re = '\\d(?=(\\d{3})+' + (precision > 0 ? '\\D' : '$') + ')',
    num = value.toFixed(precision);

  return num
    .replace('.', decimalDelimiter)
    .replace(new RegExp(re, 'g'), '$&' + sectionDelimiter);
};

const formatMoney = value => `R$ ${formatNumber(value)}`;

const formatDistance = value => `${formatNumber(value)} KM`;

const detailsValueStyle = { float: 'right' };
const Result = ({
  price,
  details: { distance, duration, kmPrice, tollPrice },
  showDetails = false,
  onShowDetailsClick = () => {},
}) => (
  <div>
    <span
      style={{
        display: 'block',
        marginTop: 20,
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      {formatMoney(price)}
    </span>
    <a
      style={{
        display: 'inline-block',
        textDecoration: 'underline',
        cursor: 'pointer',
        padding: 10,
      }}
      onClick={onShowDetailsClick}
    >
      {showDetails ? 'Ocultar detalhes' : 'Mostrar detalhes'}
    </a>
    {showDetails ? (
      <div
        style={{
          border: '1px solid',
          borderLeft: 'none',
          borderRight: 'none',
          padding: '0 10px',
          textAlign: 'left',
        }}
      >
        <p>
          Distância total:{' '}
          <span style={detailsValueStyle}>{formatDistance(distance)}</span>
        </p>
        <p>
          Tempo: <span style={detailsValueStyle}>{duration}</span>
        </p>
        <p>
          Preço KM:{' '}
          <span style={detailsValueStyle}>{formatMoney(kmPrice)}</span>
        </p>
        <p>
          Preço pedágios:{' '}
          <span style={detailsValueStyle}>{formatMoney(tollPrice)}</span>
        </p>
      </div>
    ) : null}
  </div>
);

export default Result;
