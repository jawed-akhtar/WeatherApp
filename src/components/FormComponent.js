import React, { Component } from 'react';
import { Form, Input, Col, FormGroup, Button} from 'reactstrap';


class FormComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city : '',
            country: ''
        }

        this.inputHandler.bind(this);
    }

    inputHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
                <div className="col-9 p-1 col-md-8 mx-auto">
                    <Form>
                        <FormGroup row>
                            <Col md={6} className="mb-2">
                                <Input type="text" id="cityname" name="city" 
                                 placeholder="Enter City" value={this.state.city}
                                 onChange={this.inputHandler} />  
                            </Col>
                            <Col md={6} className="mb-2">
                                <Input type="text" id="countryname" name="country"
                                 placeholder="Enter Country" value={this.state.country}
                                 onChange={this.inputHandler} />  
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col col-md-8>
                                <Button type="button" color="warning" onClick={() => this.props.click(this.state)}>
                                    Get Weather
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
        );
    }
}

export default FormComp;