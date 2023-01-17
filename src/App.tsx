import TextController from './components/TextController/TextController';
import AutocompleteController from './components/AutocompleteController/AutocompleteController';

import TextControllerStore from './store/TextControllerStore';
import AutocompleteControllerStore from './store/AutocompleteControllerStore';
import './App.scss';

const firstTextCtrStore = new TextControllerStore('', [
  {
    id: 'b1',
    text: 'Clear Input',
    callback: () => {
      firstTextCtrStore.changeContent('');
    },
  },
  {
    id: 'b2',
    text: 'Set "Hello world!"',
    callback: () => {
      firstTextCtrStore.changeContent('Hello world!');
    },
  },
]);
const secondTextCtrStore = new TextControllerStore(
  '',
  [
    {
      id: 'b1',
      text: 'Alert Content',
      callback: () => {
        const value = secondTextCtrStore.content;

        if (value) {
          alert(value);
        }
      },
    },
  ],
  [
    {
      id: 'b2',
      text: 'Alert Number',
      callback: () => {
        const value = secondTextCtrStore.content;

        if (value && !isNaN(+value)) {
          alert(value);
        }
      },
    },
  ],
);

const firstAutocompleteCtrStore = new AutocompleteControllerStore();
const secondAutocompleteCtrStore = new AutocompleteControllerStore(10);

const App = () => {
  return (
    <div>
      <h2>Контрол с кнопками</h2>
      <TextController store={firstTextCtrStore} />
      <TextController store={secondTextCtrStore} />
      <h2>Контрол-автокомплит</h2>
      <AutocompleteController store={firstAutocompleteCtrStore} />
      <AutocompleteController store={secondAutocompleteCtrStore} />
    </div>
  );
};

export default App;
