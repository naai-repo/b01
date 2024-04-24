'use client';
import Image from "next/image";
import './st.css'
import Map, {Marker} from 'react-map-gl';
let token  = 'pk.eyJ1IjoibXlwZXJybyIsImEiOiJjbDRmZGVwNmwwMjlmM3BvZm02czd5ZWhlIn0.vjixPEoZnR1G6QmKxMva2w'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import { Moon, Sun } from "lucide-react"
  import { useTheme } from "next-themes"
  
  import { z } from "zod"
  
  import { Input } from "@/components/ui/input"
  import { toast } from "@/components/ui/use-toast"
  import { Label } from "@/components/ui/label"
  
  
export default function About() {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center">
    <Map
    mapboxAccessToken="pk.eyJ1IjoibXlwZXJybyIsImEiOiJjbDRmZGVwNmwwMjlmM3BvZm02czd5ZWhlIn0.vjixPEoZnR1G6QmKxMva2w"
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 5.5
    }}
    style={{width: 500, height: 250}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Marker longitude={-100} latitude={40} anchor="bottom" >
      {/* <div style={{"background":'red'}}>hjh</div> */}
    </Marker>
  </Map>
  </div>
  <main className="flex items-center justify-center p-10 w-fit">
      <div className="flex flex-col h-screen">
        {/* <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1> */}
        <div className="mt-10 flex-grow ">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-96 mx-auto" data-v0-t="card">

            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Naai.com</h3>
              <p className="text-sm text-muted-foreground">Enter your details to proceed further</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Input
                      className="h-20 px-3 rounded-md border pt-5 bg-gray-100 border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600"
                      id="email"
                      placeholder="1/3 Gandhi Irwin Road Super Complex"
                      type="text"
                    />
                    <Label
                      className="absolute left-3 top-2 text-sm font-medium align-baseline text-black transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600 dark:text-gray-400 dark:peer-focus:text-gray-300"
                      htmlFor="email"
                    >
                      Address Preview:
                    </Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=""
                  >
                    Building/Plot No.
                  </label>
                  <input
                    className="bg-gray-100 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    placeholder="Enter Address"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=""
                  >
                    Floor/Phase
                  </label>
                  <input
                    className=" bg-gray-100 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    placeholder="Enter address"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor=""
                  >
                    Address Line 2
                  </label>
                  <input
                    className="bg-gray-100 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    placeholder="Enter address"
                    type="text"
                  />
                </div>



              </div>
            </div>
            <div className="flex items-center p-6">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Continue
              </button>

            </div>
          </div>
        </div>
        <footer className="bg-gray-800 p-4 text-center text-white">
          <p>© 2024 Naai. All rights reserved.</p>
        </footer>
      </div>
    </main>
  </div>
  );
}
