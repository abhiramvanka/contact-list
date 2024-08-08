export const Table = ({dataToDisplay}) => {
 return (
    <div>
      <table>
        <thead>
          {/* {Object.keys(dataObj).map((key) => {
             <th key={key}>{key.toUpperCase()}</th>;
          })} */}
          <th>UserId</th>
          <th>Id</th>
          <th>eddd</th>
          <th>UseerrrerId</th>
        </thead>
        <tbody>
        {dataToDisplay.map((obj, index) =>(
          <tr>
            <td>{obj.userId}</td>
            <td>{obj.id}</td>
            <td>{obj.title}</td>
            <td>{obj.completed.toString()}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}