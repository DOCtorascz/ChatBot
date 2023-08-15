import { ChatEnvironment } from '../components/chatEnvironment/evvironment';
import { AddMessage } from "../components/chatAddMessage/addMessage";
import './chatPage.scss';
import { useState } from 'react';
export { ChatPageHome };

const arrDefaultMessageList: object[] = [{
  message: 'Добро пожаловать в чат!'
}]

function ChatPageHome() {
  const [addMessage, setAddMessage] = useState(arrDefaultMessageList)

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    const messageInput = event.target.children[0];
    const messageInputValue = (messageInput as HTMLInputElement).value

    if (messageInputValue !== '') {
      addMessage.push({message: messageInputValue})
    } else {
      alert('Автор очень хотел сделать модальное окно, но не знал, одобрит ли руководство. Кажется что-то забыли вписать...')
    }

    setAddMessage([...addMessage]);
    (messageInput as HTMLInputElement).value = ''
  }

  console.log(addMessage)
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__nameChat">
            <h1 className="header__name">bot Chat</h1>
            <p className="header__infoChat">AI-based service</p>
          </div>
          <div className="header__contentChat">
            <ChatEnvironment arrayMessage={addMessage}/>
            <AddMessage sendMessage={(event: React.ChangeEvent<HTMLInputElement>) => handleClick(event)}/>
          </div>
        </div>
      </div>
    </header>
  );
}