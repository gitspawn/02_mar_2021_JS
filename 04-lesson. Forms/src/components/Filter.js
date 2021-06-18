import React from "react";

export default function Filter({ value, onChangeFilter }) {
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
