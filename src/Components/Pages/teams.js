import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoApp = () => {
  const [projectName, setProjectName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const allProjects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const productCount  =   allProjects.filter( (product) => {
    if(product.projectStatus === false ){
        return product
    }
})

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_PROJECT", payload: id });
  };

  const addProjectHandler = () => {
    if (projectName) {
      let projectinfo = {
        id: allProjects.length + 1,
        projectName: projectName,
        projectStatus: false,
      };
      dispatch({ type: "ADD_PROJECT", payload: projectinfo });
      setProjectName("");
    } else {
      alert("Please enter Project Name");
    }
  };
  const setProjectStatus = (e, item) => {
    let editProject = {
      id: item.id,
      projectName: item.projectName,
      projectStatus: e.target.checked,
    };
    dispatch({ type: "EDIT_PROJECT", payload: editProject });
  };

  const filterProjectHandler = (e) => {
    dispatch({ type: "FILTER_PROJECT", payload: e.target.checked });
  };

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "SEARCH_PROJECT", payload: searchValue });
      setSearchValue("");
    }
  };

  const searchProductHandler = (val, mode) => {
    setSearchValue(val);

    if (mode) {
      dispatch({ type: "SEARCH_PROJECT", payload: val });
    } else {
      setSearchValue(val);

      dispatch({ type: "SEARCH_PROJECT", payload: val });
    }
  };
  return (
    <>
      <div className="team-project">
        <h4>Team Projects</h4>
        <p>What do you need to do?</p>
      </div>

      <div className="team-filter">
        <input
          type="text"
          placeholder="Filter Projects"
          value={searchValue}
          onChange={(e) => {
            searchProductHandler(e.target.value);
          }}
          onKeyPress={handleOnKeyPress}
        />
        <span>
          <input type="checkbox" onChange={(e) => filterProjectHandler(e)} />{" "}
          Hide Completed
        </span>
      </div>
      <div className="project-list">
        <h4>You have {productCount.length} projects left</h4>
        <ul className="project-status">
          {allProjects.map((item, index) => {
            return (
              <li key={item.id} className="single-project">
                <p>
                  {item.projectStatus ? (
                    <input
                      type="checkbox"
                      checked
                      onChange={(e) => setProjectStatus(e, item)}
                    />
                  ) : (
                    <input
                      type="checkbox"
                      onChange={(e) => setProjectStatus(e, item)}
                    />
                  )}
                  <span>{item.projectName}</span>
                  <a href="#\" onClick={() => removeHandler(item.id)}>
                    remove
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="New Projects"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button className="submit-btn" onClick={() => addProjectHandler()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default TodoApp;
