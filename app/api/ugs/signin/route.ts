import { NextResponse } from "next/server";

export async function GET() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("ProjectId", process.env.PROJECT_ID as string);
  var raw = JSON.stringify({
    "username": "mikexie360",
    "password": "Password1!"
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  var responseUGS:string="";
  fetch("https://player-auth.services.api.unity.com/v1/authentication/usernamepassword/sign-in", requestOptions as any)
        .then(response => response.text())
        .then(result => {console.log(result), responseUGS = result;})
        .catch(error => console.log('error', error));
  return NextResponse.json(JSON.parse(responseUGS));
  //return NextResponse.json({"hi": "this is data from 'hello' route"})
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
