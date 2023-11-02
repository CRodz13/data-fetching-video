import getUser from "@/app/libs/getUser"

export default async function UserPage({params: {id}}) {
    const userData = await getUser(id)

  return (
    <div>
        <h1 className="text-5xl font-bold">{userData.name}</h1>
    </div>
  )
}
