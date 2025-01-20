export const validateSignup = (refs) => {
    // entries
    const refEntries = Object.entries(refs);
    // console.log('refEntries------------', refEntries);
    
    for(let i = 0; i <refEntries.length; i++){
        const array = refEntries[i];
        const name = array[0];
        const value = array[1];

        if(name==='emaildomainRef'){
            if(value.current.value==='default'){
                alert('선택행');
                value.current.focus();
                return false;
            }
        }else{
            if(value.current.value===''){
                alert('입력행');
                value.current.focus();
                return false;
            }
        }

    }
    return true;
}