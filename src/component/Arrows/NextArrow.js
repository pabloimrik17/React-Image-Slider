import React from 'react';
import Arrow from "./Arrow";

class NextArrow extends Arrow {
    constructor(props) {
        super(props)
        this.state = {
            nextImage: props.nextImage
        }
    }

    render() {
        return (
            <div onClick={this.state.nextImage} style={{fontSize: '2em', marginRight: '12px'}}>
                <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default NextArrow;