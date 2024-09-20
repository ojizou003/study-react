import { useCallback, useMemo, useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const handleClick = useCallback(() => {
      if (count < 10){
      setCount((prevCount) => prevCount+1);
    }
    }, [count]);
    const doubleCount = useMemo(() => {
      return count * 2;
    }, [count]);
  
    return {count, handleClick, doubleCount};
  };