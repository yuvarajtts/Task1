import React,{useEffect, useState} from 'react';
import './App.css';
import SampleData from './SampleData.json'
import ReactPaginate from 'react-paginate';
import { PieChart } from 'react-minimal-pie-chart';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// import { Checkbox } from 'reactstrap'; 
function App() {
  const Data = SampleData;
  
  const [count,setCount] = useState(0);
  const [result,setResult] = useState();
  const [counter, setCounter] = useState(60);
  const [pageNumbers,setPageNumbers] = useState(1);
  const [chart ,setChart] =  useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
 /*  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10); */
  const itemsPerPage = Data.option;
  console.log(Data);
  // console.log(Data.answer);
  // console.log(itemsPerPage)

/*   const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const currentRecords = Data.slice(indexOfFirstRecord, 
  indexOfLastRecord);
  const nPages = Math.ceil(Data.length / recordsPerPage) */

/*   React.useEffect = (() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]); */
  let interval = null;
  useEffect(() => {
    const myInterval = () => {
      if (counter > 1) {
        setCounter((state) => state - 1);
      } else if (counter !== 0) {
        setCounter(0);
        clearInterval(interval);
      }
    };
    interval = setInterval(myInterval, 1000);
    return () => {
      clearInterval(interval);
    };
  },[counter])


const onClickNext =() =>{
  setCount(count + 1);
  setCounter(60);
  
  
}
const onClickPrevious = () =>{
  setCount(count-1);
}




  const onCheckBox = (value1) =>{
    console.log('value',value1)
    Data.map((value) => {
      
        switch (value != '') {
          case value1 === 'Hyper Text Markup Language':
            result.push('Hyper Text Markup Language')
            setResult(result + 1);
            // setResult('Hyper Text Markup Language')
            console.log('correct answer')
            break;
            case value1 === 'The World Wide Web Consortium':
              setResult(result + 1);
              // setResult('The World Wide Web Consortium')
              break;

              case value1 === '<h1>':
                setResult(result + 1);
                break;

                case value1 === '<br>':
                  setResult(result + 1);
                break;

                case value1 === `<body style='background-color:yellow;'>`:
                  setResult(result + 1);
                break;
                case value1 === '<b>':
                  setResult(result + 1);
                break;
                case value1 === '<i>':
                  setResult(result + 1);
                break;
                
                case value1 === `<a href='http://www.w3schools.com'>W3Schools</a>`:
                  setResult(result + 1);
                break;
                case value1 === '/':
                  setResult(result + 1);
                  break;
                  case value1 === `<a href='url' target='_blank'>`:
                    setResult(result + 1);
                  break;
          default:
            break;
        }
    })
  }
  console.log('result',result);
  return (
    <div className="App">
      <div className='heading'>
          Quiz Application
      </div>
      <div className='main'>
        <hr/> 
          HTML Quiz  <p style={{textAlign:'right'}}>timer:00:{counter}</p>
        <hr/>
        <div className='question'>
         {Data.map((value,index) => 
           { 
          while(index === count){
            console.log("value",value.question)
           return( 
            <div>
            <p style={{fontSize:'25px',paddingRight:'100px'}}>{index+1}.{value.question}</p>
            {value.option.map((value1,index1)=>{
              console.log(value1);
               return (
              
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div  style={{width:'20%'}}>
                  <input type='checkbox' className='btn btn-primary' id={`seleted${index1}`} name={value1} onChange={() => onCheckBox(value1)}/>
                    </div>

                    <div style={{width:'40%'}}>
                    <p key={index1}>{value1}</p>
                    </div>
                </div>
               )
            })}
            
            </div>
            
           )
          }
         }
         )}
        </div>
      </div>
      
      <div className='footer'>
     <hr/>
      <input type='button' className='btn btn-info' value={"Previous"} style={{margin:'15px'}}onClick={onClickPrevious}></input>
    

{Data.map((value,index) => {
  <div
   style={{background:'#ccc',height: 40,
   width: 40,
   marginRight: 19,
   marginBottom: 5,}}
 >
   {value + 1}
 </div>
})}
  
     
         <input type='button' className='btn btn-info' value={"next"} style={{margin:'15px'}} onClick={onClickNext}></input> 
        
        <input type='button' className='btn btn-primary' value={'Submit'} style={{margin:'15px'}} onClick={() => setChart(true)}  />
      </div>
      {chart ? 
      <PieChart
        data={[
          { title: 'one', value:13  ,color: '#E38627' },
          { title: 'Two', value: 5, color: '#C13C37' },
          
        ]}
        label={(labelRenderProps) =>
          result }
        style={{width:'50%',height:'50%'}}
      /> : ''}
      
    </div>
  );
}

export default App;
