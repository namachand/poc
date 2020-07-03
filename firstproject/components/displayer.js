class Displayer extends React.Component{

  render(){
        return(
            <div>
                <h3>Code is: {this.props.result.bpi.USD.code}</h3>
                <h3>Symbol is: {this.props.result.bpi.USD.symbol}</h3>
                <h3>Rate is: {this.props.result.bpi.USD.rate}</h3>
                <h3>Description is: {this.props.result.bpi.USD.description}</h3>
                </div>
        )
    }
}
export default Displayer