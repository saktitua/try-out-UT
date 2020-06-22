
let yearsold =2000;
let yearsnow =2020;

for(yearsold; yearsold <= yearsnow; yearsold ++){
    if(yearsold % 2 ===0){
        console.log(yearsold+' Tahun Kahbisat');
    }else{
        console.log(yearsold+' Bukan Tahun Kahbisat');
    }
}