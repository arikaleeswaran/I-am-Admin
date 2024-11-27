import "./datatable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";


function Datatable() {
    const [data,setData] = useState(userRows)

const handleDelete = (id)=>{
    setData(prevData => prevData.filter(item => item.id !== id));
}

    const actionColumn = [{ 
        field:"action", 
        headerName:"Action", 
        width:150, 
        renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to={`/users/${params.row.id}`} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            );
        },
    },];
  return (
    <div className="datatable">
        <div className="datatableTitle">
            Add New User
            <Link to={"/users/new"} style={{textDecoration:"none"}} className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSizeOptions={[5,10]}
            // rowPerPageOptioms = {[9]}
            checkboxSelection
            // sx={{ border: 0 }}
        />
    </div>
  )
}

export default Datatable;