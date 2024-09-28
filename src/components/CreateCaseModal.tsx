import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { NewCaseForm } from "./NewCaseForm"

type CreateCaseModalProps = {
  selectedLocation?: "CABA" | "Provincia"
}

export function CreateCaseModal({ selectedLocation }: CreateCaseModalProps) {
  return (
    <DialogContent className="">
      <DialogHeader>
        <DialogTitle>¿Qué necesitás que haga un abogado?</DialogTitle>
        <DialogDescription>
          Describí tus necesidades legales. Incluí tantos detalles como sea posible, ya que esto nos ayudará a
          identificar a los mejores abogados para tu caso.
        </DialogDescription>
      </DialogHeader>
      <NewCaseForm selectedLocation={selectedLocation} />
    </DialogContent>
  )
}
