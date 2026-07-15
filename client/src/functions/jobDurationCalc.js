export const calculateDuration = (fromDate, toDate) => {
        const diff = Number(((toDate - fromDate) / (1000 * 60 * 60 * 24 * 365)).toFixed(2))
        if(diff < 0){
            const duration = diff*12 
            return duration + "months"
        }else {
            return diff + "yrs"
        }
    }