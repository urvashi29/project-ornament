import React, { Component } from 'react';
import details from '../../data'
import './Research.css';
import { Link } from "react-router-dom";

const list = [{
    detail: details.map(data => {
        return (data.shape)
    })
}, {
    detail: details.map(data => {
        return (data.location)
    })
}, {
    detail: details.map(data => {
        return (data.name)
    })
}]

class Research extends Component {
    constructor() {
        super();
        this.state = {
            details: details,
            shape: '',
            location: '',
            painter: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.id]: e.target.innerHTML
        })
    }

    render() {
        const detailsList = details.length ? (details.map((info) => {
            return (
                <div className="card" key={info.citationNumber} id="cards">
                    <img src={info.img} className="card-img-top" alt="profile" />
                    <div className="card-body" id="card-text">
                        {/*<h5 className="card-title">{info.name}</h5> */}
                        Shape: {info.shape}
                        <br />
                        Vase Number: {info.vaseNumber}
                        <br></br>
                        <Link to={/research/ + info.citationNumber}><button
                            details={info}
                            type="button"
                            id="button"
                            className="btn btn-warning">
                            View Details
                        </button></Link>

                    </div>
                </div>
            );
        })) : (<p>No Posts Yet!</p>)
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5 col-md-8 col-lg-4 col-xl-4">
                        <h2>SEARCH DATABASE</h2>
                        <div className="left-div">
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        SHAPE</li>
                                </ul>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                    {this.state.shape !== '' ? (this.state.shape) : (<React.Fragment>{list[0].detail[0]}</React.Fragment>)}
                                </button>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[0].detail.map(val => {
                                        return (
                                            <a className="dropdown-item" id="shape" onClick={this.handleClick}>{val}</a>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        LOCATION
                                    </li>
                                </ul>
                                <div className="div-right">
                                    <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                        {this.state.location !== '' ? (this.state.location) : (<React.Fragment>{list[1].detail[0]}</React.Fragment>)}
                                    </button>
                                </div>

                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[1].detail.map(val => {
                                        return (
                                            <a className="dropdown-item" id="location" onClick={this.handleClick}>{val}</a>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="btn-group">
                                <ul>
                                    <li className="search-items">
                                        PAINTER
                                    </li>
                                </ul>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', overflow: 'hidden' }} className="btn btn-secondary">
                                    {this.state.painter !== '' ? (this.state.painter) : (<React.Fragment>{list[2].detail[0]}</React.Fragment>)}
                                </button>
                                <button type="button" style={{ height: '40px', backgroundColor: '#1E1E1E', borderLeft: 'none' }} className="btn btn-secondary btn-lg  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    {list[2].detail.map(val => {
                                        return (
                                            <a className="dropdown-item" id="painter" onClick={this.handleClick}>{val}</a>
                                        )
                                    })}
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="search-div">
                            <button
                                type="button"
                                className="btn btn-warning">
                                Search
                            </button>
                        </div>

                    </div>
                    <div className="col-sm-7 col-md-4 col-lg-8 col-xl-8">
                        <div>{detailsList}</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Research;