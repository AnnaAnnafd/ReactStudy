import React from 'react';

const defaultStyle = {
    width: '400px',
    height: '400px',
    background: 'yellow'
}

const smallStyle = {
    width: '200px',
    height: '200px',
    background: 'red'
}

export class Square extends React.Component{
    constructor(){
        super();
        this.state = {
            style: defaultStyle
        }
    }
    componentDidMount(){
        this.sizeChanger();
        window.addEventListener('resize', () => {
            this.sizeChanger();
        })
    }
    sizeChanger = () => {
        if ( window.innerWidth <= 600 && window.innerHeight <= 800) {
            this.setState({
                style: smallStyle
            })
        } else {
            this.setState({
                style: defaultStyle
            })
        }
    }
    render(){
        return(
            <div style={this.state.style}></div>
        )
    }
}

