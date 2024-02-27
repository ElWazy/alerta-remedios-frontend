import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from "./ui/card"

interface Remedio {
    id?: number;
    nombre: string;
    precio: number;
    descripcion: string;
    fecha_modificacion?: string | Date;
    fecha_vencimiento: string | Date;
}

export function Remedios({ remedios }: { remedios: Remedio[] }) {
    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Due Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {remedios.map((remedio) => (
                        <TableRow key={remedio.id}>
                            <TableCell>{remedio.id}</TableCell>
                            <TableCell>{remedio.nombre}</TableCell>
                            <TableCell>{remedio.precio}</TableCell>
                            <TableCell>{remedio.descripcion}</TableCell>
                            <TableCell>{remedio.fecha_vencimiento as string}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">{remedios.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Card>
    )
}
