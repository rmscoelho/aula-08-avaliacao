export const isEmpty = (value) => {

    if(value === undefined || value === null || value === ''){
         alert('Fill all the fields')
        return false;
    }

    return value;
}
export const validatePhone = (value) => {

    if(value === undefined || value === null || value === '' || value.length < 9 || value.length > 9 || isNaN(value)){
        alert('The phone number needs to be 9 digits long')
        return false;
    }

    return value;
}