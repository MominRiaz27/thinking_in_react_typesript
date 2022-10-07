import { p_type } from "./data"
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
//import PRODUCTS from "./data";
// type mydata = {
//      category:string,
//      price:string,
//      stocked:boolean,
//      name:string 
//  }
 export type myProps = {
    myobject : p_type[]
 }

function FilterableProductTable ( {myobject} : myProps) {
    return (
        <div>
        <SearchBar />
        <ProductTable myobject={myobject} />
      </div>
    )
}

export default FilterableProductTable;