import * as React from 'react';
export default class Form extends React.Component {
  constructor(props){
    super(props);    
  }
 render () {
   return (
     <form>
       <h2>Sign up</h2>       
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" />       
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>       
        <br/>
       <button type="submit">Sign up</button>
     </form>
   )
 }
}