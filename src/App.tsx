import { useEffect, useState } from "react"
import { CardWithForm } from "./components/CardWithForm"
import { Remedios } from "./components/Remedios"

interface Remedio {
  id?: number;
  nombre: string;
  precio: number;
  descripcion: string;
  fecha_modificacion?: string | Date;
  fecha_vencimiento: string | Date;
}

const getAllRemedios = async () => {
  const response = await fetch('http://127.0.0.1:8000/remedios/')
  const remedios = await response.json() as Remedio[]
  return remedios
}


function App() {
  const [remedios, setRemedios] = useState<Remedio[]>([])

  useEffect(() => {
    getAllRemedios()
      .then((nuevosRemedios) => setRemedios(nuevosRemedios))
  }, [])

  const handleRemedio = (remedio: Remedio) => {
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
