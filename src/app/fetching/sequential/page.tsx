import Image from 'next/image';

type Dog = {
  message: string;
  status: string;
}

export default async function Page() {
  async function getDog() {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random');
    return dog.json();
  }

  const dogFetched: Dog = await getDog();
  
  return (
    <>
      <div className='flex justify-center mt-4'>
        <Image src={dogFetched.message} alt='random dog' width={800} height={600} />
      </div>
    </>
  )
}