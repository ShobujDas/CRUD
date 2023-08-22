import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";




function   CreateUpdateForm() {

  let {id} = useParams();
  let [FormValue, SetFormValue] = useState({
    Img: "",
    ProductCode: "",
    ProductName: "",
    Qty: "",
    UnitPrice: "",
    TotalPrice: "",
  });
  let navigate = useNavigate();



  useEffect(()=>{
    (async()=>{
      let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProductByID/"+id);
      SetFormValue(res.data["data"][0])
    })()
  },[])



  const InputOnChange = (property, value) => {
    SetFormValue({ ...FormValue, [property]: value });
  };


  const onSubmit = async()=>{

    let URL = "https://crud.teamrabbil.com/api/v1/CreateProduct";

    if(id){
      URL = "https://crud.teamrabbil.com/api/v1/UpdateProduct/"+id;
    }

    let res = await axios.post(URL,FormValue);
    if(res.status === 200){
      alert("Save Change")
      navigate('/');
    }
  }









  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2">
          <label> Product Name</label>
          <input
            value={FormValue.ProductName}
            className="form-control form-control-sm"
            onChange={(e) => {
              InputOnChange("ProductName", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
        <div className="col-md-6 p-2">
          <label> Product Code </label>
          <input
            value={FormValue.ProductCode}
            className="form-control form-control-sm" 
            onChange={(e) => {
              InputOnChange("ProductCode", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
        <div className="col-md-6 p-2">
          <label> Image</label>
          <input
            value={FormValue.Img}
            className="form-control form-control-sm" 
            onChange={(e) => {
              InputOnChange("Img", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
        <div className="col-md-6 p-2">
          <label> Unit Price</label>
          <input
            value={FormValue.UnitPrice}
            className="form-control form-control-sm" 
            onChange={(e) => {
              InputOnChange("UnitPrice", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
        <div className="col-md-6 p-2">
          <label> Qty</label>
          <input
            value={FormValue.Qty}
            className="form-control form-control-sm" 
            onChange={(e) => {
              InputOnChange("Qty", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
        <div className="col-md-6 p-2">
          <label> Total Price</label>
          <input
            value={FormValue.TotalPrice}
            className="form-control form-control-sm" 
            onChange={(e) => {
              InputOnChange("TotalPrice", e.target.value);
            }}
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="row">
            <div className="col-md-6">
            <button onClick={onSubmit} className="btn btn-danger p-2">Submit</button>
            </div>
      </div>
    </div>
  );
}

export default CreateUpdateForm;
