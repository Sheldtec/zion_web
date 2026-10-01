'use client';

import { useState } from 'react';

type Category = 'all' | 'academics' | 'skills' | 'community';

type Item = {
  image: string;
  alt: string;
  caption: string;
  category: Exclude<Category, 'all'>;
  /** The two span modifiers the grid uses to break up the mosaic. */
  wide?: boolean;
  tall?: boolean;
};

const FILTERS: readonly { value: Category; label: string }[] = [
  { value: 'all', label: 'All moments' },
  { value: 'academics', label: 'Academics' },
  { value: 'skills', label: 'Practical skills' },
  { value: 'community', label: 'Community' },
];

const ITEMS: readonly Item[] = [
  {
    image: '/img/hero-1-1120.webp',
    alt: 'Students carrying out a physics practical',
    caption: 'Physics practical · Senior Secondary',
    category: 'academics',
    wide: true,
    tall: true,
  },
  {
    image: '/img/g-chemistry-552.webp',
    alt: 'Students working with test tubes in the chemistry laboratory',
    caption: 'Chemistry practical',
    category: 'academics',
  },
  {
    image: '/img/trade-ict.webp',
    alt: 'Students in the ICT centre',
    caption: 'Digital learning in the ICT centre',
    category: 'skills',
  },
  {
    image: '/img/g-tailoring-276.webp',
    alt: 'Student sewing in the tailoring workshop',
    caption: 'Fashion and tailoring',
    category: 'skills',
    tall: true,
  },
  {
    image: '/img/g-sports-276.webp',
    alt: 'Pupils dressed for inter-house sports',
    caption: 'Inter-house sports',
    category: 'community',
  },
  {
    image: '/img/g-cultural-552.webp',
    alt: 'Students in traditional attire',
    caption: 'Culture and community',
    category: 'community',
    wide: true,
  },
  {
    image: '/img/g-classroom-276.webp',
    alt: 'Secondary students studying in class',
    caption: 'Focused classroom learning',
    category: 'academics',
  },
  {
    image: '/img/g-music-276.webp',
    alt: 'Students playing electronic keyboards',
    caption: 'Music room',
    category: 'community',
  },
  {
    image: '/img/g-catering-276.webp',
    alt: 'Pupils during a catering practical',
    caption: 'Catering practical',
    category: 'skills',
    wide: true,
  },
  {
    image: '/img/g-biology-276.webp',
    alt: 'Students learning during a biology practical',
    caption: 'Biology practical',
    category: 'academics',
  },
];

function itemClassName(item: Item) {
  return [
    'gallery-item',
    item.wide ? 'gallery-item--wide' : null,
    item.tall ? 'gallery-item--tall' : null,
  ]
    .filter(Boolean)
    .join(' ');
}

export function GalleryFilter() {
  const [filter, setFilter] = useState<Category>('all');

  return (
    <>
      <div className="filter-row reveal" aria-label="Filter gallery">
        {FILTERS.map((option) => (
          <button
            key={option.value}
            className={option.value === filter ? 'filter-btn is-active' : 'filter-btn'}
            type="button"
            onClick={() => setFilter(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="gallery-grid reveal">
        {ITEMS.map((item) => (
          <figure
            key={item.caption}
            className={itemClassName(item)}
            hidden={filter !== 'all' && item.category !== filter}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
