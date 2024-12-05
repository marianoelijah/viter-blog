import {
    setIsConfirm,
    setIsDelete,
    setIsEdit,
  } from "@/components/store/storeAction";
  import { StoreContext } from "@/components/store/storeContext";
  import {
    Archive,
    ArchiveRestore,
    FilePenLine,
    Trash2,
  } from "lucide-react";
  import React from "react";
  import LoadMore from "../partials/LoadMore";
  import ModalConfirm from "../partials/modals/ModalConfirm";
  import ModalDelete from "../partials/modals/ModalDelete";
  import Pills from "../partials/Pills";
import useQueryData from "@/components/custom-hook/useQueryData";
import SpinnerTable from "../partials/spinners/SpinnerTable";

  
  const BlogTable = () => {
    const { store, dispatch } = React.useContext(StoreContext);
    const [isActive, setIsActive] = React.useState(0);
    const [id, setId] = React.useState(null);

    const {
      isLoading,
      isFetching,
      error,
      data: result,
    } = useQueryData(
      `/v2/blog`, // endpoint
      "get", // method
      "blog"
    );
  
    
    let counter = 1;

    const handleEdit = (item) => {
      dispatch(setIsAdd(true));
      setItemEdit(item);
    };
  
    const handleDelete = (item) => {
      dispatch(setIsDelete(true));
      setId(item.recipe_aid);
    };
  
    const handleRestore = (item) => {
      dispatch(setIsConfirm(true));
      setIsActive(1);
      setId(item.recipe_aid);
    };
  
    const handleArchive = (item) => {
      dispatch(setIsConfirm(true));
      setIsActive(0);
      setId(item.recipe_aid);
    };
  
    return (
      <>
        <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {!isLoading || (isFetching && <SpinnerTable />)}{" "}
          <div className="table-wrapper custom-scroll">
            {/* <TableLoader count={10} cols={4} /> */}
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Title</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td colSpan={100}>
                    <IconNoData />
                  </td>
                </tr>
                <tr>
                  <td colSpan={100}>
                    <IconServerError />
                  </td>
                </tr> */}
               {Array.from(Array(6).keys()).map((i) => (
                 <tr key={i}>
                 <td>{counter++}.</td>
                 <td>
                   <Pills />
                 </td>
                 <td>Blog 1</td>

                 <td>
                   <ul className="table-action">
                     {true ? (
                       <>
                         
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Edit"
                             onClick={() => handleEdit(item)}
                           >
                             <FilePenLine />
                           </button>
                         </li>
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Archive"
                             onClick={() => handleArchive(item)}
                           >
                             <Archive />
                           </button>
                         </li>
                       </>
                     ) : (
                       <>
                         <li>
                           <button
                             className="tooltip"
                             data-tooltip="Restore"
                             onClick={() => handleRestore(item)}
                           >
                             <ArchiveRestore />
                           </button>
                         </li>
                         <li>
                           <button
                             className="tool-tip"
                             data-tooltip="Delete"
                             onClick={() => handleDelete(item)}
                           >
                             <Trash2 />
                           </button>
                         </li>
                       </>
                     )}
                   </ul>
                 </td>
               </tr>
               ))}
              </tbody>
            </table>
  
            <LoadMore />
          </div>
        </div>
  
        {store.isDelete && (
        <ModalDelete mysqlApiDelete={`/v2/blog/${id}`} queryKey="blog" />
      )}


      {store.isConfirm && (
        <ModalConfirm
          queryKey="blog"
          mysqlApiArchive={`/v2/blog/active/${id}`}
          active={isActive}
        />
      )}
      </>
    );
  };
  
  export default BlogTable;