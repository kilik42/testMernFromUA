import React, {Component} from  'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';


class TaskList extends Component {
  state ={

    items:[
      {id: uuid(), name: 'eggs'},
      {id: uuid(), name: 'milk'},
      {id: uuid(), name: 'steak'},
      {id: uuid(), name: 'water'}
    ]
  }

  render(){
    const {items} = this.state;
    return (
      <Container>
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={()=>{
          const name = prompt('enter task');
          if(name){
            this.setState(state=> ({
                  items: [...state.items, {id: uuid(),name}]
            }));
          }
        }}
          >

          Add Task
        </Button>

        <ListGroup>
          <TransitionGroup className="task-list">
            {items.map(({id, name})=> (
              < CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className ="remove-btn"
                  color = "danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item=> item.id !== id)
                      
                    }));
                  }}

                  >&times;</Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default TaskList;
