import TextController from './components/TextController';

import TextControllerStore from './store/TextControllerStore';
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

const App = () => {
  return (
    <div>
      <TextController store={firstTextCtrStore} />
      <TextController store={secondTextCtrStore} />
    </div>
  );
};

export default App;
