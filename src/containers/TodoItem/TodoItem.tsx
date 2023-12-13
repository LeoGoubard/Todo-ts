import Button from "../../components/Button/Button";
import CheckBoxField from "../../components/CheckBoxField/CheckBoxField";
import classes from "./TodoItem.module.scss";

type TodoItemProps = {
  todo: string;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={classes.TodoItem + " flex"}>
      <div className="mr-1 mt-2">
        <CheckBoxField />
      </div>
      <div className="mr-auto mt-auto mb-auto">{todo}</div>
      <div>
        <Button>
           <i className="fa fa-pencil" />
        </Button>
      </div>
      <div>
        <Button>
          <i className="fa-solid fa-trash" />
        </Button>
      </div>
    </div>
  )
}

export default TodoItem