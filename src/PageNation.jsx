import { useState, useEffect } from 'react';
import { Table } from './Table';
export const PageNation = () => {
const [data, setData] = useState([]);
const [currentPageNumber, setCurrentPageNumber] = useState(1);
const [dataToDisplay, setDataToDisplay] = useState([]);
const TOTAL_VALUES_PER_PAGE = 10;

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => setData(json));
      console.log('ffff', data);
      },[])
const goOnPrevPage = () => {
    if (currentPageNumber === 1) return;
    setCurrentPageNumber((prev) => prev - 1);
  };

  const goOnNextPage = () => {
    if (currentPageNumber === data.length / TOTAL_VALUES_PER_PAGE) return;
    setCurrentPageNumber((prev) => prev + 1);
  };
  const handleSelectChange = (e) => {
    setCurrentPageNumber(e.target.value);
  };

  useEffect(() => {
    const start = (currentPageNumber - 1) * TOTAL_VALUES_PER_PAGE;
    const end = currentPageNumber * TOTAL_VALUES_PER_PAGE;
    setDataToDisplay(data.slice(start, end));
  }, [currentPageNumber, data]);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div id="container">
      <Table dataToDisplay={dataToDisplay} />
      <div id="btn-container">
        <button onClick={goOnPrevPage}>Prev</button>
        <button onClick={goOnNextPage}>Next</button>
      </div>
      <div id="page-no-dropdown">
        <select
          name="page-number"
          onChange={handleSelectChange}
          value={currentPageNumber}
        >
          {Array.from(Array(data.length / TOTAL_VALUES_PER_PAGE))
            .map((e, i) => i + 1)
            .map((val) => {
              return <option key={val}>{val}</option>;
            })}
        </select>
      </div>
    </div>
  );
}