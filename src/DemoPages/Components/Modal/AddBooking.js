import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    ModalFooter, Form, FormGroup, Label,
    Input, FormText, Row, Col, CustomInput} from 'reactstrap';
import DatePicker from 'react-datepicker';

class AddBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            startDate: new Date(),
            courtDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date,
            courtDate: date
        });
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <span className="d-inline-block mb-2 mr-2">
                <Button color="primary" onClick={this.toggle}>Add Booking</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Booking</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="doctor">Doctor/Specialist</Label>
                                        <Input type="select" name="doctor" id="doctor">
                                            <option>Select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="date">Date</Label>
                                        <DatePicker className="form-control"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="surname">Surname</Label>
                                        <Input type="text" name="surname" id="surname"  placeholder="surname"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="initial">Initial</Label>
                                        <Input type="text" name="initial" id="initial"  placeholder="xxxxxxxxxx"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="cpacity">Capacity</Label>
                                        <Input type="text" name="cpacity" id="cpacity"  placeholder="Capacity"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="location">Location</Label>
                                        <Input type="text" name="location" id="location"  placeholder="Location"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="attorney">Attorney</Label>
                                        <Input type="text" name="attorney" id="attorney"  placeholder="Attorney"/>
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                        <Label for="court_date">Court Date</Label>
                                        <DatePicker className="form-control"
                                                    selected={this.state.courtDate}
                                                    onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <Label for="product_options">Product Options</Label>
                                        <div>
                                            <CustomInput type="checkbox" id="product_options_ml" label="ML"  inline/>
                                            <CustomInput type="checkbox" id="product_options_add" label="Add" inline/>
                                            <CustomInput type="checkbox" id="product_options_raf1" label="Raf1" inline/>
                                            <CustomInput type="checkbox" id="product_options_raf4" label="Raf4" inline/>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md={6}></Col>
                            </Row>
                            <Row>
                                <Col md={7}>
                                    <CustomInput type="checkbox" id="book_confirm" label="Send Booking confirmation to attorney" inline/>
                                </Col>
                                <Col md={5}>
                                    <FormGroup>
                                    <Button >Cancel booking</Button>
                                    <Button color="primary" className="ml-3">Done</Button>
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Form>
                    </ModalBody>
                </Modal>
            </span>
        );
    }
}

export default AddBooking;
