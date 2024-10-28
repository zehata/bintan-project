import Hero from "@/components/ui/hero"
import * as React from "react"

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="p-24 flex justify-center items-center">
        <div className="w-3/4">
          <div className="text-7xl font-bold p-4 pl-0">Bintan Island.</div>
          <div className="text-xl">
            <div className="p-4 pl-0">
              Bintan Island or Negeri Segantang Lada is an island in the Riau archipelago of Indonesia. It is part of the Riau Islands province, the capital of which, Tanjung Pinang, lies in the island's south and is the island's main community.
            </div>
            <div className="p-4 pl-0">
              Bintan's land area is 1,173 square kilometres (453 sq mi) (total area is 60,057 square kilometres (23,188 sq mi) including 96% sea area). Its administrative region is designated the Bintan Regency, one of the six administrative regencies of the Riau Islands province. The city of Tanjung Pinang is an autonomous area geographically within Bintan Island but not included in the Regency.
            </div>
            <div className="p-4 pl-0">
              Bintan's history is traced to the early 3rd century. The island flourished as a trading post on the route between China and India, and over the centuries it came under the control of the Chinese, the British, and then the Dutch when it was declared part of the Dutch East Indies through the Anglo-Dutch Treaty of 1824. In the 12th century, the Bintan island in the Strait of Malacca was known as the "Pirate Island" since the Malay pirates used to loot trading ships sailing in these waters.
            </div>
            <div className="p-4 pl-0">
              Singapore, the closest major city, is a 45-50 minute trip by motorised catamaran across the Singapore Strait from Bintan Resort area in the northwest of the island. The island has beaches with beach-front hotels and resorts; the most prominent of these beaches is the Bintan Resorts set over an area of 300 hectares (740 acres) of tropical environment. The archipelago of the Riau islands is right opposite to this resort across the South China Sea. Indonesia is promoting Bintan as the next best tourist destination after Bali.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
