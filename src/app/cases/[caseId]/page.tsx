import React from "react"
import { getCaseById } from "@/lib/cases/getCaseById"
import { MapPin, Briefcase, Calendar } from "lucide-react"

export default async function CaseDetailPage({ params }: { params: { caseId: string } }) {
  const caseData = await getCaseById(params.caseId)

  return (
    <div className="p-16 max-w-7xl m-auto">
      <div className="bg-white rounded shadow-md">
        <div className="flex flex-row">
          <div className="w-1/4 px-4">
            <h4 className="text-xl font-bold py-4">Detalles del caso</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <li className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Ubicación:</span>
                </div>
                <span>{caseData?.location}</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Categoría:</span>
                </div>
                <span>{caseData?.category}</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-semibold">Creado el:</span>
                </div>
                <span>15/04/2023</span>
              </li>
            </ul>
          </div>
          <div className="w-3/4 flex flex-col">
            <h3 className="text-2xl font-bold pt-8">Descripción del caso</h3>
            <hr className="w-full my-4" />
            <p className="pb-32">{caseData?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
