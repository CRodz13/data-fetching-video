import Image from "next/image"

async function getDogs() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-cache',
  })
  const data = await response.json()
  return data
}

export default async function Home() {
  const dogs = await getDogs()

  return (
    <div className="text-center mt-20">
        <h1 className="text-5xl font-bold">Home</h1>
        <Image src={dogs.message} width={500} height={500} alt="dogs" priority/>
    </div>
  )
}
