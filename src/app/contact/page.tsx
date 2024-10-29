import Hero from "@/components/ui/hero"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import * as React from "react"

export default function Home() {
  return (
    <>
      <div className="p-24 flex justify-center items-center">
        <div className="w-3/4">
          <div className="text-2xl">

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

            <div className="p-4 pl-0 font-bold">
              {`Our Address`}
            </div>
            <div className="p-4 pl-0 whitespace-pre-wrap">
              {`Bintan island\nKp Lembah Rantau, No:1\nKota Tanjungpinang 29124, Kepulauan Riau\nIndonesia`}
            </div>
            <div className="p-4 pl-0">
              {`If you have any inquiries or would you like to have a Tour Customization please feel free to contact us.`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
