import './chatEnvironment.scss';
import { Item } from '../../type/type';

export { MessagePersonOne };


function MessagePersonOne({ personTexOne }: any = []) {
  let messageBot = '';

  personTexOne.forEach((element: Item) => {
    messageBot += element.value
  });

  if (personTexOne.length !== 0) {
    return (
      <div className="message__person-one">
        <img className="message__avatar avatarOne" src="../../pages/Avatar1.svg" alt="avatar" />
        <span className="message__text textOne">{messageBot}</span>
      </div>
    )
  }
}