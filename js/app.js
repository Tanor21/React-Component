


class Clock extends React.Component {

    //Constructor to initialize this.state
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //Lifecycle method componentDidMount will execute after the component output has been rendered to the DOM
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //Lifecycle method componentWillUnmount to tear down the timer
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //Our tick method that our Clock component will execute every seconde
    tick() {
        this.setState({
            date: new Date()
        });
    }

    //Our Clock component render
    render() {
        return (
            <div>
                <h1>Bonjour, tous le monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);