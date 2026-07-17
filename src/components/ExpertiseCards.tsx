import React from 'react';
import { useColorTheme } from '../context/ColorThemeContext';
import { useInteractiveCardGrid } from '../hooks/useInteractiveCardGrid';
import '../styles/ExpertiseCards.css';

const cards = [
  {
    title: 'Full-Stack',
    description:
      'Senior full-stack engineer with diverse product experience across multiple industries and domains.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <polygon points='12 2 2 7 12 12 22 7 12 2' />
        <polyline points='2 17 12 22 22 17' />
        <polyline points='2 12 12 17 22 12' />
      </svg>
    ),
  },
  {
    title: 'Backend',
    description:
      'Classical Computer Science foundation with backend expertise in Java, Python, and .NET, building scalable, production-ready systems across diverse industries.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <ellipse cx='12' cy='5' rx='10' ry='3' />
        <path d='M2 5V19A10 3 0 0 0 22 19V5' />
        <path d='M2 12A10 3 0 0 0 22 12' />
      </svg>
    ),
  },
  {
    title: 'Frontend',
    description:
      'Specialist in frontend application development, crafting performant and polished user experiences.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect width='20' height='14' x='2' y='3' rx='2' />
        <line x1='8' x2='16' y1='21' y2='21' />
        <line x1='12' x2='12' y1='17' y2='21' />
      </svg>
    ),
  },
  {
    title: 'API Architect',
    description:
      'Experienced in designing and leading multi-region, highly available API solutions at scale.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect width='20' height='8' x='2' y='2' rx='2' ry='2' />
        <rect width='20' height='8' x='2' y='14' rx='2' ry='2' />
        <line x1='6' x2='6.01' y1='6' y2='6' />
        <line x1='6' x2='6.01' y1='18' y2='18' />
      </svg>
    ),
  },
  {
    title: 'Cloud Platforms',
    description: 'Proficient in software architecture for cloud platforms and distributed systems.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z' />
      </svg>
    ),
  },
];

const ExpertiseCards: React.FC = () => {
  const { isDarkMode } = useColorTheme();
  const { listRef } = useInteractiveCardGrid();

  return (
    <div className='expertise-cards' data-dark={isDarkMode}>
      <ul ref={listRef} style={{ gridTemplateColumns: Array(cards.length).fill('1fr').join(' ') }}>
        {cards.map((card) => (
          <li key={card.title} data-active='false'>
            <article>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.icon}
              <img src='/apple-icon.png' alt='' />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseCards;
