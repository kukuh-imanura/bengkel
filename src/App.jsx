import { Button } from "@/components/ui/button"

// Tailwind
export default function App() {
  return (
    <>
      {/* DEFAULT */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* DAISY UI */}
      <button class="btn">Button</button>

      {/* SHADCN UI */}
      <Button>Click me</Button>
    </>
    
  )
}

