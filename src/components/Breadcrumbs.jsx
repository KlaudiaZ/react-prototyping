import React from 'react';

const Breadcrumbs = (props) => {
    return (
        <div class="breadcrumbs">
            <div class="col-sm-4">
                <div class="page-header float-left">
                    <div class="page-title">
                        <h1>{props.currentDir}</h1>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="page-header float-right">
                    <div class="page-title">
                        <ol class="breadcrumb text-right">
                            <li><a href="#">{props.previousDir}</a></li>
                            <li><a class="active" href="#">{props.currentDir}</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;