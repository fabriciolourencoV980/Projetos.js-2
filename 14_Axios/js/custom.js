const postFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", 
    headers:{
        Accept: "application/json", 
        Autorization: "meunovotoken", 
    }
})