export default function Users({ users }) {
  console.log(users)
    let users_element = users?.map(user => <p key={user.name}>{user.name}</p>)
    return (
    <div className="Users">
        <h1>Users</h1>
        <p>This is where all the users are listed</p>
        {users_element}
    </div>
  )
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users`
  console.log(url)
  const res = await fetch(url)
  const data = await res.json()
  const users = data.users
  return {
    props: {
      users,
    },
  }
}