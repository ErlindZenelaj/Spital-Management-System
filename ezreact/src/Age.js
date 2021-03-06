import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Age extends Component{

    constructor(props){
        super(props);

        this.state={
            Age:[],
            modalTitle:"",
            Namee:"",
            Surname:"",
            Agee:"",
            AgeId:0
        }
    }

    refreshlist(){
        fetch(variables.API_URL+'Age')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Age:data});
        });

    }
 
    componentDidMount(){
        this.refreshlist();
    }

    onChangeNamee =(e)=>{
        this.setState({Namee:e.target.value});
    }

    onChangeSurname =(e)=>{
        this.setState({Surname:e.target.value});
    }

    onChangeAgee =(e)=>{
        this.setState({Agee:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Age",
            AgeId:0,
            Namee:"",
            Surname:"",
            Agee:""
        });
    } 

    editClick(ag){
        this.setState({
            modalTitle:"Edit Age",
            AgeId:ag.AgeId,
            Namee:ag.Namee,
            Surname:ag.Surname,
            Agee:ag.Agee
        });
    }

    createClick(){
        fetch(variables.API_URL+'Age',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Namee:this.state.Namee,
                Surname:this.state.Surname,
                Agee:this.state.Agee
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    updateClick(){
        fetch(variables.API_URL+'Age',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                AgeId:this.state.AgeId,
                Namee:this.state.Namee,
                Surname:this.state.Surname,
                Agee:this.state.Agee
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    } 

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'Age/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                AgeId:this.state.AgeId,
                Namee:this.state.Namee,
                Surname:this.state.Surname,
                Agee:this.state.Agee
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }
    } 
      

    render(){
        const{
            Age,
            modalTitle,
            AgeId,
            Namee,
            Surname,
            Agee
        }=this.state;

        return(
        <div>
            <button type="button"
            className="btn btn-primary m-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>this.addClick()}>
                Add Age
            </button>


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            AgeId
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Surname
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Age.map(ag=>
                        <tr key={ag.AgeId}>
                            <td>{ag.AgeId}</td>
                            <td>{ag.Namee}</td>
                            <td>{ag.Surname}</td>
                            <td>{ag.Agee}</td>
                            <td>
                        <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(ag)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>

                        <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(ag.AgeId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                </td>   
                        </tr>
                        
                        )}
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismis="modal" aria-label="Close"
            ></button>
        </div>

        <div className="modal-body">
            <div className="input-group mb-3">
            <span className="input-group-text">Namee</span>
            <input type="text" className="form-control"
            value={Namee}
            onChange={this.onChangeNamee}/>
            </div>
        </div>

        <div className="modal-body">
            <div className="input-group mb-3">
            <span className="input-group-text">Surname</span>
            <input type="text" className="form-control"
            value={Surname}
            onChange={this.onChangeSurname}/>
            </div>
        </div>

        <div className="modal-body">
            <div className="input-group mb-3">
            <span className="input-group-text">Agee</span>
            <input type="text" className="form-control"
            value={Agee}
            onChange={this.onChangeAgee}/>
            </div>
        </div>

        {AgeId==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {AgeId!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
        

    </div>
    </div>
    </div>
                    
        </div>
        )
    }
}