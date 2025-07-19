import React from 'react';

function Star({ fillPercent = 100, id }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cd2c2e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`halfGradient-${id}`}>
          <stop offset={`${fillPercent}%`} stopColor="#cd2c2e" />
          <stop offset={`${fillPercent}%`} stopColor="#e4e5e9" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#halfGradient-${id})`}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
      />
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        fill="none"
      />
    </svg>
  );
}

export default function StarRating({ rating, uniqueId }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    let fillPercent = 0;
    if (rating >= i + 1) {
      fillPercent = 100;
    } else if (rating > i && rating < i + 1) {
      fillPercent = (rating - i) * 100;
    }

    // On utilise un identifiant vraiment unique pour chaque étoile
    const id = `${uniqueId}-${i}`;
    stars.push(<Star key={i} id={id} fillPercent={fillPercent} />);
  }

  return <div>{stars}</div>;
}
