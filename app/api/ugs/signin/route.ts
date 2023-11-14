import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: Request) {
  NextResponse.next();
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("ProjectId", process.env.PROJECT_ID as string);


  var raw = JSON.stringify({
    "username": headers().get("username") as string,
    "password": headers().get("password") as string
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  var responseUGS:object={};
  await fetch("https://player-auth.services.api.unity.com/v1/authentication/usernamepassword/sign-in", requestOptions as object)
        .then(response => response.text())
        .then(result => {responseUGS=JSON.parse(result),console.log(responseUGS)})
        .catch(error => console.log('error', error));
  // console.log("responseUGS: " + responseUGS);
  return NextResponse.json(responseUGS);
  // return NextResponse.json({"hi": "this is data from 'hello' route"})
}


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("ProjectId", process.env.PROJECT_ID as string);


// router.get("/signIn", async (req, res) => {
//     try {

//         var raw = JSON.stringify({
//             "username": req.headers.username,
//             "password": req.headers.password
//           });
          
//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             body: raw,
//             redirect: 'follow'
//         };
//         fetch("https://player-auth.services.api.unity.com/v1/authentication/usernamepassword/sign-in", requestOptions)
//         .then(response => response.text())
//         .then(result => {console.log(result),res.json(JSON.parse(result));})
//         .catch(error => console.log('error', error));

//     } catch (err) {
//       res.status(500).send(err)
//       console.error(err)
//     }
// })


// module.exports = router;
