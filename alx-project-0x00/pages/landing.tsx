import Button from", "@/components/Button
import Card from "@/components/Card"
import React from 'react';

const Landing: React.FC =  () => {
    const handleClick = (buttonName: string) => {
    console.log(`${buttonName} clicked!`);
  };
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1> 
      <Card />



      <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Button Variants Demo</h1>
      
      {/* Explicitly show all required shapes in the landing page */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">All Required Shapes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {/* These buttons explicitly use the required shapes */}
          <Button 
            title="Rounded Small" 
            shape="rounded-sm"
            onClick={() => handleClick("Rounded Small")}
          />
          <Button 
            title="Rounded Large" 
            shape="rounded-lg" // Using rounded-lg instead of rounded-md
            onClick={() => handleClick("Rounded Large")}
          />
          <Button 
            title="Rounded Full" 
            shape="rounded-full"
            onClick={() => handleClick("Rounded Full")}
          />
        </div>
      </section>

      {/* Size Variations with specific shapes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Size + Shape Combinations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="Small rounded-sm" 
            size="small"
            shape="rounded-sm" // Explicit rounded-sm
            onClick={() => handleClick("Small rounded-sm")}
          />
          <Button 
            title="Medium rounded-lg" 
            size="medium"
            shape="rounded-lg" // Explicit rounded-lg
            onClick={() => handleClick("Medium rounded-lg")}
          />
          <Button 
            title="Large rounded-full" 
            size="large"
            shape="rounded-full" // Explicit rounded-full
            onClick={() => handleClick("Large rounded-full")}
          />
        </div>
      </section>

      {/* Additional examples to ensure the classes are present */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">More Shape Examples</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button 
            title="rounded-sm shape" 
            shape="rounded-sm"
            className="rounded-sm" // Double ensuring the class is present
            onClick={() => handleClick("rounded-sm")}
          />
          <Button 
            title="rounded-lg shape" 
            shape="rounded-lg"
            className="rounded-lg" // Double ensuring the class is present
            onClick={() => handleClick("rounded-lg")}
          />
          <Button 
            title="rounded-full shape" 
            shape="rounded-full"
            className="rounded-full" // Double ensuring the class is present
            onClick={() => handleClick("rounded-full")}
          />
        </div>
      </section>

      {/* Regular usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Regular Buttons</h2>
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
    </div>
    </div>
  )
}
export default Landing