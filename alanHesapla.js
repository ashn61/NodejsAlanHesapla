function alanHesapla(yaricap){
    let alan=1
    alan=Math.PI*yaricap*yaricap
    console.log("Yarı Çapı: "+yaricap+" olan dairenin alanı: "+ alan)
}

alanHesapla(process.argv.slice(2))