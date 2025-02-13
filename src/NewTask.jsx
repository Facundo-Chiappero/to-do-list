import "./App.css";
const NewTask = ({ task, id, handleDelete }) => {

    return (
        <div className='task'>
            <p>{task}</p>
            <button onClick={() => handleDelete(id)}>Eliminar</button>
        </div>
    )
}

export default NewTask;
