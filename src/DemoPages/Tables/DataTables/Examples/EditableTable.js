import React, {Component, Fragment} from 'react'

import ReactTable from "react-table";

import {
    Row, Col,
    Card, CardBody,
} from 'reactstrap';
import PageTitle from '../../../../Layout/AppMain/PageTitle';

import {makeData} from "./utils";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class DataTableEditable extends Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
        this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {
        return (
            <div
                style={{backgroundColor: "#fafafa"}}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data});
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }

    render() {
        const {data} = this.state;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="Bookings"
                            // subheading="Choose between regular React Bootstrap tables or advanced dynamic ones."
                            icon="pe-7s-medal icon-gradient bg-tempting-azure"
                        />
                    </div>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <ReactTable
                                        data={data}
                                        columns={[
                                            {
                                                Header: "Attendance",
                                                accessor: "attendance",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Surname",
                                                accessor: "surname",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Initials",
                                                accessor: "initials",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Specialist Type",
                                                accessor: "specialist_type",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Specialist",
                                                accessor: "specialist",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Contact",
                                                accessor: "contact",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Attorney",
                                                accessor: "attorney",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Attorney Ref",
                                                accessor: "attorney_ref",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Area",
                                                accessor: "area",
                                                Cell: this.renderEditable
                                            },
                                            {
                                                Header: "Report Due",
                                                accessor: "report_due",
                                                Cell: this.renderEditable
                                            }
                                            // {
                                            //     Header: "Full Name",
                                            //     id: "full",
                                            //     accessor: d =>
                                            //         <div
                                            //             dangerouslySetInnerHTML={{
                                            //                 __html: d.firstName + " " + d.lastName
                                            //             }}
                                            //         />
                                            // }
                                        ]}
                                        defaultPageSize={10}
                                        className="-striped -highlight"
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}