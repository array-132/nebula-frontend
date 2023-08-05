import CustomNavbar from "./CustomNavbar";

// eslint-disable-next-line react/prop-types
export default function Base({/*title="Welcome to our website",*/children}){
    return (
        <>
        <div className="container-fluid p-0 m-0">
            <CustomNavbar color="dark" dark expand="md" fixed="" />
            {children}
        </div>
        </>
    )
}