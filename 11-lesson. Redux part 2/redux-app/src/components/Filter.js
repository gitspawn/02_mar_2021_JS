import React from "react";
import { connect } from "react-redux";
import tasksActions from "../redux/tasks/tasksActions";

function Filter({ value, onChangeFilter }) {
    return (
        <form>
            <label>
                Filter tasks
                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChangeFilter(event.target.value)}
                />
            </label>
        </form>
    );
}

let mapStateToProps = (state) => {
    return {
        value: state.tasks.filter,
    };
};

let mapDispathToProps = {
    onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispathToProps)(Filter);
