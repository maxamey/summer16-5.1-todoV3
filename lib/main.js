import React from 'react'

export default React.createClass({

  onSubmitHandler(e){
    e.preventDefault();
    var enteredItem = this.refs.todo__textInput.value;

    //calling submitTodo from below
    this.submitTodo(enteredItem);
    this.refs.todo__textInput.value = "";
  },

  submitTodo(submitString){
    var listItemTemplate =
    `
    <li class="list__item"
              ref="list__item">
      <div class="circle"
                 ref="circle">
      </div>
      <p class="list__text"
               ref="list__text">
        ${submitString}
      </p>
    </li>
    `;


    // Ensures the user enters at least 2 characters before they
    // publish their todo item to their list.
    var enteredItem = this.refs.todo__textInput;
    if(enteredItem.value.length >= 2){
      this.refs.list.innerHTML += listItemTemplate;
    };

    if(enteredItem.length == 1){
      // Changes placeholder text to inform user that they need
      // to enter more than one character.
      enteredItem.setAttribute("placeholder", "oops..please enter more than one character");
    }else{
      // Changes back to default message...originally tried
      // this if/else as part of the previous if statement, but
      // the placeholder stayed as the oops message.
      enteredItem.setAttribute("placeholder", "type todo item here..." );
    }
  },



  render(){
    return(
      <section>
        <h1 className="title"
          ref="title">
          todos
        </h1>
        <div className="container"
             ref="container">
          <form className="todo"
                action="#"
                method="POST"
                onSubmit={this.onSubmitHandler}>
            <input type="text"
                   placeholder="type todo item here..."
                   name="textInput"
                   className="todo__textInput"
                   ref="todo__textInput"
                   />
            <input type="submit"
                   name="submit"
                   className="todo__enter"
                   ref="todo__enter"/>
            <ul className="list"
                ref="list">
            </ul>
          </form>
          <footer className="footer"
                  ref="footer">
            <p className="defaultMessage">
              add some items to get started!
            </p>
          </footer>
        </div>
      </section>
    )
  }
})
