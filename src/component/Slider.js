import React, {Component} from 'react';
import request from 'superagent';
import BackArrow from "./Arrows/BackArrow";
import NextArrow from "./Arrows/NextArrow";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            slideCount: 0,
        };

        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px'}}>
                {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
                {this.state.photos.map((photo, key) => {
                    if (this.state.photos.indexOf(photo) === this.state.slideCount) {
                        return (
                            <div key={photo.id} style={{margin: '0 auto'}}>
                                <img src={photo.images.standard_resolution.url} alt=''/>
                                <div style={{width: '600px',  margin: '24px auto', fontStyle: 'italic'}}>
                                    {photo.caption !== null ? photo.caption.text : ''}
                                </div>
                            </div>
                        )
                    }
                    return ''
                })}
                {this.state.slideCount !== (this.state.photos.length -1) ? <NextArrow nextImage={this.nextImage}/> : ''}
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

    previousImage() {
        this.setState({ slideCount: this.state.slideCount - 1});
    }

    nextImage() {
        console.log(this.state.slideCount);
        this.setState({ slideCount: this.state.slideCount + 1});
    }
}

export default Slider;