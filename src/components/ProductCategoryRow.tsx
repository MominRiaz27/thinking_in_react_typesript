import { p_type } from "./data";

function ProductCategoryRow({ category }:p_type) {
    return (
      <tr>
        <th >
          {category}
        </th>
      </tr>
    );
  }

  export default ProductCategoryRow;