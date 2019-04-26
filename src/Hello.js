import React from "react";
import { UserContext } from "./UserProvider";

export function Hello(){
    return (
        <UserContext.Consumer>
        {value => <h1>Hello {value.name}!</h1>}
      </UserContext.Consumer>
    );
}
