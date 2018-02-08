import React from 'react';
import Arrow from "./Arrow";

class BackArrow extends Arrow {
    render() {
        return (
            <div style={{fontSize: '2em', marginRight: '12px'}}>
                <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default BackArrow;