import { p_type } from "./data";
import { myProps } from "./FilterableProductTable";
//import { p_type } from "./data";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


function ProductTable({ myobject }:myProps) {
    const rows : JSX.Element[] = [];
    let lastCategory:unknown = null;
  
    myobject.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category}/>
        );
      }
      rows.push(
        <ProductRow obj={product} key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
export default ProductTable;  