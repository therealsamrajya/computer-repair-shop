//template reerenders everytime while layout only renders when app loads

export default async function Template({
    children,
}:{
    children: React.ReactNode

}) {
    return (
        <div className="animate-appear">

        
            {children}
        </div>
       
    )
}