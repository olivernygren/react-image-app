import { Component, CSSProperties } from "react";
import Input from "./input";

interface Props {}
interface State {
  searchValue: string;
}

class App extends Component<Props, State> {
  private readonly API_KEY = '563492ad6f917000010000012082aaef0d014972a877c10ce9d04a21'
  state: State = {
    searchValue: ''
  }

  handleNewSearchValue = (value: string) => {
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div style={rootStyle}>
        <Input 
          value={this.state.searchValue} 
          onChange={this.handleNewSearchValue} 
        />
        {/* <ImageGrid /> */}
      </div>
    );
  }
}

const rootStyle: CSSProperties = {
  display: 'flex',
  padding: '1rem'
};

export default App;
