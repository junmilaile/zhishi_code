import React from 'react';
import StaffAmount from './components/StaffAmount';
import { useSelector } from'@umijs/max';
function index(props) {

  const amountDataList = useSelector(state => state.dashboard);

  console.log(amountDataList,'amountDataList');
  
  return (
    <div className="dashboard-container">
      {
        amountDataList.amountDataList.map((item,index )=> {
          return <StaffAmount key={index} {...item} />
        })
      }
    </div>
  );
}

export default index;