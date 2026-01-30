

// Fetch Data from json place holder 
// https://jsonplaceholder.typicode.com/users



const FetchData = async () =>{
    try{
    const Data = await fetch('https://jsonplaceholder.typicode.com/users')
   if(Data){
    const res = await Data.json()
    console.log(res)
   }

    }
    catch(Err){
        console.log(Err || 'Api Error Not able to fetch the data')
    }
  
}