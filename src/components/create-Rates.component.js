import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'


export default class CreateRates extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRate = this.onChangeRate.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Rate: '',
            Review: '',
            Rates: []
        }
    }

    //set the Name 
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

    //set the Rate
    onChangeRate(e) {
        this.setState({
            Rate: e.target.value
        })
    }

    //set Review
    onChangeReview(e) {
        this.setState({
            Review: e.target.value
        })
    }

    

    //submit Function
    onSubmit(e) {
        e.preventDefault();
        //const { Name, Rate, Review } = this.state;
        const Rates = {
            Name: this.state.Name,
            Rate: this.state.Rate,
            Review: this.state.Review
        }

        console.log(Rates);

        //validation
       


        

            axios.post('http://localhost:5000/Rates/add', Rates)
                .then(res => console.log(res.data));

            swal({
                    title: "Done!",
                    text: "Rates Successfully Added",
                    icon: "success",
                    button: "Okay!"
                })
                .then((value) => {
                    window.location = '/main';
                });
        
    }

    render() {
        return ( <div >
            <div class = "row" >
            <div class = "col-6" >
            <br/ > < br/ > < br/ > < br/ > < br/ > < br/ >
            <
            img src = "https://static.wixstatic.com/media/fc21aa_02353b548f004825b07fba5792a0beaf~mv2.gif" alt="The Love"
            width = "90%"
            height = "60% " /
            >
            </div> <div class = "col-6" >
            <div class = "myformstyle2" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > 
            Add Review</font> </h3 >  
            <form onSubmit = { this.onSubmit } >
            <div className = "form-group" >
            <label > Name: </label>
            <input type = "text"
            required className = "form-control"
            placeholder = "Enter Name"
            value = { this.state.Name }
            onChange = { this.onChangeName }/>
             </div > 
              <div className = "form-group" >
            <label > Rate: </label> <select ref = "Rateinput"
            placeholder = "Rate"
            required className = "form-control"
            value = { this.state.Rate }
            onChange = { this.onChangeRate } >
            <option value = "Useless ⭐" > Useless⭐</option>
            <option value = "Poor      ⭐⭐" > Poor     ⭐⭐</option> 
            <option value = "Ok ⭐⭐⭐" > Ok     ⭐⭐⭐ </option>
            <option value = "Good ⭐⭐⭐⭐" > Good ⭐⭐⭐⭐ </option>
            <option value = "Excellent ⭐⭐⭐⭐⭐" > Excellent ⭐⭐⭐⭐⭐</option>
            
            </select >  </div> <div className = "form-group" >
            <label > Review: </label>
             <input type = "Note"
            required className = "form-control"
            placeholder = "Enter Review"
            value = { this.state.Review }
            onChange = { this.onChangeReview }/> </div > 
             <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" />
            </div> </form > </div> </div >  </div> </div >  <br/ > < br/ > 
             </div>
        );
    }
}