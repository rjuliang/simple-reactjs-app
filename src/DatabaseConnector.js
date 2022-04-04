import Axios from "axios";

const paths= {
    indvCustomer: (id)=> "assets/samplejson/customer" + id + ".json",
    allCustomers: "assets/samplejson/customerlist.json"
}

class DatabaseConnector {

    getIndividualCustomer(id){
        if(!id){
            alert('Error: No ID provided');
            throw "Error: No ID provided";
        }

        return this.getStoredData(paths.indvCustomer(id))
    }

    getAllCustomerInfo(){
        return this.getStoredData(paths.allCustomers)
    }

    getStoredData(path) {
        return Axios.get(path).then();
    }
}

class DataPaths{
    indvidualCustomer(id){
        return "assets/samplejson/customer" + id + ".json";
    }
    allCustomers(){
        return "assets/samplejson/customerlist.json"
    }
}

export default DatabaseConnector;