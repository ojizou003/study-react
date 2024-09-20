import { useCallback, useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const handleClick = useCallback(() => {
      if (count < 10){
      setCount((prevCount) => prevCount+1);
    }
    }, [count]);
  
    return {count, handleClick};
  };