import React from 'react'
interface ButtonProps {
    text: string;
}

const Text = (props: ButtonProps) => {
    return (<p>{props.text}</p>);
}

export default Text