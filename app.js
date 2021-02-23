const users = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{}, props.name),
            React.createElement("h2",{}, props.role)
            
        ]

    );
}
   

const App =()=>{
    return  React.createElement(
        "div",
        {},
        [
            React.createElement("h1",{},"hi there !!"),
            React.createElement(users,{
                name:"akhil",
                role:"father"

            }),
            React.createElement(users,{
                name:"aiswarya",
                role:"mother",

            }),
            React.createElement(users,{
                name:"shinra",
                role:"son",

            })
        ]
        );
  };

  ReactDOM.render(
      React.createElement(App),
      document.getElementById("root")
      );
