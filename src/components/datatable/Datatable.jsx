import "./datatable.scss"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch"
import axios from "axios";


function Datatable() {

    const location = useLocation();
    const path = location.pathname.split("/")[1];
    console.log(path,"path");
    
    const [list, setList] = useState([]);
    const{data,loading,error} = useFetch(`/${path}`)

    useEffect(()=>{
        setList(data)
    },[data])
const handleDelete = async (id)=>{
    try{
        console.log(`Attempting to delete: /${path}/${id}`);

        const res = await axios.delete(`/${path}/${id}`);
        console.log(res);
        
        setList(currentList => currentList.filter(item => item._id !== id));

    }catch(err){
            console.error("Error deleting item:", err);
            alert("Failed to delete the item. Please try again.");
    }
    // setList(list => list.filter(item => item._id !== id));
}

    const actionColumn = [{ 
        field:"action", 
        headerName:"Action", 
        width:150, 
        renderCell:(params)=>{
            return (
                <div className="cellAction">
                    <Link to={`/users/${params.row._id}`} style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row._id)}>Delete</div>
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
            rows={list}
            columns={userColumns.concat(actionColumn)}
            pageSizeOptions={[5,10]}
            // rowPerPageOptioms = {[9]}
            checkboxSelection
            getRowId={row => row._id}
            // sx={{ border: 0 }}
        />
    </div>
  )
}

export default Datatable;