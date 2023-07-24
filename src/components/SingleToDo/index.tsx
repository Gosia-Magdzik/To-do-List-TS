import bin from "./Icons/delete.svg";
import mark from "./Icons/mark.svg";
import pen from "./Icons/pen.svg";
import { Todo } from "../../model"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleToDo = ({todo, todos, setTodos }:Props) => {
    return(
        <div>

        </div>
    );
};