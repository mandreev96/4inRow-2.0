import React, {PureComponent} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ChipsCarousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
        };

        this.settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0px",
            slidesToShow: 3,
            speed: 300,
            afterChange: (index) => this.selectColor(index),
        };

        this.slider = React.createRef();
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    selectColor = (color) => {
        this.props.selectColor(color);
    };

    setWidthSlider = () =>
        (this.state.width > 500) ?
            {width: 400} :
            {width: 230};

    render() {
        const width = this.setWidthSlider();
        return (
            <div style={width} className={this.props.classes}>
                <Slider {...this.settings} ref={this.slider}>
                    <div>
                        <div className='chip chipColor_red'/>
                    </div>
                    <div>
                        <div className='chip chipColor_blue'/>
                    </div>
                    <div>
                        <div className='chip chipColor_black'/>
                    </div>
                    <div>
                        <div className='chip chipColor_pink'/>
                    </div>
                    <div>
                        <div className='chip chipColor_yellow'/>
                    </div>
                    <div>
                        <div className='chip chipColor_green'/>
                    </div>
                </Slider>
            </div>
        );
    }
}
