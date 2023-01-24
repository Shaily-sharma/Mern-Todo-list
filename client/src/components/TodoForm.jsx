import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi, postTodo, deleteTodo, updateTodo } from "../redux/action";
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from "react-icons/ai";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.todoreducer);
  const [text, setText] = useState("");
  const [updated, setupdated] = useState();

  const createTodo = (e) => {
    if (updated) {
      dispatch(updateTodo(updated._id, text));
    } else {
      e.preventDefault();
      dispatch(postTodo(text));
      console.log(text);
      setText("");
    }
    dispatch(getDataApi());
  };

  const handleDelete = (id) => {
    console.log(id, "id----");
    dispatch(deleteTodo(id));
    dispatch(getDataApi());
  };

  const handleEdit = (id, e) => {
    setupdated(e);
    setText(e.data);
    dispatch(getDataApi());
  };

  console.log(text, "---");

  useEffect(() => {
    const getData = () => {
      dispatch(getDataApi());
    };
    getData();
  }, [dispatch]);
  console.log(data);
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <input
          id="todo-input"
          type="text"
          autoComplete="off"
          placeholder="Enter new task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <AiFillPlusCircle
          size={40}
          onClick={createTodo}
          style={{ marginLeft: "1rem", color: "	#65a8be" }}
        />
      </div>
      <ul>
        <div>
          {data.map((e, i) => {
            return (
              <div key={i} className="task">
                <p style={{ display: "flex", justifyContent: "center" }}>
                  <li>{e.data}</li>
                  <div
                    style={{
                      marginLeft: "190px",
                      display: "inline-flex",
                      justifyContent: "center",
                    }}
                  >
                    <AiFillEdit
                      size={25}
                      onClick={() => handleEdit(e._id, e)}
                      style={{
                        marginLeft: "65px",
                        color: "#297c1a",
                      }}
                    />

                    <AiFillDelete
                      size={25}
                      onClick={() => handleDelete(e._id)}
                      style={{
                        color: " #c33737",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                </p>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};
