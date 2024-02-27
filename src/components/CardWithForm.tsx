import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Remedio {
  id: string;
  name: string;
  framework: string;
}

export function CardWithForm({ onCreateRemedio }: { onCreateRemedio: (remedio: Remedio) => void }) {
  const [name, setName] = useState("")
  const [framework, setFramework] = useState("")

  const handleSubmit = () => {
    const newRemedio: Remedio = {
      id: uuidv4(),
      name,
      framework,
    }
    onCreateRemedio(newRemedio)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select onValueChange={(e) => setFramework(e.valueOf())}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Next.js">Next.js</SelectItem>
                  <SelectItem value="SvelteKit">SvelteKit</SelectItem>
                  <SelectItem value="Astro">Astro</SelectItem>
                  <SelectItem value="Nuxt.js">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
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
