import { IHint } from '../../interfaces';
import classes from './HintListItem.module.scss';

const HintListItem = ({
  hint,
  onChange,
  onSelect,
}: {
  hint: IHint;
  onChange: (newValue: string) => void;
  onSelect: (value: boolean) => void;
}) => {
  const { name, fullName, flag } = hint;

  const setValueHandler = (pickedValue: string) => {
    onChange(pickedValue);
    onSelect(false);
  };

  return (
    <li className={classes.hintListItem} onClick={setValueHandler.bind(null, name)}>
      <img src={flag} alt={name} />
      {name} ({fullName})
    </li>
  );
};

export default HintListItem;
