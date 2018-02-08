import React, {Component} from 'react';
import request from 'superagent';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        }
    }

    render() {
        return (
            <div>
                {this.state.photos.map((photo, key) => {
                    return (
                        <div key={photo.id}>
                            <img src={photo.images.standard_resolution.url} alt={photo.caption}/>
                            <div style={{width: '600px', margin: '24px auto', fontStyle: 'italic'}}>
                                {photo.caption !== null ? photo.caption.text : ''}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    componentWillMount() {
        this.fetchPhotos();
    }

    fetchPhotos() {
        console.log(process.env.REACT_APP_INSTAGRAM_TOKEN_KEY);
        request
            .get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN_KEY}`)
            .then((res) => {
                this.setState({
                    photos: res.body.data
                });
            })
    }
}

export default Photo;