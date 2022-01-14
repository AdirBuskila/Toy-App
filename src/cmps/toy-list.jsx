import { ToyPreview } from "./toy-preview.jsx"

export function ToyList({toys}) {

    return (
        <main className="toy-list">
            {toys.map((toy)=> {
                return <ToyPreview toy={toy} key={toy._id} />
            })}
        </main>
    )

}