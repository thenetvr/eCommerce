import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Currency } from "lucide-react";

export async function POST(req: Request) {
  var playerId = "";
  var idToken = "";
  var currencyId = "";
  NextResponse.next();

  var raw = JSON.stringify({
    "amount": Number(headers().get("amount")),
    "currencyId": headers().get("currencyId")
  });

  playerId = headers().get("playerId") as any;
  idToken = headers().get("idToken") as any;
  currencyId = headers().get("currencyId") as string;
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("ProjectId", process.env.PROJECT_ID as string);
  myHeaders.append("unity-installation-id", "<string>");
  myHeaders.append("analytics-user-id", playerId);
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization","Bearer "+idToken);
  console.log(playerId);
  console.log("Bearer "+idToken);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  var responseUGS:object={};
  await fetch("https://economy.services.api.unity.com/v2/projects/"+ process.env.PROJECT_ID +"/players/"+playerId+"/currencies/"+ currencyId+"/increment", requestOptions as object)
        .then(response => response.text())
        .then(result => {responseUGS=JSON.parse(result),console.log(responseUGS)})
        .catch(error => console.log('error', error));
  // console.log("responseUGS: " + responseUGS);
  return NextResponse.json(responseUGS);
  // return NextResponse.json({"hi": "this is data from 'hello' route"})
}