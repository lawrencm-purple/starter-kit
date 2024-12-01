import React from 'react'

type Props = {}

const Tokens = (props: Props) => {

const cols = [
"background",
"foreground",
"muted",
"muted-foreground",
"popover",
"popover-foreground",
"border",
"input",
"card",
"card-foreground",
"primary",
"primary-foreground",
"secondary",
"secondary-foreground",
"accent",
"accent-foreground",
"destructive",
"destructive-foreground",
"ring"]



    
    return (
        <div className='mt-4'>
            
            <h2>Colors</h2>
            <div className="flex flex-row justify">
      <div className="bg-white w-20 h-20 text-white"> white</div>
      <div className="bg-purple w-20 h-20 text-white">purple</div>
      <div className="bg-midnight w-20 h-20 text-white">midnight</div>
      <div className="bg-metal w-20 h-20 text-white">metal</div>
      <div className="bg-tahiti  w-20 h-20 text-white">tahiti</div>
      <div className="bg-silver w-20 h-20 text-white">silver</div>
      <div className="bg-bubble-gum  w-20 h-20 text-white">bubble-gum</div>
      <div className="bg-bermuda w-20 h-20 text-white">bermuda</div>
</div>


            <div className='flex-col space-y-2'>
            {cols.map((col) => {

                const className = 'bg-' + col;
                return (
                    <div key={col} className="flex items-center justify-between ">
                    <div className="flex items-center space-x-2 ">
                        <div
                                className={`w-10 h-10 ${className}  border border-gray-400 rounded-full mr-4`}
                        
                            ></div>
                            
                            <div>{col}</div>
                    </div>
                    <div className="text-gray-500">var(--color-{col})</div>
                    </div>
                )
            }
            )}</div>
            </div>
      
  )
}

export default Tokens