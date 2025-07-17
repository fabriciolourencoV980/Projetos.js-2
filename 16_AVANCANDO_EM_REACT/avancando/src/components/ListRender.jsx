import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Abacaxi", "Melão", "Uva"])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender