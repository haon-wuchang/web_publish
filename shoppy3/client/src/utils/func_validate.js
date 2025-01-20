export const validateSignup = (refs) => {
    // entries
    const refEntries = Object.entries(refs.current);
    // console.log('refEntries------------', refEntries);
    
    for(let i = 0; i <refEntries.length; i++){
        const array = refEntries[i];
        const name = array[0];
        const ref = array[1];

        if(name==='emaildomainRef'){
            if(ref.current.value==='default'){
                alert('선택행');
                ref.current.focus();
                return false;
            }
        }else{
            if(ref.current.value===''){
                alert('입력행');
                ref.current.focus();
                return false;
            }
        }

    }
    return true;
}