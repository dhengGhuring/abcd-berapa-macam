import { Link } from "react-router"
import { ButtonCompo, } from "../../components/Button"
import { IoGameController } from "react-icons/io5"

export const HalamanUtama = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold">ABCd Berapa Macam</h1>
                <Link to="/main">
                    <ButtonCompo
                        label="Mulai"
                        onClick={() => { }}
                        startIcon={<IoGameController />}
                    />
                </Link>
            </div>
        </div>
    )
}
