import Button from "@/components/Button";


const Home: React.FC = () => {

    const handleClick = (buttonName: string) => {
    console.log(`${buttonName} clicked!`);
    // Add your click logic here
  };
  
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button>
       <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Button Variants Demo</h1>
      
      {/* Size Variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Size Variations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Small Button" 
            size="small"
            onClick={() => handleClick("Small")}
          />
          <Button 
            title="Medium Button" 
            size="medium"
            onClick={() => handleClick("Medium")}
          />
          <Button 
            title="Large Button" 
            size="large"
            onClick={() => handleClick("Large")}
          />
        </div>
      </section>

      {/* Shape Variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Shape Variations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Slightly Rounded" 
            shape="rounded-sm"
            onClick={() => handleClick("Rounded-sm")}
          />
          <Button 
            title="Medium Rounded" 
            shape="rounded-md"
            onClick={() => handleClick("Rounded-md")}
          />
          <Button 
            title="Fully Rounded" 
            shape="rounded-full"
            onClick={() => handleClick("Rounded-full")}
          />
        </div>
      </section>

      {/* Size + Shape Combinations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Combinations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Small & Round" 
            size="small"
            shape="rounded-full"
            onClick={() => handleClick("Small Round")}
          />
          <Button 
            title="Large & Sharp" 
            size="large"
            shape="rounded-sm"
            onClick={() => handleClick("Large Sharp")}
          />
          <Button 
            title="Medium Pill" 
            size="medium"
            shape="rounded-full"
            className="px-8" // Extra horizontal padding for pill shape
            onClick={() => handleClick("Medium Pill")}
          />
        </div>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Disabled State</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Disabled Button" 
            disabled={true}
            onClick={() => handleClick("Disabled")}
          />
          <Button 
            title="Disabled Large" 
            size="large"
            shape="rounded-full"
            disabled={true}
            onClick={() => handleClick("Disabled Large")}
          />
        </div>
      </section>

      {/* Custom Styling Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Custom Styling</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Red Button" 
            className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
            onClick={() => handleClick("Red Button")}
          />
          <Button 
            title="Green Large" 
            size="large"
            shape="rounded-full"
            className="bg-green-500 hover:bg-green-600 focus:ring-green-500"
            onClick={() => handleClick("Green Large")}
          />
          <Button 
            title="Purple Small" 
            size="small"
            className="bg-purple-500 hover:bg-purple-600 focus:ring-purple-500"
            onClick={() => handleClick("Purple Small")}
          />
        </div>
      </section>
    </div>
    </main>
  )
}

export default Home;