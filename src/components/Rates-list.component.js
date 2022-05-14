import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const Rates = props => ( <
    tr >
    <
    td > { props.Rates.username } </td> <
    td > { props.Rates.Address } </td> <
    td > { props.Rates.Phone } </td> <
    td >
    <
    Link to = { "/edit/" + props.Rates._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteRates(props.Rates._id) }}>Delete</a > </
    td > </tr> 
)

export default class RatesList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Rates: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Rates/')
            .then(response => {
                this.setState({ Rates: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Rates/')
            .then(response => {
                this.setState({ Rates: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteRates(id) {
        if (window.confirm('Are you sure?')) {
            axios.delete('http://localhost:5000/Rates/' + id)
                .then(response => { console.log(response.data) });

            this.setState({
                Rates: this.state.Rates.filter(el => el._id !== id)
            })
        }
    }

    RatesList() {
        return this.state.Rates.map(currentRates => {
            return <Rates Rates = { currentRates }
            deleteRates = { this.deleteRates }
            key = { currentRates._id }
            />;
        })
    }


    filterData(Rates, searchKey) {

        this.setState({
            Rates: this.state.Rates.filter(el => el.Name = searchKey)
        })

    }





    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Rates/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)
            )

            this.setState({ Rates: result })

        });

    }

    render() {
        return ( <
            div className = "container" >
    
           
            
            <
            div className = "row" >
            <
            div className = "col-lg-9 mt-2 mb-2" >
            <
            h4 > All Rates </h4> </
            div > <
            div className = "col-lg-3 mt-2 mb-2" >
            <
            input className = "form-control"
            type = "search"
            placeholder = "Search by  Name"
            name = "searchQuery"
            onChange = { this.handleSearchArea } >
            </
            input> </
            div > </
            div>


            <
            table class="table table-bordered table-white" >
            <
            thead className = "thead-light" >
            <
            tr >
            <
            th > Name </th> <
            th > Rate </th> <
            th > Review </th><
            th > Actions </th> </
            tr > </
            thead> <
            tbody > {
                this.state.Rates.map(props =>
                    <
                    tr key = { props.id } >
                    <td > { props.Name } </td>  <
                    td > { props.Rate } </td>  <
                    td > { props.Review } </td> <td >
                    <
                    Link to = { "/edit/" + props._id } >  <Button variant = "warning btn-sm"> Edit </Button> </Link>  
                    <a href="" onClick={() => { this.deleteRates(props._id) }}> <Button variant = "danger btn-sm"> Delete </Button> </a > 
                    </td >

                    </tr>
                )

            }

            </tbody> </table >

            <
            div style = {
                { float: 'right' }
            } >

            <
            Link to = "/create/" >
            <button type="button" class="btn btn-success" variant = "primary" > New Rating </button>
            </
            Link >
            </div>

            </div>
        )
    }
}