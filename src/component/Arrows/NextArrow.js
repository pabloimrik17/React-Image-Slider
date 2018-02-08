import React from 'react';
import Arrow from "./Arrow";

class NextArrow extends Arrow {
    render() {
        return (
            <div style={{fontSize: '2em', marginRight: '12px'}}>
                <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default NextArrow;