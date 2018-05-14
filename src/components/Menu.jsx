import React, {Component} from 'react';

class Menu extends Component {
    render () {
        if (this.props.assign === "left") {
            return (
                <div className="header-menu">
                    <div className="col-sm-7">
                        <div className="header-left">
                            {this.props.children} 
                        </div>
                    </div>
                </div>
                    );
        } else {
            return (
                <div className="col-sm-5">
                    <div className="user-area float-right"> 
                        {this.props.children}
                    </div>              
                </div>
            );
        }
    }
}

export default Menu;