import React from 'react'

export default (props: { onScrollToLower?: () => void, style?: React.CSSProperties, children?: JSX.Element[] | JSX.Element }) => {
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>)=>{
    const scrollHeight = e.currentTarget.scrollHeight;
    const scrollTop = e.currentTarget.scrollTop;

    if (Math.floor(scrollHeight - scrollTop - window.innerHeight) <= 0) {
      props.onScrollToLower && props.onScrollToLower ();
    }
    e.stopPropagation();
  }

  return <div onScroll={handleScroll} style={props.style}>
    {props.children}
  </div>
}