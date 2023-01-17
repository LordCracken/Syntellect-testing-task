import { RefObject, useEffect } from 'react';

type IUseClickOut = (
  dropdownRef: RefObject<HTMLDivElement>,
  inputRef: RefObject<HTMLInputElement>,
  optionsRef: RefObject<HTMLUListElement>,
  isTouched: boolean,
  setIsTouched: (value: boolean) => void,
) => void;

const useClickOut: IUseClickOut = (dropdownRef, inputRef, optionsRef, isTouched, setIsTouched) => {
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
};

export default useClickOut;
