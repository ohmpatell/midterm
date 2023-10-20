import React from "react";
import { useRef } from "react";
import "../forms.css";

const Form2 = () => {
  const file2 = useRef();
  const name2 = useRef();
  const description2 = useRef();
  const category2 = useRef();
  const quantity2 = useRef();
  const price2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name2.current.value);
    console.log(description2.current.value);
    console.log(category2.current.value);
    console.log(quantity2.current.value);
    console.log(price2.current.value);
    console.log(file2.current.files[0]);
    handleCancel(e);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    name2.current.value = "";
    description2.current.value = "";
    category2.current.value = "";
    quantity2.current.value = "";
    price2.current.value = "";
    file2.current.value = "";
  };

  return (
    <div>
      <form className="form-container">
        <h2>New Product</h2>

        <div className="form-group">
          <input
            ref={file2}
            id="imageInput2"
            type="file"
            className="form-control-file"
          />
        </div>

        <div className="form-group group">
          <input
            ref={name2}
            id="nameInput2"
            type="text"
            className="form-control"
            placeholder="Name"
          />

          <textarea
            ref={description2}
            id="descriptionInput2"
            className="form-control"
            placeholder="Description"
          ></textarea>

          <input
            ref={category2}
            id="categoryInput"
            type="text"
            className="form-control"
            placeholder="Category"
          />

          <input
            ref={quantity2}
            id="quantityInput"
            type="number"
            className="form-control"
            placeholder="Quantity"
          />

          <input
            ref={price2}
            id="priceInput"
            type="number"
            className="form-control"
            placeholder="Price"
          />
        </div>

        <div className="form-group buttons">
          <button

            id="submitBtn2"
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            id="cancelBtn2"
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
