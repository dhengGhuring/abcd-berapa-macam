import { Link } from "react-router"

export const HalamanUtama = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold">ABCd Berapa Macam</h1>
                <Link to="/main">
                    <button className="rounded-full bg-blue-500 px-5 py-2.5 text-white hover:bg-blue-600 cursor-pointer">Mulai</button>
                </Link>
            </div>
        </div>
    )
}
