import Button from "./Button.jsx";
import ButtonList from "./ButtonList.jsx";


export default function AppButton () {

    const propsList = [
        {"name" : "All" , "type" : "button"},
        {"name" : "Front-end" , "type" : "button"},
        {"name" : "Back-end" , "type" : "button"},
        {"name" : "Mobile" , "type" : "button"},
        {"name" : "Reset" , "type" : "reset"},
        {"name" : "Submit" , "type" : "submit"}
    ];

    return(
        <>
            <div style={{display:"flex"}}>
                <Button name="All" type="button"></Button>
                <Button name="Front-end" type="button"></Button>
                <Button name="Back-end" type="button"></Button>
                <Button name="Mobile" type="button"></Button>
                <Button name="Reset" type="reset"></Button>
                <Button name="Submit" type="submit"></Button>
            </div>
        
            <div style={{display:"flex"}}>
                <ButtonList list={propsList}></ButtonList>
            </div>
       </>
       );

}