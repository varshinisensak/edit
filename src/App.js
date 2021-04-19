import React, { Component } from 'react';
import Form from "./Form";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        };

        this.addPerson = this.addPerson.bind(this);

    }

    addPerson(name) {
        this.setState(prevState => ({
            people: [...prevState.people, { name }]
        }));
    }
    deletePerson(index) {
        return () => {
            this.setState(prevState => ({
                people: prevState.people.filter(person => person.index !== index)
            }));
        };
    }



    render() {
        return (
            <div className="App">
                <Form addPerson={this.addPerson} />
                <table border='1px' cellPadding='20%' padding='20px'>
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>NAME</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person, index) => {
                            return (
                                <tr key={person}>
                                    <th>{index + 1}</th>
                                    <td>{person.name}</td>

                                    <td>
                                        <button onClick={this.deletePerson(person.email)}>
                                            Delete
                    </button>
                                        <button>EDIT</button>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;





// import React, { Component } from 'react';

// class Function extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             text: ''
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.removeItem = this.removeItem.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.setState(prevState => ({
//             list: prevState.list.concat(this.state.text),
//             text: ''
//         }))
//     }

//     handleChange(e) {
//         this.setState({
//             text: e.target.value
//         })
//     }

//     removeItem(index) {
//         const list = this.state.list;
//         list.splice(index, 1);
//         this.setState({ list });
//     }

//     render() {
//         return (
//             <div>

//                 <form onSubmit={this.handleSubmit}>
//                     <input value={this.state.text} onChange={e => this.handleChange(e)} />
//                     <button>submit</button>
//                     <ol >
//                         {this.state.list.map((item, index) => {
//                             return (

//                                 <li key={index}>{item}
//                                     <button onClick={() => this.removeItem(index)}>Delete</button>
//                                 </li>)
//                         })}
//                     </ol>

//                 </form>
//             </div>
//         )
//     }
// }
// export default Function;


// import { React, useState } from 'react'
// function Function() {
//     const [value, setValue] = useState([]);
//     const [data, setdata] = useState('');
//     const [updates, setupdates] = useState(false);
//     const [id, setid] = useState()
//     const Add = (event) => {
//         event.preventDefault();
//         let newdata = { id: (Math.floor(Math.random() * 1000) + 1), name: data };
//         data === '' ? alert("hey enter something") : setValue([...value, newdata])
//         setdata('')
//     }
//     const Edit = () => {
//         data === '' ? alert("hey enter something") : value.map(res => res.id === id ? res.name = data : '')
//         setupdates(false)
//         setid()
//         setdata('')
//     }
//     return (
//         <div>
//             {updates === false ? <form onSubmit={Add}> <div>
//                 <input type="text" placeholder="Enter Something" value={data} onChange={(e) => { setdata(e.target.value) }} />
//                 <input type="submit" value="Add" />
//             </div></form> : <div>
//                 <input type="text" placeholder="Enter New Name" onChange={(e) => { setdata(e.target.value) }} />
//                 <input type="submit" value="Update" onClick={Edit} />
//                 <input type="button" value="Cancel" onClick={() => { setupdates(false) }} />
//             </div>}
//             <table cellPadding="22%">
//                 <tr>
//                     <th>S.no</th>
//                     <th>Names</th>
//                     <th>delete</th>
//                     <th>update</th>
//                 </tr>
//                 {value.map(e => (
//                     <tr key={e.id}>
//                         <td>{e.id}</td>
//                         <td>{e.name}</td>
//                         <td style={{ color: "red" }} onClick={() => {
//                             setValue(value.filter((res) => { return res.id !== e.id }))
//                         }}>Del</td>
//                         <td style={{ color: "green" }} onClick={() => {
//                             setupdates(true)
//                             setid(e.id)
//                         }} >Update</td>
//                     </tr>
//                 ))}
//             </table>
//         </div >
//     )
// }

// export default Function