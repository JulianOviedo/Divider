import { useRef, useState } from 'react';
import {  useLocation } from 'wouter'

export default function Home() {
    const [, setLocation] = useLocation();
    const [error, setError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)

   
  const handleClick = () => {
    if (!inputRef.current || !inputRef.current.value) { 
      setError('Please enter a name');
      return;
    } else {
        localStorage.setItem('groupName', inputRef.current.value);
        setLocation('/add-people')
    }
  };

    return (
        <>
            <header className='flex justify-between p-4 items-center'>
                <a onClick={() => setLocation('/')} className='text-3xl'>&lt;</a>
                <a onClick={handleClick} className='cursor-pointer'>
                    Siguiente
                </a>
            </header>
            <main className='flex justify-center flex-col items-center mt-28 gap-6'>
                <input ref={inputRef} className='rounded-lg p-2 w-3/4 text-black text-center' type="text" placeholder='Christmas' />
                <p>New group name</p>
                {error && <p className='text-red-500'>{error}</p>}
            </main>
        </>
    )
}