import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Spitali extends Component{

    constructor(props){
        super(props);

        this.state={
            Spitali:[],
            modalTitle:"",
            SpitalName:"",
            City:"",
            Nrtelefonit: "",
            SpitaliId:0
        }
    }

    refreshlist(){
        fetch(variables.API_URL+'Spitali')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Spitali:data});
        });

    }

    componentDidMount(){
        this.refreshlist();
    }

    onChangeSpitalName =(e)=>{
        this.setState({SpitalName:e.target.value});
    }
    onChangeCity =(e)=>{
        this.setState({City:e.target.value});
    }
    onNrtelefonit =(e)=>{
        this.setState({Nrtelefonit:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Spitali",
            SpitaliId:0,
            SpitalName:"",
            City:"",
            Nrtelefonit:""
        });
    } 

    editClick(spi){
        this.setState({
            modalTitle:"Edit Spitali",
            SpitaliId:spi.SpitaliId,
            SpitalName:spi.SpitalName,
            City:spi.City,
            Nrtelefonit:spi.Nrtelefonit
        });
    }

    createClick(){
        fetch(variables.API_URL+'Spitali',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                SpitalName:this.state.SpitalName,
                City:this.state.City,
                Nrtelefonit:this.state.Nrtelefonit
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
        fetch(variables.API_URL+'Spitali',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                SpitaliId:this.state.SpitaliId,
                SpitalName:this.state.SpitalName,
                City:this.state.City,
                Nrtelefonit:this.state.Nrtelefonit
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
        fetch(variables.API_URL+'Spitali/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                SpitaliId:this.state.SpitaliId,
                SpitalName:this.state.SpitalName,
                City:this.state.City,
                Nrtelefonit:this.state.Nrtelefonit
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
            Spitali,
            modalTitle,
            SpitaliId,
            SpitalName,
            City,
            Nrtelefonit
        }=this.state;

        return(
        <div>
            <button type="button"
            className="btn btn-primary m-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>this.addClick()}>
                Add Spital
            </button>


            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            SpitaliId
                        </th>
                        <th>
                            SpitalName
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Nrtelefonit
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Spitali.map(spi=>
                        <tr key={spi.SpitaliId}>
                            <td>{spi.SpitaliId}</td>
                            <td>{spi.SpitalName}</td>
                            <td>{spi.City}</td>
                            <td>{spi.Nrtelefonit}</td>
                            <td>
                        <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(spi)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>

                        <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(spi.SpitaliId)}>
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
            <span className="input-group-text">SpitalName</span>
            <input type="text" className="form-control"
            value={SpitalName}
            onChange={this.onChangeSpitalName}/>
            </div>
        </div>

        <div className="modal-body">
            <div className="input-group mb-3">
            <span className="input-group-text">City</span>
            <input type="text" className="form-control"
            value={City}
            onChange={this.onChangeCity}/>
            </div>
        </div>

        <div className="modal-body">
            <div className="input-group mb-3">
            <span className="input-group-text">Nrtelefonit</span>
            <input type="text" className="form-control"
            value={Nrtelefonit}
            onChange={this.onNrtelefonit}/>
            </div>
        </div>

        {SpitaliId==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {SpitaliId!=0?
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