import { p_type } from "./data";

type p ={
    obj: p_type
}

function ProductRow({obj}:p) {
    const name = obj.stocked ? obj.name :
      <span style={{ color: 'red' }}>
        {obj.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{obj.price}</td>
      </tr>
    );
}

export default ProductRow;