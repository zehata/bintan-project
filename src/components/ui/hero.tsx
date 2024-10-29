import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Hero() {
    return (
        <div className="flex justify-center">
        <Carousel className="flex h-full justify-center" opts={{loop:true}}>
            <CarouselContent className="carousel-content w-full h-full ml-0">
            {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="pl-0 w-full h-full flex justify-center">
                <div className="w-full h-full">
                    <Card className="rounded-none w-full h-full">
                        <CardContent className="p-0 w-full h-full">
                            <img src={`/${index}.png`} alt="" className="h-full w-full"/>
                        </CardContent>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious className="translate-x-20 scale-150" />
            <CarouselNext className="-translate-x-20 scale-150" />
        </Carousel>
        </div>
    )
}