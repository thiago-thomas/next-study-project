import React from 'react'

async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return res.json()
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
  return res.json()
}

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1');
  return res.json()
}

export default async function ParallelPage() {
  const userData = getUser()
  const postsData = getPosts()
  const todosData = getTodos()

  // Fetching in Parallel
  const [user, posts, todos] = await Promise.all([userData, postsData, todosData])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Parallel Data Fetching Example</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">User Info</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Posts</h2>
          <ul className="space-y-2">
            {posts.slice(0, 3).map((post: any) => (
              <li key={post.id} className="border-b pb-2">
                <h3 className="font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.body.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Todos</h2>
          <ul className="space-y-2">
            {todos.slice(0, 5).map((todo: any) => (
              <li key={todo.id} className="flex items-center gap-2">
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
