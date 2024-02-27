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
    id: string;
    name: string;
    framework: string;
  }

export function Remedios({ remedios }: { remedios: Remedio[] }) {
    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Framework</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {remedios.map((remedio) => (
                        <TableRow key={remedio.id}>
                            <TableCell className="font-medium">{remedio.name}</TableCell>
                            <TableCell>{remedio.framework}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Card>
    )
}
