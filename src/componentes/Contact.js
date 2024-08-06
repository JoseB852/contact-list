import { Context } from "../store/context";
import { useContext, } from "react";
import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = (props) => {
    const state = useContext(Context)
    return (
        <div>
            <div className="porfile" key={props.user.id}>
                <div className="card" >
                    <div className="row">
                        <div className="col-sm-4 mt-3">
                            <img src="https://img.freepik.com/fotos-premium/disenador-grafico-avatar-digital-ia-generativa_934475-9292.jpg" className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body mt-3">
                                <h5 className="card-title">{props.user.name}</h5>
                                <p className="card-text"><i className="fa-solid fa-location-dot"></i>{props.user.address}</p>
                                <p className="card-text"><i className="fa-solid fa-phone-flip"></i>{props.user.phone}</p>
                                <p className="card-text"><i className="fa-solid fa-envelope"></i>{props.user.email}</p>
                            </div>
                        </div>
                        <div className="button col-md-4 ">
                            <Link to={"/newConctact/" + props.user.id}>
                                <button type="button" className="btn secondary me-md-2"><i className="fa-solid fa-pencil"></i></button>
                            </Link>
                            <button type="button" className="btn secondary " data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><i className="fa-solid fa-trash"></i></button>

                        </div>

                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Are you sure?</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        if you delete this thing the entire universe will go down!
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => state.actions.deleteContact(props.user.id)}>Yes baby!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
