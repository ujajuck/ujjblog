import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  loading_img: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark,loading_img, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      <h1>Hello, {name}</h1>
      <img src={loading_img}/>
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Button</button>
      </div>
    </div>
  );
}
function Background(){

}
Greetings.defaultProps = {
  mark: require('./image/정적.png'),
  loading_img: require('./image/로딩.gif')
};

export default Greetings;
