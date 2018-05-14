import React from 'react';

const Content = (props) => {
    return (
        <div class="content mt-3">
            <div class="animated fadeIn">
                <div class="row">
                    
                    {props.children}

                </div>
            </div>
        </div>
    );
}

export default Content;