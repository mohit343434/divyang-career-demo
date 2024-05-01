import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectOption({placeholder , selectlabel , options , defaultvalue}) {
  return (
    <Select value={defaultvalue} >
      <SelectTrigger >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          <SelectLabel>{selectlabel}</SelectLabel>
          {
            options.map((e)=>{
              return(
                <SelectItem key={e.value} value={e.value}>{e.value}</SelectItem>
              )
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
