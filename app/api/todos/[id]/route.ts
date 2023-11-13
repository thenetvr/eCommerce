import { NextResponse } from "next/server"
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

// retrieve api key, declare it as <type string> and ASSUME it to be with 'as string'
const API_KEY: string = process.env.DATA_API_KEY as string

// READ ONE route == http://localhost:3000/api/todos/:id
export async function GET(request: Request) {
  // get everything AFTER the route (i.e. /todos/id/999 == 999)
  const id = request.url.slice(request.url.lastIndexOf("/") + 1)

  // retrieve data and isolte todo
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
  const todo: Todo = await res.json()

  // error handling for todo id
  if (!todo.id) return NextResponse.json({"message": "Todo not found"})

  // same thing as res.json, but needed for next.js
  return NextResponse.json(todo)
}