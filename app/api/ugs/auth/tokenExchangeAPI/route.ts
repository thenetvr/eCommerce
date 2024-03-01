import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req: Request) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic Zjk4ZTk3NzctMzI4MC00M2I4LTg4NTItNTdkZjE3N2YyNjNiOjMtUlY0ODBQaTExdUh6WHhFQmk2NWduRWhCbjJ0NWlW");
    
    const raw = JSON.stringify({
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
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    var returnObject;

    fetch("https://services.api.unity.com/auth/v1/token-exchange?projectId=f1cf9f52-1ce2-4378-95dc-ccb6ece6926d&environmentId=6b126e5e-3d7a-4a4a-a553-b722238e97ae", requestOptions as any)
      .then((response) => response.text())
      .then((result) => {console.log(result); returnObject = result})
      .catch((error) => console.error(error));
    
    return returnObject;
}