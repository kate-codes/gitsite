import { useRef, useEffect, useCallback } from 'react';

export const useInteractiveCardGrid = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const resync = useCallback(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    const items = list.querySelectorAll('li');
    const w = Math.max(...[...items].map((i) => i.offsetWidth));
    list.style.setProperty('--article-width', String(w));
  }, []);

  const collapse = useCallback(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    const items = list.querySelectorAll<HTMLElement>('li');
    items.forEach((item) => {
      item.dataset.active = 'false';
    });
    list.style.setProperty(
      'grid-template-columns',
      Array(list.children.length).fill('1fr').join(' ')
    );
  }, []);

  const setIndex = useCallback((event: Event) => {
    const list = listRef.current;
    if (!list) {
      return;
    }
    const items = list.querySelectorAll<HTMLElement>('li');
    const closest = (event.target as Element).closest('li');
    if (closest) {
      const index = [...items].indexOf(closest as HTMLElement);
      const cols = new Array(list.children.length)
        .fill(null)
        .map((_, i) => {
          items[i].dataset.active = String(index === i);
          return index === i ? '10fr' : '1fr';
        })
        .join(' ');
      list.style.setProperty('grid-template-columns', cols);
    }
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    list.addEventListener('focus', setIndex, true);
    list.addEventListener('click', setIndex);
    list.addEventListener('pointermove', setIndex);
    list.addEventListener('pointerleave', collapse);
    window.addEventListener('resize', resync);
    resync();

    return () => {
      list.removeEventListener('focus', setIndex, true);
      list.removeEventListener('click', setIndex);
      list.removeEventListener('pointermove', setIndex);
      list.removeEventListener('pointerleave', collapse);
      window.removeEventListener('resize', resync);
    };
  }, [setIndex, collapse, resync]);

  return { listRef };
};
