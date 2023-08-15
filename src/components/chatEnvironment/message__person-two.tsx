import './chatEnvironment.scss';
import { Item } from '../../type/type';
export { MessagePersonTwo };


function MessagePersonTwo({personTexTwo}: any = []) {  
  return (
    personTexTwo.map((item: Item, index: number) => {
      return (
        <div className="message__person-two" key={index}>
          <span className="message__text textTwo">{item.message}</span>
          <img className="message__avatar avatarTwo" src="../../pages/Avatar2.svg" alt="avatar" />
        </div>
      )
    })
  )
}