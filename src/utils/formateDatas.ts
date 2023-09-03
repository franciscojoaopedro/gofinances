export  function formatarMoedas(value:number):string{
    const moeda=  value.toLocaleString("pt-pt",{
        style:"currency",
        currency:"AOA",
    })
    return String(moeda)
}

export   function formatarDate(date:string):string{
    const dateFormatada=  Intl.DateTimeFormat("pt-pt",{
        day:"2-digit",
        month:"2-digit",
        year:"2-digit"
    }).format(new Date(date))
    
    return dateFormatada
}
