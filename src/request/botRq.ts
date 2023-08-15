import axios from "axios";

export function rqBotMessage(contentToBot: any, messageBot: string) {
  axios({
    method: 'POST',
    url: 'http://185.46.8.130/api/v1/chat/send-message',
    data: {message: messageBot}
  })
  .then((response) => response.data)
  .then((response) => contentToBot(response))
}