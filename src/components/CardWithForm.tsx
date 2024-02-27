import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerWithPresets } from './DatePickerWithPresets'

interface Remedio {
  id?: number;
  nombre: string;
  precio: number;
  descripcion: string;
  fecha_modificacion?: string | Date;
  fecha_vencimiento: string | Date;
}

const saveRemedio = async (remedio: Remedio) => {
  const response = await fetch('http://127.0.0.1:8000/remedios/', {
    method: 'post',
    body: JSON.stringify(remedio),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const newRemedio = await response.json() as Remedio
  return newRemedio
}

export function CardWithForm({ onCreateRemedio }: { onCreateRemedio: (remedio: Remedio) => void }) {
  const [nombre, setNombre] = useState<string>('')
  const [descripcion, setDescripcion] = useState<string>('')
  const [precio, setPrecio] = useState<number>(0)
  const [fechaVencimiento, setFechaVencimiento] = useState<Date>()

  const handleDateChange = (date: Date) => {
    console.log(date)
    setFechaVencimiento(date)
  }

  const handleSubmit = async () => {
    const newRemedio: Remedio = {
      nombre,
      precio,
      descripcion,
      fecha_vencimiento: fechaVencimiento as Date,
    }
    const remedioCreated = await saveRemedio(newRemedio)
    onCreateRemedio(remedioCreated)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Remedio</CardTitle>
        <CardDescription>Your new remedio.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Name</Label>
              <Input id="nombre" placeholder="Nombre del remedio" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="precio">Precio</Label>
              <Input id="precio" placeholder="¿Cuanto cuesta el remedio?" type='number' value={precio} onChange={(e) => setPrecio(Number(e.target.value))} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descripcion">Descripcion</Label>
              <Input id="descripcion" placeholder="¿Algo que destacar?" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descripcion">Fecha Vencimiento</Label>
              <DatePickerWithPresets onDateSelected={handleDateChange} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSubmit}>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
