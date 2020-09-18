// FOOTER COMPONENT
import React from 'react';
import './form.scss';

// Make a function to make all REST methods functional
class Form extends React.Component {
  constructor(props) {
    super(props);
    // Get a method with 'get as the default
    const method = props.request.method || 'get';
    //     // get a url with default of nothing
    const url = props.request.url || '';
    //     //get the data and turn it into a string or a default of nothing
    const data = props.request.data ? JSON.stringify(props.request.data) : '';

    this.state = {
      request: {
        method,
        url,
        data
      }
    };

  }

  //handle the URL change
  urlHandler = (event) => {
    let url = event.target.value;
    // the ... is an ES6 spread operator that sets the nested data
    const newRequest = { ...this.state.request, url };
    this.setState({ request: newRequest });
  };
  // handle the Method change
  methodHandler = (method) => {
    const newRequest = { ...this.state.request, method };
    this.setState({ request: newRequest });
  };
  // handle the body change
  bodyHandler = (event) => {
    let data = JSON.parse(event.target.value);
    const newRequest = { ...this.state.request, data };
    this.setState({ request: newRequest });
  };
  // handle the submit
  submitHandler = async (event) => {
    event.preventDefault();
    this.props.handler(this.state.request);
  };

  render() {

    return (
      <form className="App-form" onSubmit={this.submitHandler}>
        <>
          <input type="text" id="urlText" placeholder="http://api.url.here" onChange={this.urlHandler} defaultValue={this.state.request.url} />
          <button>Get it!</button>
          </>
          <ul>
            <li> <button value="GET" className={`method ${this.state.request.method === 'GET'}`} onClick={() => this.methodHandler('GET')}>GET</button></li>
            <li> <button value="POST" className={`method ${this.state.request.method === 'POST'}`} onClick={() => this.methodHandler('POST')}>POST</button></li>
            <li> <button value="PUT" className={`method ${this.state.request.method === 'PUT'}`} onClick={() => this.methodHandler('PUT')}>PUT</button></li>
            <li> <button value="DELETE" className={`method ${this.state.request.method === 'DELETE'}`} onClick={() => this.methodHandler('DELETE')}>DELETE</button></li>
          </ul>
          <textarea name="data" onChange={this.bodyHandler} defaultValue={this.state.request.data} /> 
        </form>
    );
  }
}
// function Form(props) {
//   // useState returns a pair: it's current state and a function to update it.
//   const [request, setRequest] = useState({});

//   // useEffect performs side effects from a function component
//   useEffect(() => {
//     // Get a method with 'get as the default
//     const method = props.request.method || 'get';
//     // get a url with default of nothing
//     const url = props.request.url || '';
//     //get the data and turn it into a string or a default of nothing
//     const data = props.request.data ? JSON.stringify(props.request.data) : '';
//     // call the useState request
//     setRequest({ method, url, data });
//   }, [props, setRequest]);







export default Form;