import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Currency } from "lucide-react";

export async function POST(req: Request) {
  NextResponse.next();
  console.log("getting admin api token");
  var raw = JSON.stringify({
  "scopes": [
    "player_auth.id_provider.create",
    "player_auth.id_provider.delete",
    "player_auth.id_provider.disable",
    "player_auth.id_provider.enable",
    "player_auth.id_provider.get",
    "player_auth.id_provider.list",
    "player_auth.id_provider.update",
    "player_auth.password.update",
    "player_auth.users.delete",
    "player_auth.users.disable",
    "player_auth.users.enable",
    "player_auth.users.get",
    "player_auth.users.list",
    "unity.player_resource_policy.get",
    "player_auth.server.custom_id_auth",
    "multiplay.allocations.create"
  ]
});
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Basic " + process.env.ADMIN_AUTH_BASIC as string);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  var responseUGS:object={};
  await fetch("https://services.api.unity.com"+ "/auth/v1/token-exchange?projectId="+ process.env.PROJECT_ID +"&environmentId="+ process.env.ENV_ID, requestOptions as object)
        .then(response => response.text())
        .then(result => {responseUGS=JSON.parse(result),console.log(responseUGS)})
        .catch(error => console.log('error', error));
  // console.log("responseUGS: " + responseUGS);
  return NextResponse.json(responseUGS);
  // return NextResponse.json({"hi": "this is data from 'hello' route"})
}