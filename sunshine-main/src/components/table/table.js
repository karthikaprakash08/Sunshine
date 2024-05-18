


import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import './table.css'; // Importing CSS for styling

import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
const Tablee = () => {
  const [page, setPage] = useState(1);
  const maxPages = 6;

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, maxPages));
  };

  return (
    <>
      <div className='wholecontainer col md-6 col sm-12'>
      <div className="card-headerr text-center md-3 sm-5">
        The below financial achieved by spending 3 to 4 hrs in a day
      </div>  
      <div className="container d-flex justify-content-center align-items-center my-3">
      <div className="pagination-controls ">
      <IconButton onClick={handlePrevPage} disabled={page === 1}>
            <ChevronLeft />
          </IconButton>
          </div>
        {page === 1 && (
          <div className="card w-100 my-3">
            <div className="card-header text-center">
              Financial Revenue
            </div>
            <table className="table-responsive striped-table border-box">
              <tbody>
                <tr>
                  <td>Products</td>
                  <td colSpan={2}>1st Year</td>
                  <td colSpan={2}>2nd Year</td>
                  <td colSpan={2}>3rd Year</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Students</td>
                  <td>Revenue</td>
                  <td>Students</td>
                  <td>Revenue</td>
                  <td>Students</td>
                  <td>Revenue</td>
                </tr>
                <tr>
                  <td>Arithmetic Olympiad</td>
                  <td>1500</td>
                  <td>60,000/-</td>
                  <td>3000</td>
                  <td>1,20,000/-</td>
                  <td>500</td>
                  <td>2,00,000/-</td>
                </tr>
                <tr>
                  <td>After School Program</td>
                  <td>100</td>
                  <td>6,00,000/-</td>
                  <td>200</td>
                  <td>12,00,000/-</td>
                  <td>300</td>
                  <td>18,00,000/-</td>
                </tr>
                <tr>
                  <td>Center</td>
                  <td>50</td>
                  <td>3,42,00/-</td>
                  <td>50</td>
                  <td>7,20,000/-</td>
                  <td>50</td>
                  <td>7,20,000/-</td>
                </tr>
                <tr>
                  <td>Online Tutoring</td>
                  <td>10</td>
                  <td>60,000/-</td>
                  <td>20</td>
                  <td>1,20,000/-</td>
                  <td>30</td>
                  <td>1,80,000/-</td>
                </tr>
                <tr>
                  <td>Annual Revenue</td>
                  <td></td>
                  <td>10,62,00/-</td>
                  <td></td>
                  <td>21,60,000/-</td>
                  <td></td>
                  <td>29,00,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === 2 && (
          <div className="card card2 w-100 my-3">
            <div className='heading d-flex justify-content-center align-items-center'>Financial Program Wise</div>
            <div className="card-header text-center">
              Arithmetic Olympiad
            </div>
            <table className="table-responsive striped-table content-box">
              <tbody>
                <tr>
                  <td >Business</td>
                  <td>No of Schools</td>
                  <td>Students</td>
                  <td>Possible Revenue Share</td>
                </tr>
                <tr>
                  <td>New School</td>
                  <td>15</td>
                  <td>12000</td>
                  <td>4,80,000/-</td>
                </tr>
                <tr>
                  <td>Existing Schools</td>
                  <td>5</td>
                  <td>1000</td>
                  <td>20,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === 3 && (
          <div className="card card3 w-100 my-3">
            <div className="card-header text-center">
              After School Program
            </div>
            <table className="table-responsive striped-table content-box">
              <tbody>
                <tr>
                  <td>Schools</td>
                  <td>Olympiad</td>
                  <td>Students</td>
                  <td>Number of Hr</td>
                  <td>Fees</td>
                  <td>Monthly Revenue</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>5</td>
                  <td>100</td>
                  <td>10 <span className='sp' style={{ color: 'grey' }}>Hrs in a week</span></td>
                  <td>600</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === 4 && (
          <div className="card card4 w-100 my-3">
            <div className="card-header text-center">
              Center
            </div>
            <table className="table-responsive striped-table content-box">
              <tbody>
                <tr>
                  <td>Months</td>
                  <td>Students</td>
                  <td>Batch</td>
                  <td>No of Hrs in Months</td>
                  <td>Fees</td>
                  <td>Avg Revenue</td>
                </tr>
                <tr>
                  <td>1st</td>
                  <td>10</td>
                  <td>2</td>
                  <td>20</td>
                  <td>1200</td>
                  <td>12,000/-</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>15</td>
                  <td>3</td>
                  <td>30</td>
                  <td>1200</td>
                  <td>30,000/-</td>
                </tr>
                <tr>
                  <td>6th</td>
                  <td>25</td>
                  <td>5</td>
                  <td>50</td>
                  <td>1200</td>
                  <td>60,000/-</td>
                </tr>
                <tr>
                  <td>6th to 10th</td>
                  <td>50</td>
                  <td>6</td>
                  <td>60</td>
                  <td>1200</td>
                  <td>2,40,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === 5 && (
          <div className="card card5 w-100 my-3">
            <div className="card-header text-center">
              Online Tutoring
            </div>
            <table className="table-responsive striped-table content-box">
              <tbody>
                <tr>
                  <td>Students</td>
                  <td>Per Hour</td>
                  <td>Hr in Month</td>
                  <td>Revenue</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>150</td>
                  <td>60</td>
                  <td>9,000/-</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>50</td>
                  <td>120</td>
                  <td>6,000/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {page === 6 && (
          <div className=" card card6 w-100 my-3">
            <div className="card-header text-center">
              Robotics
            </div>
            <table className=" table-responsive striped-table content-box">
              <tbody>
                <tr>
                  <td>Students</td>
                  <td>Per Hour</td>
                  <td>Per Students</td>
                  <td>Revenue</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>60</td>
                  <td>6,000/-</td>
                  <td>60,000/-</td>
                </tr>
               
              </tbody>
            
            </table>
          </div>
        )}
         <div className="pagination-controls ">
       
          <IconButton onClick={handleNextPage} disabled={page === maxPages}>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
     
      {/* <Stack spacing={2} className="pagination-container align-items-center">
      <Pagination
        count={6}
        page={page}
        onChange={handleChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: 'white',
            '&.Mui-selected': {
              backgroundColor: 'blue',
              color: 'white',
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          },
        }}
      />
    </Stack> */}
      </div>
     
    </>
  );
};

export default Tablee;





// import React from 'react';
// import './table.css'; // Importing CSS for styling

// const Tablee = () => {
//   return (
//     <>
    
//        <div className="card-headerr text-center">
//            The below financial achieved by spending 3 to 4 hrs in a day
//           </div>
//       <div className="container d-flex justify-content-center align-items-center my-3">
//         <div className="card w-100 my-3">
       
//         <div className="card-header text-center">
//          Financial Revenue
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//               <td>Products</td>
//               <td colSpan={2}> 1st Year</td><td colSpan={2}>2nd Year</td>
//               <td colSpan={2}>3rd Year</td>
//            </tr>
          
//             <tr>
//               <td></td>
//               <td>      Students    </td>
//               <td>        Revenue</td>
//               <td>      Students    </td>
//               <td>        Revenue</td>
//               <td>      Students    </td>
//               <td>        Revenue</td>
//             </tr>
           
//             <tr>
//               <td >Arithmetic Olympiad</td>
//               <td>1500</td>
//               <td>60,000/-</td>
//               <td >3000</td>
//               <td>1,20,000/-</td>
//               <td>500</td>
//               <td>2,00,000/-</td>
//             </tr>
//             <tr>
//               <td>   After School Program    </td>
//               <td>     100                    </td>
//               <td>6,00,000/-</td>
//               <td>200</td>
//               <td>12,00,000/-</td>
//               <td>300</td>
//               <td>18,00,000/-</td>
//             </tr>
//             <tr>
//               <td >Center</td>
//               <td>50</td>
//               <td>3,42,00/-</td>
//               <td >50</td>
//               <td>7,20,000/-</td>
//               <td>50</td>
//               <td>7,20,000/-</td>
//             </tr>
//             <tr>

//               <td>Online Tutoring</td>
//               <td>10</td>
//               <td>60,000/-</td>
//               <td>20</td>
//               <td>1,20,000/-</td>
//               <td>30</td>
//               <td>1,80,000/-</td>
//             </tr>
//             <tr>
//               <td>Annual Revenue</td>
//               <td></td>
//               <td>10,62,00/-</td>
//               <td></td>
//               <td>21,60,000/-</td>
//               <td></td>
//               <td>29,00,000/-</td>
//             </tr>
//           </tbody>
//         </table>

//         </div>
//       </div>
     
   
//       <div className="container financial-container d-flex justify-content-center align-items-center my-3">
       
//         <div className="card  card2 w-100 my-3">
//       <div className=' heading d-flex justify-content-center align-items-center  '>Financial Program Wise</div>
//         <div className="card-header text-center">
//         Arithmetic Olympiad
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//           <td >Business</td>
//               <td>      No of Schools    </td>
//               <td>      Students</td>
//               <td>      Possible Revenue Share   </td>
//            </tr>
          
//             <tr>
//               <td>New School</td>
//               <td>15</td>
//              <td>12000</td>
//              <td>4,80,000/-</td>
//             </tr>
           
//             <tr>
//              <td>Existing Schools</td>
//              <td>5</td>
//              <td>1000</td>
//              <td>20,000/-</td>
//             </tr>
          
//           </tbody>
//         </table>

//         </div>
//       </div>
//       <div className="container school-container d-flex justify-content-center align-items-center my-3">
       
//         <div className="card  card3 w-100 my-3">
    
//         <div className="card-header text-center">
//         After School Program
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//           <td >Schools</td>
//               <td>     Olympiad   </td>
//               <td>     Students</td>
//               <td>     Number of Hr  </td>
//               <td>Fees</td>
//               <td>Monthly Revenue</td>
//            </tr>
          
//             <tr>
//               <td>20</td>
//               <td>5</td>
//              <td>100</td>
//              <td>10  <span className='sp' style={{color:'grey'}}>Hrs in a week</span></td>
//              <td>600</td>
//              <td></td>
//             </tr>
           
           
          
//           </tbody>
//         </table>

//         </div>
//       </div>
    
//       <div className="container d-flex justify-content-center align-items-center my-3 ">
//         <div className="card card4 w-100 my-3" >
       
//         <div className="card-header text-center">
//         Center
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//           <td>Months</td>
//               <td>      Students    </td>
//               <td>      Batch</td>
//               <td>     No of Hrs in Months    </td>
//               <td>      Fees</td>
//               <td>      Avg Revenue  </td>
              
//            </tr>
          
//             <tr>
//               <td>1st</td>
//               <td>10</td>
//               <td>2</td>
//               <td>20</td>
//               <td>1200</td>
//               <td>12,000/-</td>
//             </tr>
           
//             <tr>
//               <td>3rd</td>
//               <td>15</td>
//               <td>3</td>
//               <td>30</td>
//               <td>1200</td>
//               <td>30,000/-</td>
//             </tr>
//             <tr>
//               <td>6th</td>
//               <td>25</td>
//               <td>5</td>
//               <td>50</td>
//               <td>1200</td>
//               <td>60,000/-</td>
//             </tr>
//             <tr>
//               <td>6th to 10th</td>
//               <td>50</td>
//               <td>6</td>
//               <td>60</td>
//               <td>1200</td>
//               <td>2,40,000/-</td>
//             </tr>
            
//           </tbody>
//         </table>

//         </div>
//       </div>
//       <div className="container d-flex justify-content-center align-items-center my-3 ">
//         <div className="card card5 w-100 my-3" >
       
//         <div className="card-header text-center">
//        Online Tutoring
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//           <td>Students</td>
//               <td>      Per Hour  </td>
//               <td>      Hr in Month</td>
//               <td>    Revenue   </td>
          
              
//            </tr>
          
//             <tr>
//               <td>5</td>
//               <td>150</td>
//               <td>60</td>
//               <td>9,000/-</td>
             
//             </tr>
           
//             <tr>
//               <td>10</td>
//               <td>50</td>
//               <td>120</td>
//               <td>6,000/-</td>
             
//             </tr>
            
//           </tbody>
//         </table>

//         </div>
//       </div>
//       <div className="container d-flex justify-content-center align-items-center my-3 ">
//         <div className="card card6 w-100 my-3" >
       
//         <div className="card-header text-center">
//     Robotics
//           </div>

//           <table className="striped-table content-box ">
        
         
        
//           <tbody>
//           <tr>
//           <td>Students</td>
//               <td>      Per Hour  </td>
//               <td>     Per Students</td>
//               <td>    Revenue   </td>
          
              
//            </tr>
          
//             <tr>
//               <td>10</td>
//               <td>60</td>
//               <td>6,000/-</td>
//               <td>60,000/-</td>
             
//             </tr>
           
           
            
//           </tbody>
//         </table>

//         </div>
//       </div>
//     </>
//   );
// };


// import React, { useState } from 'react';
// import './table.css'; // Importing CSS for styling

// const Tablee = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 1; // Number of tables per page

//   // Handle page change
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       {currentPage === 1 && (
//         <>
//           <div className="card-header text-center">
//             The below financial achieved by spending 3 to 4 hrs in a day
//           </div>
//           <div className="container d-flex justify-content-center align-items-center my-3">
//             <div className="card w-100 my-3">
//               <div className="card-header text-center">Financial Revenue</div>
//               <table className="striped-table content-box">
//                 <tbody>
//                   <tr>
//                     <td>Products</td>
//                     <td colSpan={2}>1st Year</td>
//                     <td colSpan={2}>2nd Year</td>
//                     <td colSpan={2}>3rd Year</td>
//                   </tr>
//                   <tr>
//                     <td></td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                   </tr>
//                   <tr>
//                     <td>Arithmetic Olympiad</td>
//                     <td>1500</td>
//                     <td>60,000/-</td>
//                     <td>3000</td>
//                     <td>1,20,000/-</td>
//                     <td>500</td>
//                     <td>2,00,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>After School Program</td>
//                     <td>100</td>
//                     <td>6,00,000/-</td>
//                     <td>200</td>
//                     <td>12,00,000/-</td>
//                     <td>300</td>
//                     <td>18,00,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Center</td>
//                     <td>50</td>
//                     <td>3,42,00/-</td>
//                     <td>50</td>
//                     <td>7,20,000/-</td>
//                     <td>50</td>
//                     <td>7,20,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Online Tutoring</td>
//                     <td>10</td>
//                     <td>60,000/-</td>
//                     <td>20</td>
//                     <td>1,20,000/-</td>
//                     <td>30</td>
//                     <td>1,80,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Annual Revenue</td>
//                     <td></td>
//                     <td>10,62,00/-</td>
//                     <td></td>
//                     <td>21,60,000/-</td>
//                     <td></td>
//                     <td>29,00,000/-</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}

//       {currentPage === 2 && (
//         <>
//           <div className="card-header text-center">
//             The below financial achieved by spending 3 to 4 hrs in a day
//           </div>
//           <div className="container d-flex justify-content-center align-items-center my-3">
//             <div className="card w-100 my-3">
//               <div className="card-header text-center">Financial Revenue</div>
//               <table className="striped-table content-box">
//                 <tbody>
//                   <tr>
//                     <td>Products</td>
//                     <td colSpan={2}>1st Year</td>
//                     <td colSpan={2}>2nd Year</td>
//                     <td colSpan={2}>3rd Year</td>
//                   </tr>
//                   <tr>
//                     <td></td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                     <td>Students</td>
//                     <td>Revenue</td>
//                   </tr>
//                   <tr>
//                     <td>Arithmetic Olympiad</td>
//                     <td>1500</td>
//                     <td>60,000/-</td>
//                     <td>3000</td>
//                     <td>1,20,000/-</td>
//                     <td>500</td>
//                     <td>2,00,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>After School Program</td>
//                     <td>100</td>
//                     <td>6,00,000/-</td>
//                     <td>200</td>
//                     <td>12,00,000/-</td>
//                     <td>300</td>
//                     <td>18,00,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Center</td>
//                     <td>50</td>
//                     <td>3,42,00/-</td>
//                     <td>50</td>
//                     <td>7,20,000/-</td>
//                     <td>50</td>
//                     <td>7,20,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Online Tutoring</td>
//                     <td>10</td>
//                     <td>60,000/-</td>
//                     <td>20</td>
//                     <td>1,20,000/-</td>
//                     <td>30</td>
//                     <td>1,80,000/-</td>
//                   </tr>
//                   <tr>
//                     <td>Annual Revenue</td>
//                     <td></td>
//                     <td>10,62,00/-</td>
//                     <td></td>
//                     <td>21,60,000/-</td>
//                     <td></td>
//                     <td>29,00,000/-</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}

//       <div className="pagination">
//         {[1, 2].map((page) => (
//           <button key={page} onClick={() => handlePageChange(page)}>
//             {page}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Tablee;
