import React from 'react'
interface TextProps {
    text: string;
}

const Text = (props: TextProps) => {
    return (<p>{props.text}</p>);
}

export default Text