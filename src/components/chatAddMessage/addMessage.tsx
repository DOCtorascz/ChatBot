import './addMessage.scss';
export { AddMessage };

function AddMessage({sendMessage}: any) {
  return (
    <form className="message-add" onSubmit={sendMessage}>
      <input className="message-add__text" type="text" placeholder='Start typing here...'/>
      <button className="message-add__text-add" >
        <img src="../../pages/addMessage.svg" alt="addMessage" />   
      </button>
    </form>
  );
}
