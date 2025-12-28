import React from "react";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="list-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" type="button" onClick={() => editItem(id)}>
                Edit
              </button>
              <button className="remove-btn" type="button" onClick={() => removeItem(id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })
      }
    </div>
    );
};

export default List;
