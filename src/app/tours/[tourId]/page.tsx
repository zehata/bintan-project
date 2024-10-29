'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import * as React from "react"
import { format } from "date-fns"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function ViewTour() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="w-full">
      <div className="tour-title mb-4 text-2xl font-bold">8283 2D1N City Tour Bintan Agro Hotel</div>

      <div className="gallery flex-row flex-wrap gap-4 md:columns-3">
        {Array.from({length: 6}).map((_, index) => (
          <img key={index} className="mb-4" src={`/${index}.png`}></img>
        ))}
      </div>

      <div className="package-options">
        <div className="text-red-500 font-bold">Package details</div>

        <div className="package-type mb-4">
          <div>Package type</div>
          <div className="flex justify-start">
            <ToggleGroup type="single" variant="outline">
              <ToggleGroupItem value="1" aria-label="Toggle 1" className="rounded-full">
                8283 2D1N City Tour Bintan Agro Hotel
              </ToggleGroupItem>
              <ToggleGroupItem value="2" aria-label="Toggle 2" className="rounded-full">
                8283 2D1N City Tour Cassia Bintan Hotel
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        <div className="date-options mb-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-64 justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              {date ? format(date, "PPP") : <span>Please select participation date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0 justify-center" align="center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className="whitespace-pre-wrap">{`Availability subject to changes. Please check with us to confirm availability.\n+62 812 7711 2228, Email: navaday123@gmail.com`}</div>
        </div>
        
        <div className="time-options mb-4">
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Please select pick up time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pick up time</SelectLabel>
                <SelectItem value="apple">08:30</SelectItem>
                <SelectItem value="banana">09:30</SelectItem>
                <SelectItem value="blueberry">10:30</SelectItem>
                <SelectItem value="grapes">12:30</SelectItem>
                <SelectItem value="pineapple">13:30</SelectItem>
                <SelectItem value="pineapple">Others</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="quantities">
          <div>Quantity</div>

          <Card className="p-4 mb-2 flex items-center justify-between shadow-none">
            <div>
              Single bed room for 2 pax
            </div>
            <div className="flex flex-row">
              <Button variant="outline" className="rounded-none rounded-l-md w-10 h-10">-</Button>
              <Input className="rounded-none border-x-0 w-10 h-10" type="number"></Input>
              <Button variant="outline" className="rounded-none rounded-r-md w-10 h-10">+</Button>
            </div>
          </Card>

          <Card className="p-4 mb-2 flex items-center justify-between shadow-none">
            <div>
              Twin bed room for 2 pax
            </div>
            <div className="flex flex-row">
              <Button variant="outline" className="rounded-none rounded-l-md w-10 h-10">-</Button>
              <Input className="rounded-none border-x-0 w-10 h-10" type="number"></Input>
              <Button variant="outline" className="rounded-none rounded-r-md w-10 h-10">+</Button>
            </div>
          </Card>

        </div>

        <div className="cta flex justify-end py-4">
          <Button size="lg" className="bg-red-400 text-2xl h-14">Book Now</Button>
        </div>
      </div>

      <div className="details">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">What’s included:</AccordionTrigger>
          <AccordionContent className="text-md whitespace-pre-wrap">
            {`1 Night Stay at Bintan Island Hotel Rooms are all based on Availability.\nTwo ways return ferry with all the taxes and levies (Bintan Resort Ferries).\nAll lands transfer in Bintan (Within the packages).\nBintan City Tour :\n(Bintan Sand Dune, Blue Lake, 500 Arahants Temple, Kwan Im Temple, southern town)\n60 min of Traditional Indonesia Massage.\n1st day Set Lunch.\nFree BBC Afternoon Tea Time with Min 2 Pax.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">Booking Information:</AccordionTrigger>
          <AccordionContent className="text-md whitespace-pre-wrap">
          {`Package validity 10 October – 20 December 2024.\nThis package requires a minimum of 1 single bed room or 1 twin bed room\nRoom occupancies are based on 2 adults in one room and maximum 3 adults or 2 adults plus 1 child. \nChildren must be accompanied by a paying adult \nFree for children aged 0-3, children are aged 4 - 11 years old\nChildren aged 12+ will be charged the same rate as adults\nFor the Full Body Massage, participants must be aged 9 and above\nPrice above does not include Visa on Arrival. For more information please contact our Indonesian Embassy in your country.\nThere are no additional charges for hotels during weekends.\nThere are no surcharges for hotels during peak periods only for BINTAN AGRO HOTEL.\nFerry timing are fixated on Tanah Merah Ferry Terminal to Bandar Bentan Telani  08:10 / 11:10 and Bandar Bentan Telani to Tanah Merah Ferry Terminal 14:35/18:35\nRates are quoted in Singapore dollar and per person basis.\nPrice is not including other personal expenses.\nPrice is not including Travel Insurance.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">Itinerary</AccordionTrigger>
          <AccordionContent className="text-md whitespace-pre-wrap">
          {`Pick up from designated pick-up point \nThe operator will reconfirm your pick-up time via WhatsApp/Telegram\nArrive at the designated location 10 minutes before your selected pick up time\n\nDay 1: Upon arrival in Bandar Bentan Telani Ferry Terminal, you will be warmly welcomed by our guide, we'll dive into exploring the wonders of Bintan Island. Our first stop\nwill be the breathtaking Bintan Sand Dunes and Blue Lake, offering stunning desert-like landscapes and a mesmerizing azure lake. Then, we'll visit the majestic 500 Arahants\nTemple to soak in its tranquil atmosphere and marvel at its intricate architecture. After refuelling with a delicious Indonesian lunch, we'll continue our adventure with a\nvisit to Kwan Im Temple, a symbol of peace and harmony. To end the day on a blissful note, we'll treat ourselves to a relaxing massage at the Massage Center, followed by a\ndelightful tea break at BBC before checking into the hotel.\n\nDay 2: Enjoy a leisurely morning as today is free and easy. After breakfast, take the opportunity to explore the surrounding area at your own pace or simply relax by the\npool. Our guide will assist in arranging transportation to your respective ferry terminal, ensuring a seamless departure. Don't forget to inform the hotel's Front Office\nbefore heading to Ferry Terminal.\n\n** The itinerary mentioned above is subject to possible variations based on weather conditions and timing. Please note that the provided itinerary is intended solely as a reference and may be adjusted accordingly.`}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-md">Cancellation policy</AccordionTrigger>
          <AccordionContent className="text-md whitespace-pre-wrap">
          {`No cancellations, refunds, or changes can be made.\n\nIn case of unforeseen events or extreme weather, the operator reserves the right to cancel the tour. If this happens, you have the option to reschedule`}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>

      <div className="contacts">
        <div className="p-4 pl-0 font-bold">
          {`Contact us`}
        </div>

        <div className="p-4 pl-0 flex items-center">
          <div className="w-14 h-14 mr-4">
            <AspectRatio ratio={1} className="w-full h-full">
              <img src="/whatsapp.png" className="w-full h-full"/>
            </AspectRatio>
          </div>
          <div className="font-bold">
            {`WhatsApp `}<span className="text-red-500">{`chat us`}</span>{` now:`}
          </div>
          <div>
            {`+62 812 7711 2228`}
          </div>
        </div>
        
        <div className="p-4 pl-0 flex items-center">
          <div className="w-14 h-14 mr-4">
            <AspectRatio ratio={1} className="w-full h-full">
              <img src="/email.png" className="w-full h-full"/>
            </AspectRatio>
          </div>
          <div className="font-bold">
            {`Email:`}
          </div>
          <div>
            {`navaday123@gmail.com`}
          </div>
        </div>
      </div>
      
      <div className="fixed right-20 bottom-20">
        <Button variant="outline" className="w-fit h-fit flex items-center p-4 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all text-2xl">
          <div className="mx-4">
            {`Chat with us now`}
          </div>
          <img src="/whatsapp.png"/>
        </Button>
      </div>
    </div>
  )
}
