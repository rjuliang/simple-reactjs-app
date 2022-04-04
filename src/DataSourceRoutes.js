class DataSourceRoutes{
    dataRoot(){
        return "assets/samplejson/"
    }

    individualCustomer(id){
        return this.dataRoot() + "customer" + id + ".json";
    }
    
    allCustomers(){
        return this.dataRoot() + "customerlist.json"
    }
}

export default DataSourceRoutes;