export default function Sidebar(){
    return <div className="flex">
        <div className="bg-red-200  h-screen transition-all duration-1000 w-0 md:translate-x-0 -translate-x-96 md:w-96 ">
            sidebar
        </div>
        <div className="bg-green-500 w-full h-screen">
            content
        </div>
    </div>
} 