import React, { Fragment, useState } from "react";

const Editinputlist= ({ todo1 }) => {
    const [description, setDescription] = useState(todo1.description);
  
    //edit description function
  
    const updateDescription = async e => {
      e.preventDefault();
      try {
        const body = { description };
        const response = await fetch(
          `http://localhost:5000/todos/${todo1.todo_id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }
        );
  
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };
  
    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#id${todo1.todo_id}`}
        >
          Edit
        </button>
  
        {/* 
          id = id10
        */}
        <div
         className="modal"
          id={`id${todo1.todo_id}`}
          onClick={() => setDescription(todo1.description)}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Todo</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setDescription(todo1.description)}
                >
                  &times;
                </button>
              </div>
  
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
  
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={e => updateDescription(e)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => setDescription(todo1.description)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

export default Editinputlist