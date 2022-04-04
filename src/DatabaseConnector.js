import Axios from "axios";
import DataSourceRoutes from "./DataSourceRoutes";

class DatabaseConnector {
    getDataSourceRoutes(){
        return new DataSourceRoutes();
    }

    getIndividualCustomer(id){
        return this.getStoredData(this.getDataSourceRoutes().individualCustomer(id));
    }

    getAllCustomerInfo(){
        return this.getStoredData(this.getDataSourceRoutes().allCustomers());
    }

    getStoredData(path) {
        return Axios.get(path).then();
    }
}

export default DatabaseConnector;