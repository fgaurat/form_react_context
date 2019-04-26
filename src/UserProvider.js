import React, { createContext, Component } from "react"; // on importe createContext qui servira à la création d'un ou plusieurs contextes

export const UserContext = createContext({
  name: "",
});

class UserProvider extends Component {
  state = {
    name: "Context name", // une valeur de départ
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;