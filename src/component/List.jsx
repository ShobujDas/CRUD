import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

function List() {
  
  const [data , setData] = useState([])
  const [ id, setId ] = useState(0)

  useEffect(()=>{
    (async()=>{
      let res = await axios.get('https://crud.teamrabbil.com/api/v1/ReadProduct');
      setData(res.data['data'])
    })()
  },[id])


  const onDelete = async(id)=>{
      let URL = "https://crud.teamrabbil.com/api/v1/DeleteProduct/"+id;
      await axios.get(URL);
      setId(id)
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-around">
        <div className="col-8">
           <div className="table-responsive">
           <table className="table table-striped">
              <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    data.map((item,index)=>{
                      return(
                        <tr key={index}>
                          <td><img className="w-25" src={item['img']} /></td>
                          <td>{item['ProductName']}</td>
                          <td>{item['ProductCode']}</td>
                          <td>{item['UnitPrice']}</td>
                          <td>{item['Qty']}</td>
                          <td>{item['TotalPrice']}</td>
                          <td>
                            <Link to={"/update/"+item['_id']} className="btn btn-success">Edit</Link>
                            <button onClick={()=>{onDelete(item['_id'])}} className="btn btn-success">Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
           </div>
        </div>

      </div>

    </div>
  )
}

export default List