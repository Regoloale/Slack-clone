import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");

    const sendMessage = e => {
        
        e.preventDefault(); //Prevent refresh of page when we click send

        if (channelId) { 
            return false;
        }

        db.collection('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Ale Regolo',
            userImage: 'https://i.stack.imgur.com/ILTQq.png'
        });

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input 
                    value={input}
                    placeholder={`Message #ROOM`} 
                    onChange={e => setInput(e.target.value)}
                />
                <Button hidden type='submit' onClick={sendMessage} >
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;