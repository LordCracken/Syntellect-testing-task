import { RefObject, useState, useEffect } from 'react';

type IUseClickOut = (
  dropdownRef: RefObject<HTMLDivElement>,
  inputRef: RefObject<HTMLInputElement>,
  optionsRef: RefObject<HTMLUListElement>,
) => [isTouched: boolean, setIsTouched: (value: boolean) => void];

const useClickOut: IUseClickOut = (dropdownRef, inputRef, optionsRef) => {
  const [isTouched, setIsTouched] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!dropdownRef.current?.contains(target) && !optionsRef.current?.contains(target)) {
        setIsTouched(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (!isTouched) {
      inputRef.current!.blur();
    }
  }, [isTouched]);

  return [isTouched, setIsTouched];
};

export default useClickOut;
