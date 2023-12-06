import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function MyMenu() {

  let cafe = useSelector((state)=>{return state}) // Redux store 가져옴
  console.log(cafe.name);
  
  return(
    <div>
      <Table>
      <thead>
        <tr>
          <th>❤️</th>
          <th>Menu Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
        </tr>
      </tbody>
      </Table>
    </div>
  )
}
export default MyMenu;