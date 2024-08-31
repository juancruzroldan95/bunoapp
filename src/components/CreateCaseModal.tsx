import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { NewCaseForm } from "./NewCaseForm"

export function CreateCaseModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="text-md">Publicá tu caso</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>¿Qué necesitás que haga un abogado?</DialogTitle>
          <DialogDescription>
            Describí tus necesidades legales. Incluí tantos detalles como sea posible, ya que esto nos ayudará a identificar a los mejores abogados para tu caso. 
          </DialogDescription>
        </DialogHeader>
        <NewCaseForm />
      </DialogContent>
    </Dialog>
  )
}
