import { useEffect} from 'react';

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    // return () => {
      // document.body.style.backgroundColor = '';
    // };
  }, []);
};