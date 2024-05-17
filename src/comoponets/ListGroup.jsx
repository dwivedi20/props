
import ListItem from './Listitem'

const ListGroup = ({ todos ,deleteTodo,editTodo}) => {
  return (
    <ul className="list-group my-2  ">
      {
      todos.map((todo) => (
        < ListItem key={todo.id} todo={todo}  deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </ul>
  );
};

export default ListGroup;

 
