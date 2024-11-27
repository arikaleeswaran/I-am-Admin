import "./datatable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource";
import { Link } from "react-router-dom";


function Datatable() {

    const actionColumn = [{ 
        field:"action", 
        headerName:"Action", 
        width:200, 
        renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to={"/users/test"} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
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
            rows={userRows}
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