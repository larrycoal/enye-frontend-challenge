import axios from 'axios';
import React, { Component } from 'react';
import User from './Component/User'
import Header from './Component/Header'
class App extends Component {
  state = {
    profiles:"",
    filteredList:""
  }

  componentDidMount(){
    axios.get('https://api.enye.tech/v1/challenge/records')
    .then(response=>{
      this.setState({
        profiles:response.data.records.profiles,
        filteredList:response.data.records.profiles
      })
    })
  }
  filterList(filter){
    if(filter.key === "All"){
      this.setState({
        ...this.state,
        filteredList:this.state.profiles
      })
    }else if (filter.type === "Gender"){
      const newList = this.state.profiles.filter((list)=>{
        return(list.Gender === filter.key
     )})
     this.setState({
      ...this.state,
      filteredList:newList
    })
    }else if (filter.type === "PaymentMethod"){
      const newList = this.state.profiles.filter((list)=>{
        return(list.PaymentMethod === filter.key
     )})
     this.setState({
      ...this.state,
      filteredList:newList
    })  } 
  }

  searchList(key){
    const profiles = this.state.profiles
    var search = new RegExp(key,"ig")
    const list=profiles.filter((profile)=>(
      profile.FirstName.match(search)
    ))
    this.setState({
      ...this.state,
      filteredList: list
    })
  }
  render() {
    return (
      <div className="main_wrapper">
        <Header filterList={(filter)=>this.filterList(filter)} searchList={(key)=>this.searchList(key)}/>
        <User list = {this.state.filteredList}/>
      </div>
    );
  }
}

export default App;
