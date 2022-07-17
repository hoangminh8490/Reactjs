
import React, { useEffect, useState } from 'react';
const ExampleEffectFunction = () => {
const [count, setCount] = useState(0);
const[action, setAction] =useState('');
//run when component re render lai 
useEffect(()=>{
//life cyle componentDidMount & compoentDidUpdate
document.title = 'you clicked' + count + 'times';
//add 1 array depency (only when count change then using useEffect)
},[count]);
useEffect(()=>{
fetch(n')
.then((res)=>console.log(res))
.catch((err)=>console.log(err));
});
return (
<div>
<p>You clicked {count} times </p>
<button onClick={()=>{
setCount(count + 1)
}}>CLick me</button>
<button onClick={()=>{
'aaaa'
}}>Enter</button>
<button onClick={()=>{
'bbbbbb'
}}>Get</button>
</div>
);
};
export default ExampleEffectFunction;