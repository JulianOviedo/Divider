import { Link } from "wouter";

export default function Index () {
    return (
        <>
        <h1 className="text-3xl font-bold  text-center p-4">DIVIDER</h1>
        <h3 className="text-center mt-8">Lets get started !</h3>
        <div className="absolute top-2/4 w-full flex justify-center">
          <Link href="/home">
        <button className="rounded-3xl bg-white text-orange-400 py-4 px-20 text-sm">New Join</button>
         </Link>
        </div>
        </>
    )
}