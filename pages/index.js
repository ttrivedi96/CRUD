import Link from 'next/link'
import dbConnect from '../db/dbConnect'
import users from '../models/users'

const Index = ({ users }) => (
  <>
    {/* Create a card for each user */}
    {users.map((user) => (
      <div key={user._id}>
        <div className="card">
          <h5 className="pet-name">{user.name}</h5>
          <div className="main-content">
            <p className="pet-name">{user.name}</p>
            <p className="pet-name">{user.email}</p>
            <p className="pet-name">{user.address}</p>
            <p className="pet-name">{user.contact}</p>
            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${user._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Users.find({})
  const users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { users: users } }
}

export default Index