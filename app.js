var Milk = () => (
  <li>Milk</li>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    })
  }
  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    return(
    <li style={style} onMouseEnter = {this.onHover.bind(this)}>{this.props.grocery}</li>
  );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
)

ReactDOM.render(<GroceryList groceries={["Milk", "Cheese", "Eggs"]}/>, document.getElementById("app"))
