"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/UI/button"
import  {
  Form,
  FormControl,
  Form,Description,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/UI/input"

const formSchema = z.object({
  wineName: z.string().min(3, {
    message: "Username must be at least 3 characters"
  }).max(50)
})

export function ProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wineName: "",
    }
  })
}

function onSubmit (values: z.infer<typeof formSchema>) {
  console.log(values)
}

function page () {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-gray-900">Create a new Product</h2>
    </div>
  )
}

export default page
