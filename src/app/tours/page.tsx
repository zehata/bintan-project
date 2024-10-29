import { Card, CardContent } from "@/components/ui/card"
import * as React from "react"

export default function Tours() {
  return (
    <div className="flex-row flex-wrap gap-4 md:columns-2">
        {Array.from({length: 6}).map((_, index) => (
            <Card key={`tour${index}`} className="flex-grow mb-4 shadow-sm hover:shadow-lg transition-all overflow-hidden">
                <CardContent className="p-0 relative">
                    <img src={`/${index}.png`} alt=""/>
                    <div className="absolute bottom-0 w-full">
                        <div className="bg-white absolute w-full h-full"></div>
                        <div className="relative p-6 text-slate-500">
                            <div>{`828x`}</div>
                            <div>{`Text`}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        ))}
    </div>
  )
}
