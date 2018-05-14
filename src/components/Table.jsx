import React from 'react';

const Table = (props) => {
    return (
        <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">{props.title}</strong>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                {props.children}
                                </table>
                            </div>
                        </div>
                    </div>
    );
}

export default Table;