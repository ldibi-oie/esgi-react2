import React from 'react'

export default function Message() {
    return (
        <div classname="message-item"></div>
‍
            <div><b>{this.props.senderName}</b></div>
‍
            <span>{this.props.text}</span>
‍
    )
}
