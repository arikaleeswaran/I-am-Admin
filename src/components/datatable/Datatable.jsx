import "./datatable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource";


function Datatable() {

    const actionColumn = [{ 
        field:"action", 
        headerName:"Action", 
        width:200, 
        renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            );
        },
    },];
  return (
    <div className="datatable">
        <DataGrid
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