import { useState } from "react"
import { CardWithForm } from "./components/CardWithForm"
import { Remedios } from "./components/Remedios"

interface Remedio {
  id: string;
  name: string;
  framework: string;
}

function App() {
  const [remedios, setRemedios] = useState<Remedio[]>([])
  
  const handleRemedio = (remedio: Remedio) => {
    console.log(remedio)
    setRemedios((prev) => {
      return [...prev, remedio]
    })
  }
  
  return (
    <div className="m-4 flex flex-row gap-4 justify-start">
      <div>
        <CardWithForm onCreateRemedio={handleRemedio} />
      </div>
      <div className="flex-1">
        <Remedios remedios={remedios} />
      </div>
    </div>
  )
}

export default App
