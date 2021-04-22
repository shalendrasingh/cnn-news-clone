import axios from "axios"

function getData(){
  return  axios.get("https://json-server-mocker-mahesh.herokuapp.com/trendingnews")
    
    
}
export {getData}

//  {/* <Link to="">{trending[0]?.heading} </Link>
//                 <Link to="">{trending[1]?.heading} </Link>
//                 <Link to="">{trending[2]?.heading} </Link>
//                 <Link to="">{trending[3]?.heading} </Link> */}
