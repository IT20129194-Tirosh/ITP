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

     myfunction(){
     // document.getElementById("1").style.display="none";
     //alert(document.getElementById("1"));

     window.print();
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

    Report (){ 
        
        
        
        window.print();

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
            div >  </
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
            th > Review </th> </
            tr > </
            thead> <
            tbody > {
                this.state.Rates.map(props =>
                    <
                    tr key = { props.id } >
                    <td > { props.Name } </td>  <
                    td > { props.Rate } </td>  <
                    td > { props.Review } </td> 

                    </tr>
                )

            }

            </tbody> </table >
            <
            div style = {
                { float: 'right' }
            } >

            
            <Button type="button" class="btn btn-danger" id="1" variant = "primary"  onClick ={this.myfunction} > Print </Button>
            
            </div>

           

            </div>
        )
    }
}
