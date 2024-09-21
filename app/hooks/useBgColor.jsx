import { useEffect} from 'react';

export const useBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    // return () => {
      // document.body.style.backgroundColor = '';
    // };
  }, []);
};