const KEY = "users";
function saveUser(userObj){
    let oldData = readUsers(); // Getting the old data thats on local storage at the moment
    oldData.push(userObj); //add the new data to the local storage
    let value = JSON.stringify(userObj); // 'stringify' converts objects to string
    // send the user to the local database
    localStorage.setItem(KEY, value);
}
function readUsers(){
    let data = localStorage.getItem(KEY);
    console.log("readUsers() has fired",data); // <-JSON
    if(!data){//is not data
        return []; //initializing an empty array when the is no data
    }
    else{// we now have data
        let list = JSON.parse(data); // 'parse' is from a string into an object
        return list;
    }
}