import React, { useEffect } from 'react';
import StaffAmount from './components/StaffAmount';
import OldstffTable from './components/OldstffTable';
import { useSelector,useDispatch } from'@umijs/max';


function index(props) {

  const {amountDataList,staffList} = useSelector(state => state.dashboard);

  const dispatch = useDispatch();
  
  // useEffect( async () => {
  //   const res = await dispatch({type: "dashboard/initDashboradList"})
  // },[])

  return (
    <div className="dashboard-container">
      {
       amountDataList.map((item,index )=> {
          return <StaffAmount key={index} {...item} />
        })
      }

      {/* 最老的十个员工 */}
      <OldstffTable {...staffList}/>
    </div>
  );
}

export default index;