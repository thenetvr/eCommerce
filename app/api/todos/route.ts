import { NextResponse } from "next/server"

// sends data for CRUD methods
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

// retrieve api key, declare it as <type string> and ASSUME it to be with 'as string'
const API_KEY: string = process.env.DATA_API_KEY as string

// READ route == http://localhost:3000/api/todos
export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  // for typescipt, ALWAYS DECLARE TYPE WITH variable: Type
  const todos: Todo[] = await res.json()

  // same thing as res.json, but needed for next.js
  return NextResponse.json(todos)
}

// POST http://localhost:3000/api/todos
export async function POST(request: Request) {
  // declare type with variable: type (Partial == only SOME of the type)
  const { userId, title }: Partial<Todo> = await request.json()
  
  // error handling
  if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed: false
    })
    
  })

  const newTodo: Todo = await res.json()

  return NextResponse.json(newTodo)
}

// PUT http://localhost:3000/api/todos
export async function PUT(request: Request) {
  // require ALL attributes of type
  const { userId, id, title, completed }: Todo = await request.json()
  
  // error handling
  if (!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({ "message": "Missing required data" })

  // get data for SPECIDIC ID
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed
    })
    
  })

  const updatedTodo: Todo = await res.json()

  return NextResponse.json(updatedTodo)
}

// DELETE http://localhost:3000/api/todos
export async function DELETE(request: Request) {
  // declare type with variable: type (Partial == only SOME of the type)
  const { id }: Partial<Todo> = await request.json()
  
  if (!id) return NextResponse.json({ "message": "Todo id required" })

  // get data for SPECIDIC ID
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    }
  })

  return NextResponse.json({ "message": `Todo ${id} deleted`})
}