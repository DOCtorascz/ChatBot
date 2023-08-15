import { useState, useEffect } from 'react';
import './chatEnvironment.scss';
import { MessagePersonOne } from './message__person-one';
import { MessagePersonTwo } from './message__person-two';
import { rqBotMessage } from '../../request/botRq';
export { ChatEnvironment };


function ChatEnvironment({ arrayMessage }: any = []) {
  const [messageBot, setMessageBot] = useState('Hello! I’m BotHub, AI-based bot designed to answer all your questions')

  useEffect(() => {
    if (arrayMessage.length !== 1) {
      rqBotMessage(setMessageBot, messageBot)
    }
  }, [arrayMessage]);

  const arrayMessageBot = [];

  if (messageBot !== 'Hello! I’m BotHub, AI-based bot designed to answer all your questions') {
    for (let i = 0; i <= messageBot.length - 1; i++) {
      const indexOpenScobe = messageBot.indexOf('{', i)

      if (indexOpenScobe !== -1) {
        const indexCloseScobe = messageBot.indexOf('}', indexOpenScobe) + 1
        const strObjMessBot = messageBot.slice(indexOpenScobe, indexCloseScobe)
        arrayMessageBot.push(strObjMessBot)
        i = indexCloseScobe
      }
    }
  }
  
  const objNewMessageBot = arrayMessageBot.map((item) => {
    const objPars = JSON.parse(item);
    return objPars
  })

  return (
    <div className="message">
      <div className="message__inner">
        <MessagePersonTwo personTexTwo={arrayMessage} />
        <MessagePersonOne personTexOne={objNewMessageBot}/>
      </div>
    </div>
  );
}